import React, { useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import banner3 from '../../assets/images/banner3.png';
import salaryIcon from '../../assets/images/banner4.png'; // Assuming you have an icon for salary

// Styling for the overall container of the component
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
  background: #fff;
`;

// Header section containing the animated elements
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; // Adjust based on your design needs
  margin: 0 auto;
  background-color: red;
`;

// Content section for additional information
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

// Title section for descriptive text
const TitleSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

// Container for images that will animate on scroll
const ImageContainer = styled(motion.div)`
  width: 300px;
  height: 400px;
  position: relative;
`;

// Container for the salary info box that also animates
const InfoBox = styled(motion.div)`
  background: yellow;
  padding: 20px;
  border-radius: 10px;
`;

// Component function
function InteractiveCoachDisplay() {
  const { scrollYProgress } = useViewportScroll();
  const xRange = useTransform(scrollYProgress, [0, 0.3], ['100%', '-100%']); // Horizontal movement
  const rotateRange = useTransform(scrollYProgress, [0, 0.3], [0, -360]); // Reverse rotation

  return (
    <Container>
      <Header>
        {/* <ImageContainer style={{ x: xRange, rotate: rotateRange }}>
          <Image src={banner3} alt="مربی" width={400}  height={400}/>
        </ImageContainer> */}
        {/* <InfoBox style={{ x: xRange }}>
          <Image src={salaryIcon} alt="حقوق" layout="fill" objectFit="cover" />
          <div>حقوق <br /> $82,000</div>
        </InfoBox> */}
      </Header>
      <Content>
        <TitleSection>
          <h1>مربیانی که اهمیت می‌دهند</h1>
          <p>شما نیازی به تنهایی این کار را انجام دادن ندارید. به جامعه‌ای از افراد همفکر بپیوندید که از سراسر جهان آمده‌اند و با مربیانی که تجربه عملی واقعی دارند و به کمک به دیگران علاقه‌مند هستند.</p>
        </TitleSection>
      </Content>
    </Container>
  );
}

export default InteractiveCoachDisplay;
