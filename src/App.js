import "./App.css";
import Header from "./components/Header/Header";
import SliderImages from "./components/SliderImages";
import CardSlider from "./components/CardSlider";
import Premieres from "./components/Premieres";
// import SingleMovie from './components/SingleMovie'
import "bootstrap/dist/css/bootstrap.min.css";
// import AllMovies from './components/AllMovies';
import Footer from "./components/Footer";
import AllMoviesFetch from "./components/AllMoviesFetch";
import SingleMovieFetch from "./components/SingleMovieFetch";
import Registration from "./components/Registration";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <AllMoviesFetch />
            </Route>
            <Route exact path="/movies">
              <AllMoviesFetch />
            </Route>
            <Route exact path="/movies/:_id">
              <SingleMovieFetch />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
