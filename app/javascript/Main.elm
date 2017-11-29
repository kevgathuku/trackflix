module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


-- MODEL


type alias Model =
    {}



-- INIT


init : ( Model, Cmd Message )
init =
    ( Model, Cmd.none )



-- VIEW


view : Model -> Html Message
view model =
    article []
        [ h2 [ class "f3 fw4 pa3 mv0" ]
            [ text "Albums" ]
        , div [ class "cf pa2" ]
            [ div [ class "fl w-50 w-25-m w-20-l pa2" ]
                [ a [ href "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music", class "db link dim tc" ]
                    [ img [ src "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png", alt "Frank Ocean Blonde Album Cover", class "w-100 db outline black-10" ]
                        []
                    , dl [ class "mt2 f6 lh-copy" ]
                        [ dt [ class "clip" ]
                            [ text "Title" ]
                        , dd [ class "ml0 black truncate w-100" ]
                            [ text "Blonde" ]
                        , dt [ class "clip" ]
                            [ text "Artist" ]
                        , dd [ class "ml0 gray truncate w-100" ]
                            [ text "Frank Ocean" ]
                        ]
                    ]
                ]
            , div [ class "fl w-50 w-25-m w-20-l pa2" ]
                [ a [ href "https://geo.itunes.apple.com/us/album/everybody-looking/id1135576036?at=1l3vqFJ&mt=1&app=music", class "db link dim tc" ]
                    [ img [ src "http://is4.mzstatic.com/image/thumb/Music30/v4/9b/2e/e1/9b2ee13e-35fd-0cc1-d203-e65b4beafc7f/source/400x40000bb.png", alt "Everybody Looking - Album Cover", class "w-100 db outline black-10" ]
                        []
                    , dl [ class "mt2 f6 lh-copy" ]
                        [ dt [ class "clip" ]
                            [ text "Title" ]
                        , dd [ class "ml0 black truncate w-100" ]
                            [ text "Everybody Looking" ]
                        , dt [ class "clip" ]
                            [ text "Artist" ]
                        , dd [ class "ml0 gray truncate w-100" ]
                            [ text "Gucci Mane" ]
                        ]
                    ]
                ]
            ]
        ]



-- MESSAGE


type Message
    = None



-- UPDATE


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Message
subscriptions model =
    Sub.none



-- MAIN


main : Program Never Model Message
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
