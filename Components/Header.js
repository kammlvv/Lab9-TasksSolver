import React from "react";
import logo from "./img/logo.png";
import styleHeader from './Header.module.css';
function Header() {
    return (
      <header className={styleHeader.header}>
<div className={styleHeader.logotype}><img className={styleHeader.logo}
src={logo} /></div>
<div className={styleHeader.login}><a href="#" >Вход</a>  или  <a href="#" >регистрация</a></div>
<div className={styleHeader.headTask}>
<div className={`${styleHeader.hTasks} ${styleHeader.createTask}`}>Создать задание</div>
<div className={`${styleHeader.hTasks} ${styleHeader.findTask}`} >Найти задание</div>
</div>

      </header>
    );
  }
 
  export default Header;