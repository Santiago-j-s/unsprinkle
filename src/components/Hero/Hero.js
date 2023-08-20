import React from "react";
import styled from "styled-components";
import ImageSources from "../ImageSources";

function Hero() {
  return (
    <Wrapper>
      <PictureImage>
        <ImageSources baseSrc="/images/hero-img.jpg" />
        <Image
          src="/images/hero-img.jpg"
          alt="a light brown cat looking directly into the eyes of the reader, its eyes are blue"
        />
      </PictureImage>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const PictureImage = styled.picture`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
