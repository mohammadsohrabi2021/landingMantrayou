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
            fontSize={'22px'}
            fontFamily={'iran-sans'}
          >
            اعتماد بیش از{" "}
            <Typography component="span" color="red" variant="h4">
              3000+
            </Typography>{" "}
            دانشجو در سراسر جهان
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
          <Typography variant="body2" color="textSecondary">
            بر اساس بیش از 200+ بررسی
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
              sx={{ color: "#333", marginBottom: 1 }}
            >
              <Box
                component="span"
                sx={{
                  color: "red",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                <code>&lt;/&gt;</code>
              </Box>{" "}
              Bootcamp برتر
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Course Report 5.0 | Bootcamps
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
            >
              3000+ دانشجو در سراسر جهان
            </Typography>
            <Typography variant="body2" color="textSecondary">
              به ما اعتماد کرده‌اند
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TrustSection;
