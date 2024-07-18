import React from 'react';
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Footer from './components/Footer/Footer.jsx';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalogo from './components/Catalog/Catalogo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Banner/>
    <Catalogo/>
    <Footer/>
  </React.StrictMode>
);
