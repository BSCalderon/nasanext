import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
//import styles from './layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
    Jumbotron,
    Navbar,
    NavItem,
    Nav,
    NavLink,

  } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';

export default function Home(){
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto(){
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=nINBSGus6O2KCrUJWsNnCohhRcTOMiTiHOy0GhjC`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if(!photoData) return <div />;


  return(
    <Layout title="Photo of the Day">
      <title>Home</title>
      <img
        src={photoData.url}
        alt={photoData.title}
        className="photo"
      />
      <div>
        <h1>{photoData.title}</h1>
        <p className="data">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </Layout>
    
  );
}