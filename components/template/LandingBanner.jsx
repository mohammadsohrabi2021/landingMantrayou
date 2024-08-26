import { Button, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import person from "../../assets/images/person.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import banner2 from "../../assets/images/banner2.png";
import banner1 from "../../assets/images/banner1.png";
function LandingBanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <Grid
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={{xs:4,md:0}}
    >
      <Grid display={"flex"} flexDirection={"column"} gap={2}>
        <Typography
          variant="h3"
          color={"#030303"}
          fontSize={"22px"}
          lineHeight={{xs:'40px',sm:"50px"}}
          fontFamily={"iran-sans"}
          fontWeight={"bold"}
          maxWidth={'80%'}
        >
        صرافی نوری با بیش از چهل دهه سابقه در بازار کرمانشاه - خرید و فروش ارز و مسکوکات بانکی - تحت نظارت بانک مرکزی
        </Typography>
        <Typography
          maxWidth={"585px"}
          mb={"25px"}
          fontFamily={"iran-sans"}
          lineHeight={2}
          fontSize={"14px"}
          color={"#4a5568"}
          variant="body1"
        >
         امنیت، سادگی، سرعت و نرخ عالی از ویژگی های ما است.<br/>
ارسال حواله ارزش به سراسر دنیا به صورت واریز به حساب و تحویل نقدی.
        </Typography>
        <Button
          variant="contained"
          sx={{
            maxWidth: "400px",
            backgroundColor: "#e66551",
            fontFamily: "iran-sans",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: "30px",
            borderColor: "#e66551",
            "&:hover": {
              backgroundColor: "#030303",
            },
          }}
        >
         فرم ارتباط با ما<ArrowBackIcon />
        </Button>
      </Grid>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{ position: "relative"}}
      >
        <Box display={{ xs: "block", sm: "none" }}>
          <Image src={person} width={200} height={200} alt="person" />
        </Box>
        <Box display={{ xs: "none", sm: "block" }}>
          <Image src={person} width={485} height={489} alt="person" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            backgroundColor: "#fff",
            // padding: 2,
            borderRadius: 2,
            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transform: hovered ? "translateX(10px)" : "translateX(-40px)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <Box display={{ xs: "block", sm: "none" }}>
            <Image src={banner1} width={100} height={50} alt="banner" />
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>
            <Image src={banner1} width={200} height={100} alt="banner" />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            right: -20,
            transform: hovered ? "translateY(0px)" : "translateY(60px)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <Box display={{ xs: "block", sm: "none" }}>
            <Image src={banner2} width={100} height={150} alt="banner" />
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>
            <Image src={banner2} width={250} height={350} alt="banner" />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default LandingBanner;
