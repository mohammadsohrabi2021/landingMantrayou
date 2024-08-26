import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch, Typography, Box, Button } from "@mui/material";
import { Sparklines, SparklinesLine } from 'react-sparklines';

const data = [
  { currency: "یورو", amount: 0.89515, change: 0.33, chartData: [5, 10, 5, 20, 8, 15, 10] },
  { currency: "پوند بریتانیا", amount: 0.75713, change: 0.076, chartData: [15, 10, 20, 10, 8, 25, 30] },
  { currency: "ین ژاپن", amount: 144.39, change: 0.052, chartData: [10, 5, 15, 10, 20, 25, 20] },
  { currency: "دلار کانادا", amount: 1.3511, change: 0.0047, chartData: [20, 10, 25, 15, 10, 30, 40] },
  { currency: "فرانک سوئیس", amount: 0.9247, change: 0.024, chartData: [15, 20, 25, 20, 10, 15, 25] },
  { currency: "دلار استرالیا", amount: 1.4856, change: 0.014, chartData: [25, 30, 25, 20, 15, 20, 25] },
  { currency: "دلار نیوزلند", amount: 1.5801, change: 0.032, chartData: [30, 20, 25, 15, 20, 25, 30] },
  { currency: "کرون سوئد", amount: 10.248, change: 0.018, chartData: [10, 15, 10, 5, 15, 10, 15] },
  { currency: "کرون نروژ", amount: 10.374, change: 0.028, chartData: [5, 10, 15, 10, 20, 15, 10] },
  { currency: "دلار سنگاپور", amount: 1.3562, change: 0.021, chartData: [20, 15, 20, 15, 10, 20, 25] }
];

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
   <TableContainer component={Paper}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 2, direction: "rtl" }}>
        <Typography fontFamily={'iran-sans'} variant="h6">نرخ‌های لحظه‌ای ارز</Typography>
        <Switch label="معکوس" sx={{fontFamily:'iran-sans'}} />
      </Box>
      <Table sx={{ direction: "rtl" }}>
        <TableHead>
          <TableRow>
            <TableCell align="right"sx={{fontFamily:'iran-sans'}}>واحد پول</TableCell>
            <TableCell align="right"sx={{fontFamily:'iran-sans'}}>مقدار</TableCell>
            <TableCell align="right"sx={{fontFamily:'iran-sans'}}>تغییرات (۲۴ ساعت)</TableCell>
            <TableCell align="right"sx={{fontFamily:'iran-sans'}}>نمودار (۲۴ ساعت)</TableCell>
            <TableCell align="right"sx={{fontFamily:'iran-sans'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="right"sx={{fontFamily:'iran-sans'}}>{row.currency}</TableCell>
              <TableCell align="right"sx={{fontFamily:'iran-sans'}}>{row.amount}</TableCell>
              <TableCell align="right"sx={{fontFamily:'iran-sans'}} style={{ color: row.change > 0 ? "green" : "red" }}>
                {row.change > 0 ? `+${row.change}%` : `${row.change}%`}
              </TableCell>
              <TableCell align="right">
                <Sparklines data={row.chartData} svgWidth={100} svgHeight={30}>
                  <SparklinesLine color="green" />
                </Sparklines>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary"sx={{fontFamily:'iran-sans'}}>ارسال</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </ComparisonContainer>
  );
};

export default ComparisonTable;
