import React, { useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Grid, Typography } from "@mui/material";

// Keyframes for continuous sliding animation
const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } // Move by half since we have two sets of logos
`;

// Styled components
const LogoSliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 100px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  animation: ${slide} 10s linear infinite;
  width: 200%; // Double the width to hold two sets of logos
`;

const LogoWrapper = styled.div`
  flex: none;
  width: 100px;
  height: 50px;
  position: relative;
`;

const imageData = [
  { src: "/logo1.png", alt: "Logo 1" },
  { src: "/logo2.png", alt: "Logo 2" },
  { src: "/logo3.png", alt: "Logo 3" },
  { src: "/logo4.png", alt: "Logo 4" },
  { src: "/logo5.png", alt: "Logo 5" },
  { src: "/logo6.png", alt: "Logo 6" },
  { src: "/logo7.png", alt: "Logo 7" },
  { src: "/logo8.png", alt: "Logo 8" },
  { src: "/logo9.png", alt: "Logo 9" },
  { src: "/logo10.png", alt: "Logo 10" },
  { src: "/logo11.png", alt: "Logo 11" },
  { src: "/logo12.png", alt: "Logo 12" },
  { src: "/logo13.png", alt: "Logo 13" },
  { src: "/logo14.png", alt: "Logo 14" },
  { src: "/logo15.png", alt: "Logo 15" },
  { src: "/logo16.png", alt: "Logo 16" },
  { src: "/logo17.png", alt: "Logo 17" },
  { src: "/logo18.png", alt: "Logo 18" },
  { src: "/logo19.png", alt: "Logo 19" },
  { src: "/logo20.png", alt: "Logo 20" },
];

// Duplicate the logos array
const duplicatedImageData = [...imageData, ...imageData];

function LogoSlider() {
  const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    color: #333;
    margin-top: 0;
    margin-bottom: 30px;
  `;

const Highlight = styled.span`
color: red; // Directly applying the color change
`;
  return (
    <Grid >
       <Title>
       همکاران ما<Highlight> در سطح کشور  </Highlight> مانند...
      </Title>
      <LogoSliderWrapper>
        <LogoContainer>
          {duplicatedImageData.map((item, index) => (
            <LogoWrapper key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          ))}
        </LogoContainer>
      </LogoSliderWrapper>
    </Grid>
  );
}

export default LogoSlider;
