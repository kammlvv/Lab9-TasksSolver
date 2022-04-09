import React from "react";
import styleNav from './Nav.module.css';
function Nav() {
    return (
      <nav className={styleNav.nav}>
<div className={`${styleNav.NAV} ${styleNav.profile}`}><a href="#" >Профиль</a> </div>
<div className={`${styleNav.NAV} ${styleNav.tasks}`}><a href="#">Задачи</a> </div>
<div className={`${styleNav.NAV} ${styleNav.wallet}`}><a href="#">Кошелёк</a> </div>
<div className={`${styleNav.NAV} ${styleNav.statistics}`}><a href="#">Статистика</a> </div>
<div className={`${styleNav.NAV} ${styleNav.aboutUs}`}><a href="#">О нас</a> </div>

      </nav>
    );
  }
  
  export default Nav;