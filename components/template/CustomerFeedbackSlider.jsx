import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  position: relative;
`;

const FeedbackContainer = styled.div`
  padding: 40px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 15px;
  margin: 20px;
  text-align: center;
  max-width: 450px;
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  perspective: 1000px; /* for 3D flip effect */
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  position: relative;
  ${(props) => props.isFlipped && css`
    transform: rotateY(180deg);
  `}
`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  /* padding: 40px; */
  box-sizing: border-box;
`;

const FeedbackText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 20px 0;
`;

const CustomerName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const CustomerTitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const QuoteIcon = styled.span`
  font-size: 30px;
  color: #E66551;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 20px;
`;

const Arrow = styled.div`
  font-size: 30px;
  color: #E66551;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const CustomNextArrow = styled(Arrow)`
  right: -35px;
`;

const CustomPrevArrow = styled(Arrow)`
  left: -35px;
`;

const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
};

const CustomerFeedbackSlider = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const sliderRef = useRef(null);

  const handleCardClick = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    if (flippedCards[id]) {
      sliderRef.current.slickPlay();
    } else {
      sliderRef.current.slickPause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const feedbacks = [
    { id: 1, text: "نمی‌توانم به اندازه کافی از فریموت تشکر کنم. شغل جدید من بهترین شغلی است که تا به حال داشته‌ام. پس از ۱۰ سال کار فیزیکی، حالا هر روز هیجان‌زده برای رفتن به کار بیدار می‌شوم.", name: "نیکلاس کوور", title: "توسعه‌دهنده وب", avatar: "https://via.placeholder.com/50" },
    { id: 2, text: "امروز به عنوان توسعه‌دهنده شاپیفای در یک شرکت استخدام شدم، پس از پنج ماه فریلنسینگ پس از تکمیل فریموت! سپاسگزارم از جن فری و آرون جک، بقیه تیم فریموت، و افراد این گروه که زمانی که واقعا در شروع فریلنسینگ با مشکل مواجه شدم، از من حمایت کردند!", name: "کاترینا فلوید", title: "توسعه‌دهنده نرم‌افزار", avatar: "https://via.placeholder.com/50" },
    { id: 3, text: "از ماه می تا دسامبر سال گذشته، به عنوان فریلنسر با نرخ ساعتی ۱۴ دلار کار کردم، اما زمانی که موفق به کسب یک موقعیت شغلی با حقوق سالانه ۱۴۰ هزار دلار شدم، این برای من بسیار مهم بود. نمی‌خواهم خودنمایی کنم، بلکه می‌خواهم شما یا هر کس دیگری که این را می‌خواند را تشویق کنم که می‌توانید پایدار بمانید و موفق شوید.", name: "شان تامپسون", title: "توسعه‌دهنده فریلنس", avatar: "https://via.placeholder.com/50" },
  ];
  const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #666;
  margin-top: 0;
  margin-bottom: 30px;
`;
  return (
    <SliderWrapper>
           <Title>بازخورد دانش آموزان</Title>
      <Subtitle>"نتایج چیزی است که اهمیت دارد"</Subtitle>
      <Slider ref={sliderRef} {...settings}>
        {feedbacks.map(feedback => (
          <FeedbackContainer key={feedback.id} onClick={() => handleCardClick(feedback.id)}>
            <Card isFlipped={flippedCards[feedback.id]}>
              <CardFront>
                <QuoteIcon>“</QuoteIcon>
                <FeedbackText>{truncateText(feedback.text, 300)}</FeedbackText>
                <Avatar src={feedback.avatar} alt={feedback.name} />
                <CustomerName>{feedback.name}</CustomerName>
                <CustomerTitle>{feedback.title}</CustomerTitle>
              </CardFront>
              <CardBack>
                <FeedbackText>{feedback.text}</FeedbackText>
                <Avatar src={feedback.avatar} alt={feedback.name} />
                <CustomerName>{feedback.name}</CustomerName>
                <CustomerTitle>{feedback.title}</CustomerTitle>
              </CardBack>
            </Card>
          </FeedbackContainer>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default CustomerFeedbackSlider;
