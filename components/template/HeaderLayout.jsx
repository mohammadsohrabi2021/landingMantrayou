import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  Drawer,
  Box,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import LightTransparent from "../../assets/images/LightTransparent.png";
import logoSite from "../../assets/images/DarkTransparent.png";
import { dataMuneHeader } from "@/Data/DataMune";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
function HeaderLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box
      sx={{ width: 250, bgcolor: "black", height: "100%", color: "white" }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Image src={logoSite} width={100} height={70} alt="Logo" />
        <IconButton sx={{ color: "white" }} onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {dataMuneHeader.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => router.push(item.href)}
            sx={{
              "&:hover": {
                color: "red",
              },
            }}
          >
            <Typography
              fontFamily="iran-sans"
              sx={{
                color: router.pathname === item.href ? "red" : "inherit",
              }}
            >
              {item.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        className={sticky ? "sticky" : ""}
        sx={{ bgcolor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Grid item display={{ xs: "none", md: "block" }}>
            <Image src={LightTransparent} width={150} height={100} alt="Logo" />
          </Grid>
          <Grid item display={{ xs: "block", md: "none" }}>
            <Image src={LightTransparent} width={100} height={70} alt="Logo" />
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <List sx={{ display: "flex", gap: 2 }}>
              {dataMuneHeader.map((item) => (
                <ListItem key={item.id} sx={{ padding: 0 }}>
                  <Typography
                    fontFamily={"iran-sans"}
                    sx={{
                      cursor: "pointer",
                      margin: "8px 16px",
                      paddingBottom: 1,
                      width: "max-content",
                      color: router.pathname === item.href ? "red" : "#000",
                      borderBottom:
                        router.pathname === item.href
                          ? "2px solid red"
                          : "none",
                      "&:hover": {
                        borderBottom: "1px solid red",
                      },
                    }}
                    onClick={() => router.push(item.href)}
                  >
                    {item.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }} >
            <Link href={'/registration'}>

            <Button
              variant="outlined"
              sx={{
                // backgroundColor: "#e66551",
                fontFamily: "iran-sans",
                // color: "#fff",
                padding: "8px 24px",
                borderRadius: "30px",
                borderColor: "#e66551",
                "&:hover": {
                  backgroundColor: "#030303",
                color: "#fff",

                },
                margin:'0 10px'
              }}
            >
              ورود / ثبت نام
            </Button>
            </Link>
          
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e66551",
                fontFamily: "iran-sans",
                color: "#fff",
                padding: "8px 24px",
                borderRadius: "30px",
                borderColor: "#e66551",
                "&:hover": {
                  backgroundColor: "#030303",
                },
              }}
            >
              فرم ارتباط با ما <ArrowBackIcon />
            </Button>
          </Grid>
          <Grid item sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: { xs: 0, md: 2 } }}
            >
              <MenuIcon sx={{ color: "red" }} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default HeaderLayout;
