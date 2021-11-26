import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Electronics from './components/Electronics/Electronics';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ReviewProducts from './components/ReviewProducts/ReviewProducts';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';

import MenProduct from './components/Home/AllProducts/MenProduct/MenProduct';
import Men from './components/SingleProduct/Men/Men';
import Women from './components/SingleProduct/Women/Women';
import Fashion from './components/SingleProduct/Fashion/Fashion';
import Bags from './components/SingleProduct/Bags/Bags';
import Game from './components/SingleProduct/Game/Game';
import HomeProduct from './components/SingleProduct/HomeProduct/HomeProduct';
import Electric from './components/SingleProduct/Electric/Electric';
import Bike from './components/SingleProduct/Bike/Bike';
import Team from './components/Team/Team';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/men">
              <Men></Men>
            </Route>
            <Route path="/women">
              <Women></Women>
            </Route>
            <Route path="/fashion">
              <Fashion></Fashion>
            </Route>
            <Route path="/bags">
              <Bags></Bags>
            </Route>
            <Route path="/game">
              <Game></Game>
            </Route>
            <Route path="/homeProduct">
              <HomeProduct></HomeProduct>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <Route path="/electric">
              <Electric></Electric>
            </Route>
            <Route path="/bike">
              <Bike></Bike>
            </Route>
            <Route path="/menProduct">
              <MenProduct></MenProduct>
            </Route>
            <Route path="/electronics">
              <Electronics></Electronics>
            </Route>
            <Route path="/review">
              <ReviewProducts></ReviewProducts>
            </Route>
            <Route path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
