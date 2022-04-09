import React from "react";
import styleAside from './Aside.module.css';
import Nav from "./Nav";
function Aside() {
    return (
      <aside className={styleAside.aside}>
<Nav/>
      </aside>
    );
  }
  
  export default Aside;