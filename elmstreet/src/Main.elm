module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)



---- MODEL ----
-- Seed data


seedShows : List Show
seedShows =
    [ Show "The Big Bang Theory" 1418 "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
    , Show "American Horror Story" 1413 "/7htwyZzjIUFIIkGQ6HhMgv2kVmM.jpg"
    , Show "Marvel's Iron Fist" 62127 "/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg"
    , Show "Shameless" 34307 "/iRyQTp2L437k6zfFCvZSOWaxQFA.jpg"
    , Show "Law & Order: Special Victims Unit" 2734 "/yzMQBlirydvKp4Zgr5FbXlsrRmw.jpg"
    , Show "The Simpsons" 456 "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
    , Show "The Walking Dead" 1402 "/yn7psGTZsHumHOkLUmYpyrIcA2G.jpg"
    , Show "Game of Thrones" 1399 "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg"
    , Show "Friends" 1668 "/7buCWBTpiPrCF5Lt023dSC60rgS.jpg"
    , Show "Doctor Who" 57243 "/3EcYZhBMAvVw4czcDLg9Sd0FuzQ.jpg"
    , Show "Better Call Saul" 60059 "/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg"
    , Show "Supernatural" 1622 "/pui1V389cQft0BVFu9pbsYLEW1Q.jpg"
    , Show "American Vandal" 73126 "/pZH8L0gMjeHJMT29mTXWn7mEliR.jpg"
    , Show "Family Guy" 1434 "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
    , Show "The Flash" 60735 "/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg"
    , Show "BoJack Horseman" 61222 "/1bnrSsJNejoQq8lGBDECQroGjPz.jpg"
    , Show "Grey's Anatomy" 1416 "/mgOZSS2FFIGtfVeac1buBw3Cx5w.jpg"
    , Show "NCIS" 4614 "/1ubAPydzsb9VzhqeUGGDA7DZCUy.jpg"
    , Show "Marvel's Agents of S.H.I.E.L.D." 1403 "/xjm6uVktPuKXNILwjLXwVG5d5BU.jpg"
    , Show "Suits" 37680 "/nVz7cZZ59PsCLgiWFC0M0N6AFC3.jpg"
    ]


type alias ErrorMessage =
    String


type alias Show =
    { name : String
    , id : Int
    , posterPath : String
    }


type alias Shows =
    List Show


type alias ShowsResponse =
    Result ErrorMessage Shows


type alias Model =
    { loading : Bool
    , popularShows : ShowsResponse
    }


initialModel =
    { loading = False
    , popularShows = Result.Ok []
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



---- UPDATE ----


type Msg
    = FetchShows
    | LoadShows Shows
    | SetError ErrorMessage


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchShows ->
            let
                updatedModel =
                    { model | loading = True }
            in
            ( updatedModel, Cmd.none )

        LoadShows shows ->
            let
                updatedModel =
                    { model | popularShows = Result.Ok shows }
            in
            ( updatedModel, Cmd.none )

        SetError errorMsg ->
            let
                updatedModel =
                    { model | popularShows = Result.Err errorMsg }
            in
            ( updatedModel, Cmd.none )



---- VIEW ----


view : Model -> Browser.Document Msg
view model =
    { title = "Trackflix"
    , body =
        [ div [ class "App" ]
            [ header [ class "App-header" ]
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
                    [ button [ onClick (LoadShows seedShows) ] [ text "Load shows" ] ]

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



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.document
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
