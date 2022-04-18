/* eslint-disable max-len */
import styleApp from './App.module.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main/Main';
import Tasks from './Components/Main/Tasks/Tasks';
import YourTasks from './Components/Main/Tasks/YourTasks/YourTasks';
import FullTask from './Components/Main/Tasks/YourTasks/FullTasks/FullTasks';
import Wallet from './Components/Main/Wallet/Wallet';
import Profile from './Components/Main/Profile/Profile';
import Aside from './Components/Aside/Aside';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <BrowserRouter>
      <div className={styleApp.App}>
        <Header />
        <Aside />
        <div className={styleApp.content}>
          <Routes>
            <Route path="" element={<Main/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/yourtasks" element={<YourTasks/>}/>
            <Route path="/yourtasks/1"
              element={<FullTask name="Find A" category="Math" description="Find X in Triangle" additional="None" deadline="23:20" cost="1000" id="4" />}/>
            <Route path="/wallet" element={<Wallet/>}/>
          </Routes>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
