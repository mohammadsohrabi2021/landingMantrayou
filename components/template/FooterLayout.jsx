import React from "react";
import { Box, Grid, Typography, List, ListItem, Link } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import logoSite from "../../assets/images/DarkTransparent.png";
import { pages, resources } from "@/Data/DataMuneFooter";


function FooterLayout() {
  const renderListItems = (items) =>
    items.map((item) => (
      <ListItem key={item.href} sx={{ padding: 0 }}>
        <Link
          component={NextLink}
          href={item.href}
          underline="none"
          sx={{ color: "inherit", "&:hover": { color: "red" } }}
        >
          <Typography
            fontFamily={"iran-sans"}
            fontWeight={400}
            fontSize={"12px"}
            lineHeight={3}
            pr={1}
          >
            {item.name}
          </Typography>
        </Link>
      </ListItem>
    ));

  return (
    <Box
      sx={{
        bgcolor: "#2C2C3E",
        color: "#fff",
        paddingY: 4,
        fontFamily: "iran-sans",
      }}
    >
      <Grid
        container
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems="center"
      >
        <Grid item xs={5} sm={4} md={4} pr={{sm:5, md: 7 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, marginBottom: 1 }}
            fontFamily={"iran-sans"}
            fontSize={"16px"}
            lineHeight={"24px"}
          >
            صفحات
          </Typography>
          <List sx={{ padding: 1 }}>{renderListItems(pages)}</List>
        </Grid>

        <Grid item xs={5} sm={4} md={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700 }}
            fontFamily={"iran-sans"}
            fontSize={"16px"}
            lineHeight={"24px"}
            marginBottom={2}
          >
            منابع
          </Typography>
          <List sx={{ padding: 1 }}>{renderListItems(resources)}</List>
        </Grid>

        <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "center" }}>
          <Image src={logoSite} width={150} height={100} alt="Logo" />
        </Grid>
      </Grid>

      <Box
        sx={{
          bgcolor: "#E66043",
          paddingY: 2,
          marginTop: 4,
          textAlign: "center",
          fontFamily: "iran-sans",
        }}
      >
        <Typography fontFamily={'iran-sans'}fontSize={{xs:'12px',sm:'16px'}}fontWeight={400}lineHeight={'24px'}>
          ©۱۴۰۳ صرافی نوری  | تمامی حقوق محفوظ است
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterLayout;
