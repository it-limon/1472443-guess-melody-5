import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import AuthScreen from "../auth-screen/auth-screen";
import GameScreen from "../game-screen/game-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import WinScreen from "../win-screen/win-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              errorsCount={errorsCount}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
        <Route path="/dev-artist" exact>
          <ArtistQuestionScreen
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route path="/dev-genre" exact>
          <GenreQuestionScreen
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route path="/result" exact>
          <WinScreen />
        </Route>
        <Route path="/lose" exact>
          <GameOverScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
