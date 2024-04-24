import { useState } from "react";
import "./App.css";
import {
  title,
  searchPlaceholder,
  buttonPlaceholder,
} from "./components/constanta";

function App() {
  const [search, setSearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");

  const searched = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setCurrentWeather(result);
      });
  };
  const api = {
    key: "e5bfc32995db55adf3b136208cb86e7e",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  return (
    <>
      <h1>{title}</h1>
      <input
        className="mt-10 w-64 h-12 px-4 py-2 rounded-md bg-slate-50 text-black"
        type="text"
        placeholder={searchPlaceholder}
        onChange={(e) => setSearch(e.target.value)}
      ></input>

      <button onClick={searched} className="ml-4 bg-red-500">
        {buttonPlaceholder}
      </button>
      {typeof currentWeather.main !== "undefined" ? (
        <>
          <h1 className="mt-8">{currentWeather.name}</h1>
          <p className="mt-8 text-orange-400">{currentWeather.main.temp}°C</p>
          <p className="mt-8">{currentWeather.weather[0].main}</p>
        </>
      ) : null}
    </>
  );
}

export default App;
