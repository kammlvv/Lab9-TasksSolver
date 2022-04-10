import React from "react";
import styleMain from'./Main.module.css';

import newElement from'./newElement.js';
function Main() {
    return (
      <main className={styleMain.main}>
        <div className={styleMain.slogan}>
        <h1 className={styleMain.slogan1}>Решим вашу проблему за считанные минуты</h1>
        <p className={styleMain.slogan2}>Найдем надёжного исполнителя для решения ваших задач</p>
        </div>

        <div className={styleMain.searchBox}>
        <input className= {styleMain.search} type="text" placeholder= "Напишите, с каким предметом вам помочь"/>
        <button className= {styleMain.searchButton} onclick="newElement()" >Заказать задачу</button>
        </div>


    <div className={styleMain.subjectsBox}>
      <div className={styleMain.subjects} ><a  href="#">Математика</a></div>
			<div className={styleMain.subjects} ><a  href="#">Информатика</a></div>
			<div className={styleMain.subjects} ><a  href="#">Английский язык</a></div>
			<div className={styleMain.subjects} ><a  href="#">Русский язык</a></div>
			<div className={styleMain.subjects} ><a  href="#">Программирование</a></div>
      
    </div>


      </main>
    );
  }
  
  export default Main;