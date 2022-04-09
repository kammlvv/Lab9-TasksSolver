import React from "react";
import styleMain from'./Main.module.css';
function Main() {
    return (
      <main className={styleMain.main}>
        <h1 className={styleMain.slogan1}>Решим вашу проблему за считанные минуты</h1>
        <p className={styleMain.slogan2}>Найдем надёжного исполнителя для решения ваших задач</p>
        <input className= {styleMain.search} type="text" placeholder= "Напишите, с каким предметом вам помочь"/>
        <button className= {styleMain.searchButton}>Заказать задачу</button>

      </main>
    );
  }
  
  export default Main;