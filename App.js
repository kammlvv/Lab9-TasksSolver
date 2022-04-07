import './App.css';
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from './Components/Main';
import Aside from './Components/Aside';

function App() {
  return (
    <div className='App'>
<Header/>
<Aside/>
<Main/>
<Footer/>
    </div>
  );
}

export default App;
