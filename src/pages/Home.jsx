import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  function handleCardClick(id){
    navigate(`/about/${id}`)
  }

  return (
    <div className="h-full w-full">
      <Header />
      <div className="justify-between flex">
      <input className="border-black border-spacing-1 w-[500px] mt-10 p-3 ml-20 shadow-md" type="text" placeholder="🔍search" />
      <select className="w-[200px] p-2 mt-10 mr-20" >
        <option value="english">english</option>
        <option value="uzbek">uzbek</option>
        <option value="rus">rus</option>
      </select>
      </div>
      
      <div className="wrapper container mx-auto flex gap-[50px] pt-[50px] flex-wrap pb-[100px]">
        {data.length > 0 &&
          data.map((country, index) => (
            <div
              key={index}
              className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
              onClick={handleCardClick}
            >
              <img
                src={country.flags.png}
                className=" rounded-md w-[264px] h-[160px]"
                alt=""
              />
              <div className="text p-4">
                <h1 className="text-2xl font-bold">{country.name.common}</h1>
                <h1 className="text-xl">Population: {country.population.toLocaleString()}</h1>
                <h1 className="text-xl">Region: {country.region}</h1>
                <h1 className="text-xl">
                  Capital: {country.capital ? country.capital[0] : "N/A"}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;
