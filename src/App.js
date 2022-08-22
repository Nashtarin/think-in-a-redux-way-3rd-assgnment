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

function App() {
  return (
    <div>
          {/* <!-- navigation --> */}
          <Navbar/>
       
          <SearchBar/>
      

        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
           
        <Header/>
        <CardGrid/>
        </section>

        {/* <!-- footer --> */}
        <Footer/>
       
    </div>
    
  );
}

export default App;
