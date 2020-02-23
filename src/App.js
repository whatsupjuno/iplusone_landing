import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import "./App.css";

import Header from "./Pages/Header";
import BrandImage from "./Pages/BrandImage";
import SubImage from "./Pages/SubImage";
import CardImages from "./Pages/CardImages";
import CardImages2 from "./Pages/CardImages2";
import Photos from "./Pages/Photos";
import Contact from "./Pages/Contact";
import Location from "./Pages/Location";
import Location2 from "./Pages/Location2";

const Box = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

function App() {
  return (
    <div>
      <Header />
      {/* <Box>
        <ReactPlayer
          width="100%"
          height="auto"
          url="https://idoeduvideo.s3.ap-northeast-2.amazonaws.com/movie.mp4"
          playing
          controls
          muted
          style={{ marginBottom: "10px", marginTop: "90px" }}
        />
      </Box> */}
      <BrandImage />
      <SubImage />
      {/* <Introduction />
      <Introduction2 /> */}
      <CardImages />
      <CardImages2 />
      {/* <PrePhoto /> */}
      <Photos />
      {/* <Details /> */}
      {/* <Promotions /> */}
      {/* <LinkToOut /> */}
      <br />
      <Contact />
      <br />
      {/* <Information /> */}
      <br />
      <Location />
      <Location2 />
    </div>
  );
}

export default App;
