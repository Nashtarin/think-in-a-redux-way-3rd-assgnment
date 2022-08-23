import logo from './logo.svg';
import './App.css';
import lws from './images/lws.svg'
import search from './images/search.svg'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Link } from 'react-router-dom';
import SearchBar from './components/Searchbar/SearchBar'
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div>
       
          <Navbar/>
       
          <SearchBar/>
      

       

       
        <Footer/>
       
    </div>
    </Provider>
    
    
  );
}

export default App;
