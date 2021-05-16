import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

import Layout from '../components/layout';

const Weather = () => {
    const[data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/')
        .then(function (response) {
            // handle success
            console.log(response.data);
            setData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })})  
    
  return (
      <>  
      <Layout>
          <h2>Weather!</h2>
            <table>
                <tbody>
                    {data.map((item) => (
                        <tr>{item.date} {item.maxTempF} {item.minTempF} {item.maxTempC} {item.minTempC}</tr> ))}
                </tbody>
            </table>
       </Layout>    
      </>
  );
  
}
export default dynamic(() => Promise.resolve(Weather), {
    ssr: false
  })