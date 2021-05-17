import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'
import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
    Card,
    Button,

} from 'reactstrap'

import Layout from '../components/layout';




const photopicker = () => {
    const[startDate, setStartdate] = useState(new Date());
    const[photos, setPhotos] = useState([]);
    const[loaded, setLoaded] = useState(false);
    const[counter, setCounter] = useState(0);

    const fetching = () => {
    setCounter(0);
    const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=sAIiEneoM8ZdrZOmB5bfAgjGxC5qRIodPvIfhLNb&earth_date=';
    const newUrl = apiUrl.concat(startDate.toISOString().slice(0, 10));
    //console.log("string concat: ", apiUrl.concat(startDate.toISOString().slice(0, 10)))
    fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      setPhotos(data);
      console.log("data from fetching:",data);
      setLoaded(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    console.log("date:", startDate.toISOString().slice(0, 10));
  }

  const previousPhoto = () => {
    setCounter((counter == 0) ? counter : counter - 1);
  }
  const nextPhoto = () => {
    setCounter(counter + 1);
  }
  //console.log("data from photos:", photos);
    return (
        <Layout title="Photo Picker">
            <div className="container">
                <DatePicker 
                    selected={startDate} 
                    onChange={date => setStartdate(date)}
                    popperPlacement="left-start"/>
                <div className="container">
                    <Button className="btn btn-primary btn-sm" onClick={fetching}>
                        Fetch photos
                    </Button>
                    {' '}
                    <Button className="btn btn-primary btn-sm" onClick={previousPhoto}>
                        Previous
                    </Button>
                    {' '}
                    <Button className="btn btn-primary btn-sm" onClick={nextPhoto}>
                        Next
                    </Button>
                </div>
                
                <div className="container">
                    { loaded ? 
                    <div style={{textAlign: 'center'}}>
                        <img className="photo" src={photos.photos[counter].img_src} alt="mars"></img>
                        <br></br>
                        <text className=" mb-2 bg-info text-white">Rover: {photos.photos[counter].rover.name}</text>
                        <br></br>
                        <text className=" mb-2 bg-info text-white">Status: {photos.photos[counter].rover.status}</text>
                        <br></br>
                        <text className=" mb-2 bg-info text-white">Camera: {photos.photos[counter].camera.full_name}</text>
                    </div>
                    : 
                    <img src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F765877054%2F960x0.jpg%3Ffit%3Dscale'} alt="space"></img>
                    }
                    </div>
                </div>
        </Layout>
    )
}

export default photopicker