import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { motion } from 'framer-motion';

// استایل‌های مورد نیاز برای بنر
const Banner = styled(Typography)`
  background-color: white;
  color: #e66551;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  font-family: 'iran-sans';
  line-height: 60px;
`;

// تعریف انیمیشن‌ها
const bannerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const textVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

// کامپوننت بنر MantraYou با استفاده از MUI Grid و Typography
const MantraYouBanner = () => {
  return (
    <Grid my={6} container justifyContent="center" alignItems="center" direction="column">
      <Grid item>
        <motion.div variants={bannerVariants} initial="hidden" animate="visible">
          <Banner component="h1">چرا صرافی نوری؟</Banner>
        </motion.div>
      </Grid>
      <Grid item mt={1}>
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <Typography fontSize={{xs:'12px',sm:'18px'}} variant="subtitle1" style={{ color: '#4a5568', textAlign: 'center', lineHeight: '38px', fontWeight: 400, maxWidth: '600px', fontFamily: 'iran-sans' }}>
          صرافی نوری با بیش از چهار دهه سابقه در بازار کرمانشاه، و با مجوز رسمی از بانک مرکزی، و ارائه سکه‌های بانکی تنظیم شده و شمش‌هایی با تایید اصالت از طریق NFC یکی از صرافی‌های مطرح در سطح کشور می‌باشد.
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default MantraYouBanner;
