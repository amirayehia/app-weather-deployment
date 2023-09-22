import './App.css';
import Search from './Components/SearchFile/SearchForm';
import Result from './Components/ResultFile/Result';
import axios from "axios";
import { useEffect, useState } from 'react';
import Card from './UI/Card/Card';

function App() {


  const [currentCityData, setCurrentCityData] = useState(null);
  const [currentCity, setCurentCity] = useState("cairo");
  const [isloading, setIsLoading] = useState(null);
  const [error, setError] = useState("")


  //function to get thecity whitch user entered 
  const cityHandler = (city) => {
    setCurentCity(city)
  }

  //function to get the data from weatherapi
  async function getData(city) {
    try {
      setIsLoading(true)
      const res = await axios(`https://api.weatherapi.com/v1/forecast.json?key=d63f43b3f8e948d7b24144744231209&q=${city}&days=3&alerts=yes`);
      setError('')
      const data = await res.data;
      setCurrentCityData(data)

    } catch (error) {
      setIsLoading(false)
      setCurrentCityData("")
      error.message = "please enter a valid city,country!"
      setError(error.message);

    }
  }

  useEffect(() => {
    getData(currentCity)
  }, [currentCity])

  return (
    <div className="App">
      <Card className='containerCustom'>
        <Search searchByCity={cityHandler} />
        {
          currentCityData ? <Result data={currentCityData} /> : isloading ? <i className="fa-solid fa-spinner fa-spin text-white fs-1"></i> : <p className='text-white fs-1 m-3'>{error}</p>
        }
      </Card>
    </div>
  );
}

export default App;
