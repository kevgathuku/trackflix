module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


-- MODEL


type alias Show =
    { id : Int
    , name : String
    , overview : String
    , show_poster : String
    }


type alias Model =
    { shows : List Show
    }



-- FLAGS


type alias Flags =
    List Show



-- INIT


init : Flags -> ( Model, Cmd Message )
init flags =
    ( { shows = flags
      }
    , Cmd.none
    )



-- VIEW


showTemplate : Show -> Html Message
showTemplate show =
    div [ class "fl w-50 w-25-m w-20-l pa2" ]
        -- TODO: Replace href with show details page. Fetch individual show data to access it
        [ a [ href "https://www.themoviedb.org/?language=en", class "db link dim tc" ]
            [ img [ src ("https://image.tmdb.org/t/p/w342" ++ show.show_poster), alt (show.name ++ " Poster"), class "w-100 db outline black-10" ]
                []
            , dl [ class "mt2 f6 lh-copy" ]
                [ dt [ class "clip" ]
                    [ text "Title" ]
                , dd [ class "ml0 black truncate w-100" ]
                    [ text show.name ]
                ]
            ]
        ]


view : Model -> Html Message
view model =
    article []
        [ h2 [ class "f3 fw4 pa3 mv0" ]
            [ text "TV Shows" ]
        , div [ class "cf pa2" ]
            (List.map
                showTemplate
                model.shows
            )
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


main : Program Flags Model Message
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
