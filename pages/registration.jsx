import React from 'react';
import { Grid, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('نام الزامی است'),
  lastName: Yup.string().required('نام خانوادگی الزامی است'),
  email: Yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
  password: Yup.string()
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .required('رمز عبور الزامی است'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'رمز عبور و تأیید آن باید مطابقت داشته باشند')
    .required('تأیید رمز عبور الزامی است'),
});

function Registration() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
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
            borderColor: '#3498db',
          },
          '&:hover fieldset': {
            borderColor: '#2980b9',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#1abc9c',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#2980b9',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#1abc9c',
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
            <Typography variant="h5" fontFamily={'iran-sans'} fontWeight="bold" color="#2c3e50">
              ثبت‌نام در صرافی نوری
            </Typography>
            <Typography fontFamily={'iran-sans'} my={2} variant="body1" color="textSecondary">
              لطفا اطلاعات خود را وارد کنید
            </Typography>
          </Box>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={RegistrationSchema}
            onSubmit={(values) => {
              console.log(values);
              // ارسال داده‌ها یا انجام عملیات دیگر
            }}
          >
            {(formik) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CustomTextField label="نام" name="firstName" formik={formik} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField label="نام خانوادگی" name="lastName" formik={formik} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField label="ایمیل" name="email" type="email" formik={formik} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField label="رمز عبور" name="password" type="password" formik={formik} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField label="تأیید رمز عبور" name="confirmPassword" type="password" formik={formik} />
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
                        '&:hover': {
                          backgroundColor: '#2ecc71',
                        },
                      }}
                    >
                      ثبت‌نام
                    </Button>
                  </Grid>
                  <Grid item xs={12} mt={2} textAlign="center">
                    <Button
                      onClick={handleLoginRedirect}
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
                      ورود به حساب کاربری
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

export default Registration;
