import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardSlider from './components/CardSlider'
import Premieres from './components/Premieres';
// import SingleMovie from './components/SingleMovie'
import 'bootstrap/dist/css/bootstrap.min.css';
// import AllMovies from './components/AllMovies';
import Footer from './components/Footer';
import AllMoviesFetch from './components/AllMoviesFetch';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
     <Router>
        <div>
        <Header/>
        <Switch>
        <Route exact path="/">
        <SliderImages/>
        <CardSlider/>
        <Premieres/>
        </Route>
        <Route exact path="/movies">
        <AllMoviesFetch/>
        </Route>
        <Route exact path="/movies/:_id">
        <SingleMovieFetch/>
        </Route>
        <Route exact path="/registration">
        <Registration/>
        </Route>
        </Switch>
        <Footer />
      </div>
     </Router>
    );
  }
  
  export default App;