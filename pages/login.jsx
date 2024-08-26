import React from 'react';
import { Grid, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
  password: Yup.string()
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .required('رمز عبور الزامی است'),
});

function Login() {
  const router = useRouter();

  const handleRegisterRedirect = () => {
    router.push('/registration'); // ناوبری به صفحه ثبت‌نام
  };

  const CustomTextField = ({ label, name, type = 'text', formik }) => (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      variant="outlined"
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && !!formik.errors[name]}
      helperText={formik.touched[name] && formik.errors[name]}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#3498db', // تغییر رنگ حاشیه
          },
          '&:hover fieldset': {
            borderColor: '#2980b9', // رنگ حاشیه هنگام هاور
          },
          '&.Mui-focused fieldset': {
            borderColor: '#1abc9c', // رنگ حاشیه هنگام فوکوس
          },
        },
        '& .MuiInputLabel-root': {
          color: '#2980b9', // رنگ لیبل
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#1abc9c', // رنگ لیبل هنگام فوکوس
        },
      }}
    />
  );

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '80vh' }}
    >
      <Grid item xs={12} sm={8} md={5}>
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 3 }}>
          <Box textAlign="center" mb={3}>
            <Typography variant="h5" fontWeight="bold" color="#2c3e50"fontFamily='iran-sans'>
              ورود به حساب کاربری
            </Typography>
            <Typography my={3} variant="body1" color="textSecondary" fontFamily='iran-sans'>
              لطفا ایمیل و رمز عبور خود را وارد کنید
            </Typography>
          </Box>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
              // اینجا می‌توانید داده‌ها را ارسال کنید یا کارهای دیگر انجام دهید
            }}
          >
            {(formik) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CustomTextField label="ایمیل" name="email" type="email" formik={formik} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField label="رمز عبور" name="password" type="password" formik={formik} />
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{
                        padding: 1.5,
                        backgroundColor: '#27ae60',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        fontFamily:'iran-sans',
                        '&:hover': {
                          backgroundColor: '#2ecc71',
                        },
                      }}
                    >
                      ورود
                    </Button>
                  </Grid>
                  <Grid item xs={12} mt={2} textAlign="center">
                    <Button
                      onClick={handleRegisterRedirect}
                      fullWidth
                      variant="text"
                      color="primary"
                      sx={{
                        fontSize: '14px',
                        color: '#3498db',
                        textDecoration: 'none',
                        fontFamily:'iran-sans'
                      }}
                    >
                      هنوز حساب کاربری ندارید؟ ثبت‌نام کنید
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
