import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledAccordion = styled(Accordion)`
  background-color: transparent;
  width: 100%;
  margin: auto;
  color: #333;
  box-shadow: none;
  border-bottom: 2px solid #E0E0E0;

  &:before {
    display: none;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
  }
  .MuiAccordionSummary-expandIcon {
    color: #CC0000;
  }
  .MuiSvgIcon-root {
    font-size: 2rem;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: white;
  color: #666;
  padding: 20px;
  /* border-top: 1px solid #E0E0E0; */
`;

const Header = styled(Typography)`
  font-size: 24px;
  text-align: center;
  margin: 20px 0;
  color: #E53935;
  font-weight: bold;
  font-family: iran-sans;
  margin-top: 40px;
`;

const animationVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const FAQs = [
  { question: 'آیا شما دارای مجوز بانک مرکزی هستید؟', answer: 'صرافی نوری !' },
  { question: 'چگونه می توانم دلار خود را به یورو تغییر دهم؟', answer: 'صرافی نوری !' },
  { question: 'یا برای تبدیل دلار به مدرک شناسایی نیاز هست؟', answer: 'صرافی نوری !' },
  { question: 'آیا شما فروش دلار با نرخ دولتی هم انجام می‌دهید؟', answer:  'صرافی نوری !'},
  { question: 'روش‌های پرداخت چیست؟', answer:  'صرافی نوری !'},
  { question: 'آیا شما  ارسال سکه و شمش را به سایر نقاط کشور دارید؟', answer:  'صرافی نوری !'},
];

const FAQSection = ({ title, description }) => (
    <Grid container maxWidth={'700px'} margin={'auto'} mb={5}>
      <Grid item xs={12}>
        <motion.div variants={animationVariants} initial="hidden" animate="visible">
          <Header>{title}</Header>
          <Typography mb={4} fontFamily={'iran-sans'} fontSize={'14px'} variant="subtitle1" style={{ textAlign: 'center', color: '#666' }}>{description}</Typography>
        </motion.div>
      </Grid>
      {FAQs.map((faq, index) => (
        <StyledAccordion key={index}>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontFamily={'iran-sans'} fontSize={'12px'} py={2}>{faq.question}</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <motion.div variants={animationVariants} initial="hidden" animate="visible">
              <Typography fontFamily={'iran-sans'} fontSize={'12px'}>{faq.answer}</Typography>
            </motion.div>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Grid>
  );
  

export default FAQSection;
