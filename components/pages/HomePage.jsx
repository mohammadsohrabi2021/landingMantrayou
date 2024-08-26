import { Grid } from '@mui/material'
import React from 'react'
import LandingBanner from '../template/LandingBanner'
import TrustSection from '../template/TrustSection'
import TrainingSteps from '../template/TrainingSteps'
import MantraYouBanner from '../template/MantraYouBanner'
import ComparisonTable from '../template/ComparisonTable'
import FAQSection from '../template/FAQSection'
import CustomerFeedbackSlider from '../template/CustomerFeedbackSlider'
import LogoSlider from '../template/LogoSlider'
import InteractiveCoachDisplay from '../template/InteractiveCoachDisplay'

function HomePage() {
  return (
    <Grid px={4}>
      <LandingBanner/>
      <TrustSection/>
      <TrainingSteps/>
      <MantraYouBanner/>
      <ComparisonTable/>
      <CustomerFeedbackSlider/>
      <LogoSlider/>
      <FAQSection  title="هنوز سوال دارید؟"
      description="در این بخش به پرسش‌های متداول پاسخ داده‌شده است، اگر سوالی دارید که پاسخ آن را نیافتید، با ما تماس بگیرید."/>
     {/* <InteractiveCoachDisplay/> */}
    </Grid>
  )
}

export default HomePage
