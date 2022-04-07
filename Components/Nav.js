import React from "react";
import './../App.css';
function Nav() {
    return (
      <nav className="nav">
<div className="NAV profile"><a href="#" >Профиль</a> </div>
<div className="NAV tasks"><a href="#">Задачи</a> </div>
<div className="NAV wallet"><a href="#">Кошелёк</a> </div>
<div className="NAV statistics"><a href="#">Статистика</a> </div>
<div className="NAV aboutUs"><a href="#">О нас</a> </div>

      </nav>
    );
  }
  
  export default Nav;