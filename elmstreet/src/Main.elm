module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Http exposing (..)
import HttpBuilder exposing (..)
import Json.Decode as Decode exposing (Decoder, int, list, string)
import Json.Decode.Pipeline exposing (required)
import Url.Builder as Url



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.document
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }



---- MODEL ----


type alias ErrorMessage =
    String


type alias Model =
    { loading : Bool
    , popularShows : ShowsResponse
    }


type alias ShowsResponse =
    Result ErrorMessage Shows


type alias Shows =
    List Show


type alias Show =
    { name : String
    , id : Int
    , posterPath : String
    }


initialModel =
    { loading = False
    , popularShows = Result.Ok []
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



---- HTTP ----


hostURL =
    "http://localhost:8000"


discoverURL =
    Url.crossOrigin hostURL
        [ "api", "discover" ]
        []


showDecoder : Decoder Show
showDecoder =
    Decode.succeed Show
        |> required "name" string
        |> required "id" int
        |> required "poster_path" string


showsDecoder : Decoder (List Show)
showsDecoder =
    Decode.field "data" (Decode.field "results" (list showDecoder))


getPopularShows : Cmd Msg
getPopularShows =
    Http.send LoadedShows (Http.get discoverURL showsDecoder)


httpErrorToString : Http.Error -> String
httpErrorToString error =
    case error of
        BadUrl text ->
            "Bad Url: " ++ text

        Timeout ->
            "Http Timeout"

        NetworkError ->
            "Network Error"

        BadStatus response ->
            "Bad Http Status: " ++ String.fromInt response.status.code

        BadPayload message response ->
            "Bad Http Payload: "
                ++ message
                ++ " ("
                ++ String.fromInt response.status.code
                ++ ")"



---- UPDATE ----


type Msg
    = FetchShows
    | LoadedShows (Result Http.Error Shows)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchShows ->
            let
                updatedModel =
                    { model | loading = True }
            in
            ( updatedModel, getPopularShows )

        LoadedShows result ->
            case result of
                Ok shows ->
                    ( { model | popularShows = Result.Ok shows }
                    , Cmd.none
                    )

                Err errorMsg ->
                    ( { model | popularShows = errorMsg |> httpErrorToString |> Result.Err }, Cmd.none )



---- VIEW ----


view : Model -> Browser.Document Msg
view model =
    { title = "Trackflix"
    , body =
        [ div [ class "App" ]
            [ Html.header [ class "App-header" ]
                [ h1 [ class "App-title" ] [ text "Trending TV Shows" ]
                ]
            , section [] [ movieList model.popularShows ]
            ]
        , div []
            []
        ]
    }


movieList : ShowsResponse -> Html Msg
movieList response =
    case response of
        Result.Ok shows ->
            div [ class "cf pa2" ]
                (if List.length shows == 0 then
                    [ button [ onClick FetchShows ] [ text "Load shows" ] ]

                 else
                    List.map showTemplate shows
                )

        Result.Err errMsg ->
            div [ class "cf pa2" ] [ text "Sorry. Unable to load the shows" ]


showTemplate : Show -> Html msg
showTemplate show =
    div [ class "fl w-50 w-25-m w-20-l pa2" ]
        [ a [ href "https://www.themoviedb.org/?language=en", class "db link dim tc" ]
            [ img [ src ("https://image.tmdb.org/t/p/w342" ++ show.posterPath), alt show.name, class "w-100 db outline black-10" ] []
            , dl [ class "mt2 f6 lh-copy" ]
                [ dt [ class "clip" ] [ text "Title" ]
                , dd [ class "ml0 black truncate w-100" ] [ text show.name ]
                ]
            ]
        ]
