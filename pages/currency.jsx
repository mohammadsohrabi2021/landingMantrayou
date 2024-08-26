import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, IconButton, CircularProgress } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import DoneIcon from '@mui/icons-material/Done';

function Currency() {
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowMessage(true);
    }, 2000); // نمایش لودینگ برای ۲ ثانیه

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ height: '80vh' }}
    >
      {loading ? (
        <CircularProgress size={60} />
      ) : (
        showMessage && (
          <Box
            sx={{
              padding: 4,
              backgroundColor: '#ffffff',
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            <ConstructionIcon sx={{ fontSize: 60, color: '#f39c12' }} />
            <Typography
              variant="h5"
              component="div"
              fontFamily="iran-sans"
              style={{
                color: '#2c3e50',
                marginTop: '16px',
                marginBottom: '8px',
                opacity: showMessage ? 1 : 0,
                transform: showMessage ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                lineHeight: '1.8',
              }}
            >
              این صفحه در دست توسعه تیم دولوپر مانترا هست. <br />
              از صبر و شکیبایی شما سپاس‌گزاریم.
            </Typography>
            <Typography
              variant="body1"
              fontFamily="iran-sans"
              style={{
                color: '#7f8c8d',
                marginBottom: '16px',
              }}
            >
              با تشکر، تیم توسعه‌دهنده مانترا
            </Typography>
            <IconButton sx={{ color: '#27ae60' }}>
              <DoneIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        )
      )}
    </Grid>
  );
}

export default Currency;
