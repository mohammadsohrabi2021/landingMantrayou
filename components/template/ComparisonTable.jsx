import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import styled from 'styled-components';

// ستایل‌های سفارشی
const ComparisonContainer = styled(Box)`
  background-color: #292A33; // پس‌زمینه تیره
  color: #FFFFFF;
  border-radius: 8px;
  overflow-x: auto; // افزودن اسکرول افقی
  margin: 20px;
`;

const Header = styled(Typography)`
  background-color: #1E1E24; // پس‌زمینه سربرگ
  color: #FFFFFF;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  min-width: 200px;
`;

const FeatureContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #343442;
`;

const FeatureName = styled(Typography)`
  font-size: 14px;
  flex-grow: 1;
`;

const IconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  min-width: 50px;
`;

const StyledCheckIcon = styled(CheckCircleIcon)`
  color: #4CAF50;
`;

const StyledCancelIcon = styled(CancelIcon)`
  color: #F44336;
`;

const features = [
  { name: 'چندین زبان برنامه‌نویسی', values: [true, true, true, false] },
  { name: 'مربیگری و بازخورد شخصی', values: [true, false, false, false] },
  { name: 'آماده‌سازی برای مصاحبه', values: [true, false, true, false] },
  { name: 'دسترسی مداوم به جامعه', values: [true, false, false, false] },
  { name: 'پشتیبانی مداوم حتی بعد از شغل', values: [true, false, false, false] },
];

const ComparisonTable = () => {
  return (
    <ComparisonContainer>
      <Grid container wrap="nowrap">
        <Grid item xs={12} sm={3}>
          <Header>ویژگی‌ها</Header>
          {features.map((feature, index) => (
            <FeatureContainer key={index}>
              <FeatureName>{feature.name}</FeatureName>
            </FeatureContainer>
          ))}
        </Grid>
        {['Freemote', 'Udemy Courses', 'Other Bootcamps', 'University Degree'].map((title, idx) => (
          <Grid item xs={12} sm={2.25} key={idx}>
            <Header>{title}</Header>
            {features.map((feature, index) => (
              <FeatureContainer key={index}>
                <IconContainer>
                  {feature.values[idx] ? <StyledCheckIcon /> : <StyledCancelIcon />}
                </IconContainer>
              </FeatureContainer>
            ))}
          </Grid>
        ))}
      </Grid>
    </ComparisonContainer>
  );
};

export default ComparisonTable;
