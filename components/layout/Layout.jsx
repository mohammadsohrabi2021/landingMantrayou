import { Grid } from "@mui/material";
import React from "react";
import HeaderLayout from "../template/HeaderLayout";
import FooterLayout from "../template/FooterLayout";

function Layout({ children }) {
  return (
    <Grid>
      <HeaderLayout />
      <Grid minHeight={'100vh'} mt={15}>
      {children}
      </Grid>
      <FooterLayout />
    </Grid>
  );
}

export default Layout;
