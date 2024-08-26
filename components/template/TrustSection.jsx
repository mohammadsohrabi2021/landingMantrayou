import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

function TrustSection() {
  return (
    <Box
      sx={{
        paddingY: 16,
        textAlign: "center",
        fontFamily: "iran-sans",
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#333", marginBottom: 4 }}
            fontSize={"22px"}
            fontFamily={"iran-sans"}
          >
            مورد اعتماد بیش از
            <Typography component="span" color="red" variant="h4">
              100
            </Typography>{" "}
            هزار مشتری در سراسر جهان
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          component={motion.div}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" color="red" fontWeight="bold">
            4.9
          </Typography>
          <Typography variant="body2" color="textSecondary" fontFamily={'iran-sans'}>
          بر اساس بیش از چندین  دیدگاه در گوگل 
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          component={motion.div}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              backgroundColor: "#FBE9E7",
              padding: 2,
              borderRadius: 8,
              display: "inline-block",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333", marginBottom: 1, fontFamily:'iran-sans' }}
            >
              <Box
                component="span"
                sx={{
                  color: "red",
                  fontSize: "2rem",
                  fontWeight: "bold",
                 
                }}
              >
                {/* <code>&lt;/&gt;</code> */}
              </Box>{" "}
              بانک مرکزی
            </Typography>
            <Typography variant="body2" color="textSecondary"   fontFamily='iran-sans'>
            تحت مجوز بانک مرکزی - شماره ثبت ۱۰۳۵۳ - کد ۱۳۳
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          component={motion.div}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              backgroundColor: "#FFF3E0",
              padding: 2,
              borderRadius: 8,
              display: "inline-block",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333", marginBottom: 1 }}
              fontFamily={'iran-sans'}
            >
              +۱۰۰ هزار مشتری در سراسر دنیا
            </Typography>
            <Typography variant="body2" color="textSecondary"  fontFamily={'iran-sans'}>
              به ما اعتماد کرده‌اند
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TrustSection;
