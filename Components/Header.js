import React from "react";
import logo from "./logo.png";
import './Header.css';
function Header() {
    return (
      <header className="header">
<img className="logo"
src={logo} />
<div className="Login"><a href="#" >Вход</a>  или  <a href="#" >регистрация</a></div>
<div className="headTask">
<div className="hTasks createTask">Создать задание</div>
<div className="hTasks findTask" >Найти задание</div>
</div>

      </header>
    );
  }
 
  export default Header;