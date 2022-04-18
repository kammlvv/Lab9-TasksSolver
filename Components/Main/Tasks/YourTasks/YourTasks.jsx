/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from "react";
import styleTasks from "./YourTasks.module.css";
import ShortTask from "./ShortTask/ShortTasks";
import FullTask from "./FullTasks/FullTasks";
// eslint-disable-next-line require-jsdoc
function YourTasks(props) {
  return (
    <main className={styleTasks.yourTask}>
      <div className={styleTasks.yourTasksBox}>
        <div className={styleTasks.TaskList}>
          <ShortTask name="Find X" cost="5000" id="1" />
          <ShortTask name="Find Y" cost="2000" id="2" />
          <ShortTask name="Find Z" cost="3500" id="3" />
          <ShortTask name="Find A" cost="1000" id="4" />
        </div>
        <div className={styleTasks.TaskBox}>
          <FullTask name="Find A" category="Math" description="Find X in Triangle" additional="None" deadline="23:20" cost="1000" id="4" />
        </div>
      </div>
    </main>
  );
}

export default YourTasks;
