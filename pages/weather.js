import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

import Layout from "../components/layout";

const Weather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://agile-beach-69479.herokuapp.com/")
      .then(function (response) {
        // handle success
        console.log(response.data);
        response.data.shift();
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  return (
    <>
      <Layout title="Weather">
        <table className="weather-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Max Temp °F</th>
              <th>Min Temp °F</th>
              <th>Max Temp °C</th>
              <th>Min Temp °C</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.date}</td>
                <td>{item.maxTempF}</td>
                <td>{item.minTempF}</td>
                <td>{item.maxTempC}</td>
                <td>{item.minTempC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
};
export default dynamic(() => Promise.resolve(Weather), {
  ssr: false,
});
