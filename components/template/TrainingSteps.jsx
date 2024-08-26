import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bannerTrainingSteps1 from "../../assets/images/bannerTrainingSteps1.png";
import bannerTrainingSteps2 from "../../assets/images/bannerTrainingSteps2.png";
import bannerTrainingSteps3 from "../../assets/images/bannerTrainingSteps3.png";
import bannerTrainingSteps4 from "../../assets/images/bannerTrainingSteps4.png";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "خرید و فروش سکه",
    description:
      "خرید و فروش سکه های بانکی و تضمین شده با پلمپ اصلی و معتبر - ارائه سکه,نیم سکه و ربع سکه",
    image: bannerTrainingSteps1,
  },
  {
    id: 2,
    title: "خرید و فروش ارز",
    description:
      "خرید وفروش امواع ارز ,دلار ,یورو , درهم , دینار و بیش از ۳۰ ارز مختلف",
    image: bannerTrainingSteps2,
  },
  {
    id: 3,
    title: "عرضه انواع شمش های طلا",
    description:
      "شمش های یک گرمی با طرح اختصاصی وتایید اصالت با استفاده از NFC",
    image: bannerTrainingSteps3,
  },
  {
    id: 4,
    title: " عرضه انواع سکه های گرمی",
    description:
      "ارائه معتبر ترین سکه های گرمی در بازار کرمانشاه",
    image: bannerTrainingSteps4,
  },
];

const TrainingSteps = () => {
  return (
    <>
      <Box sx={{ textAlign: "right", padding: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom fontFamily={'iran-sans'} fontWeight={900} fontSize={'28px'}>
        صرافی نوری چگونه  <span style={{ color: "#E53935" }}>کار می‌کند</span>
        </Typography>
        <Typography variant="body1" color="textSecondary" maxWidth={'700px'}mb={1} lineHeight={2} textAlign={'justify'} fontFamily={'iran-sans'}>
        صرافی نوری، صرافی در شهر کرمانشاه است که سکه ها و مبالغ ارزی شما را با سرعت زیاد و بهترین نرخ پرداخت می‌کند. با ما نقل و انتقال مالی را در کمال امنیت و بدون نگرانی انجام دهید. ما تضمین میکنیم که برای خرید و فروش سکه و ارز و مسکوکات بانکی، قیمت عادلانه به شما پیشنهاد دهیم.
        </Typography>
      </Box>
      <Grid container direction="column" alignItems="center">
        {steps.map((step, index) => (
          <Grid
            item
            key={step.id}
            xs={12}
            position="relative"
            width={{ xs: "100%", sm: "80%" }}
          >
            {/* Line Between Steps */}
            {index < steps.length - 1 && (
              <Box
                component={motion.div}
                initial={{ height: 0 }}
                whileInView={{ height: "calc(100% - 40px)" }} // Adjust height to stop before the next circle
                transition={{ duration: 0.5, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  right: { xs: "calc(0% + 0px)", sm: "calc(0% + 0px)" }, // Align with circles
                  top: { xs: "36px", sm: "40px" }, // Start the line below the circle
                  width: "2px",
                  zIndex: -1,
                  background: "red",
                }}
              />
            )}

            <Grid display={"flex"} alignItems="flex-start">
              <Grid item xs={1} sx={{ position: "relative" }}>
                <Box
                  component={motion.div}
                  initial={{ backgroundColor: "transparent" }}
                  whileInView={{ backgroundColor: "rgba(255, 0, 0, 0.2)" }}
                  transition={{ duration: 0.5 }}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid red",
                    right: "-18px",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    position: "relative",
                    zIndex: 1, // Ensure the circle is above the line
                  }}
                >
                  <Typography variant="h6" fontFamily="iran-sans">
                    {step.id}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={11}
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent={"space-between"}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography
                    variant="h5"
                    component={motion.div}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      fontFamily: "iran-sans",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component={motion.div}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      fontFamily: "iran-sans",
                      lineHeight: 1.6,
                      color: "#4a4a4a",
                      mb: 4,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ height: "300px", overflow: "hidden" }}
                  width={{ xs: "200px", sm: "500px" }}
                >
                  <Image
                    src={step.image}
                    alt={`Step ${step.id}`}
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TrainingSteps;
