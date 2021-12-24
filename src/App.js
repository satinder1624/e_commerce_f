import "./css/style.css";
import SubPartsCenter from "./components/SubPartsCenter";
import TodayCenter from "./components/TodayCenter";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function App() {
  const fetchApi = (location, headingReference) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_SECERET_API}&q=${location}&days=5&aqi=yes&alerts=no`
      )
      .then((res) => {
        setTodayData(res.data.current);
        setForecast(res.data.forecast.forecastday);
        let newF = [];
        newF = [...res.data.forecast.forecastday];
        if (newF.length === 4) {
          setForecast(newF);
        }
        if (newF.length === 5) {
          newF.splice(0, 1);
          setForecast(newF);
        }
      });

    if (headingReference.current !== "notChecked") {
      headingOne.current.style.color = "rgb(113,116,121)";
      headingTwo.current.style.color = "rgb(113,116,121)";
      headingThree.current.style.color = "rgb(113,116,121)";
      headingReference.current.style.color = "rgb(95, 176, 232)";
    }
  };

  useEffect(() => {
    fetchApi("Hamilton, Ontario, Canada", headingTwo);
  }, []);

  const [todayData, setTodayData] = useState([]);
  const [forecast, setForecast] = useState([]);

  const headingOne = useRef("notChecked");
  const headingTwo = useRef("notChecked");
  const headingThree = useRef("notChecked");

  return (
    <div className="App">
      <div className="cityNames">
        <h1
          ref={headingOne}
          onClick={() => {
            fetchApi("Ottawa, Ontario, Canada", headingOne);
          }}
        >
          Ottawa
        </h1>
        <h1
          ref={headingTwo}
          onClick={() => {
            fetchApi("Hamilton, Ontario, Canada", headingTwo);
          }}
        >
          Hamilton
        </h1>
        <h1
          ref={headingThree}
          onClick={() => {
            fetchApi("Vaughan, Ontario, Canada", headingThree);
          }}
        >
          Vaughan
        </h1>
      </div>

      {todayData.length === 0 ? (
        fetchApi("Hamilton, Ontario, Canada", headingTwo)
      ) : (
        <div className="dataContainer">
          <TodayCenter currentData={todayData} />
          <div className="subDataContainer">
            {forecast.map((item) => (
              <SubPartsCenter key={item.date} list={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
