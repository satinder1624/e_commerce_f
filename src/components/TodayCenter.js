import React from "react";
import lib from "../lib/todaySet";
function TodayCenter({ currentData }) {
  let today = currentData.condition.text;
  const temp = currentData.temp_c;

  let todayDescriptionArr = [];
  todayDescriptionArr = lib(today);

  return (
    // todayContainer
    <div className="todayContainer">
      <div>
        <span className="todayText">Today</span>
      </div>
      {/* todayContainer-description */}
      <div className="todayContainer-description">
        <div>
          <i className={todayDescriptionArr[1]}></i>
        </div>
        {/* todayContainer-description--temp */}
        <div className="todayContainer-description--temp">
          <span className="degreeText">{temp}&#176;</span>
          <span>{todayDescriptionArr[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default TodayCenter;
