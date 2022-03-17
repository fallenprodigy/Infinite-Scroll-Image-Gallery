import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import UnsplashImage from "./components/UnsplashImage";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const accessKey = process.env.REACT_APP_ACCESSKEY;

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}=10`)
      .then((res) => {
        setImages([...images, ...res.data]);
      });
  });
  return (
    <div className="App">
      <Heading />
      <Loader />
      <UnsplashImage />
      {images.map((image) => (
        <UnsplashImage url={image.urls.thumb} key={image.id} />
      ))}
    </div>
  );
}

export default App;
