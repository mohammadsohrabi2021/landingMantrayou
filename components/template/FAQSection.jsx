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
  { question: 'فریموت چیست؟', answer: 'فریموت یک بوت‌کمپ آنلاین است که دوره‌های برنامه‌نویسی را ارائه می‌دهد.' },
  { question: 'آیا به عنوان مبتدی می‌توانم شرکت کنم؟', answer: 'بله، این برنامه برای مبتدیان مناسب است و پیش‌نیاز خاصی ندارد.' },
  { question: 'الزامات زمانی برای این دوره چگونه است؟ آیا می‌توانم به صورت پاره‌وقت در آن شرکت کنم؟', answer: 'بله، شما می‌توانید به صورت پاره‌وقت در دوره شرکت کنید و برنامه به شما امکان می‌دهد تا به روند خود تنظیم کنید.' },
  { question: 'چه مدت به دسترسی به فریموت دارم؟', answer: 'شما به دسترسی مادام‌العمر به محتوای دوره دارید.' },
  { question: 'روش‌های پرداخت چیست؟', answer: 'پرداخت از طریق کارت‌های اعتباری، پی‌پال و سایر روش‌های آنلاین امکان‌پذیر است.' },
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
