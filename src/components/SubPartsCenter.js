import React from "react";
import lib from "../lib/todaySet";
import find from "../lib/findDay";
function SubPartsCenter({ list }) {
  let today = list.day.condition.text;

  let todayDescriptionArr = [];
  todayDescriptionArr = lib.setDescription(today);

  return (
    <div className="forecastContainer">
      <div>
        <span className="nextDayText">{find.findDay(list.date)}</span>
      </div>
      <div className="forecastContainer-description">
        <div>
          <i className={todayDescriptionArr[1]}></i>
        </div>
        <div className="forecastContainer-description--temp">
          <span className="degreeTextSub">{list.day.maxtemp_c}&#176;</span>
        </div>
      </div>
    </div>
  );
}

export default SubPartsCenter;
