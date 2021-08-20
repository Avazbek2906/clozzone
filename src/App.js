// import React from 'react'
import './App.css';
import Nav from './Components/Nav/Nav';
import CabinetPage from './Pages/CabinetPage';
import FilterPage from './Pages/FilterPage';
import HomePage from './Pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import ZakazPage from './Pages/ZakazPage';
import MyZakazPage from './Pages/MyZakazPage';
import OformPage from './Pages/OformPage';
import AboutPage from './Pages/AboutPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/Рубашки' component={FilterPage} />
          <Route path='/БАЗОВАЯ' component={CabinetPage} />
          <Route path='/заказы' component={ZakazPage} />
          <Route path='/Моизаказы' component={MyZakazPage} />
          <Route path='/Оформление' component={OformPage} />
          <Route path='/ОНac' component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
