import React from "react";
import godrej from "../assets/portfolio/godrej.png";
import moneymind from "../assets/portfolio/moneymind.png";
import weather from "../assets/portfolio/weather.png";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: godrej,
      liveurl: "https://godrejstore.vercel.app/",
      githuburl: "https://github.com/Aravindtirumalasetty/GodrejStore",
    },
    {
      id: 2,
      src: moneymind,
      liveurl: "https://moneyminder.onrender.com/",
      githuburl: "https://github.com/Aravindtirumalasetty/personal-finance",
    },
    {
      id: 3,
      src: weather,
      liveurl: "https://weather-params.netlify.app/",
      githuburl: "https://github.com/Aravindtirumalasetty/weatherdetails",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveurl, githuburl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to={liveurl}>Demo</Link>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to={githuburl}>Code</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
