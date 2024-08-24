import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled components with updated styling
const Container = styled.div`
  background: #fff;
  padding: 40px;
  max-width: 800px;
  margin: 60px auto;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 8px;
  text-align: right;
`;

const Title = styled.h1`
  color: #e66551;
  font-size: 32px;
  font-family: 'iran-sans';
  text-align: center;
  margin-bottom: 20px;
`;

const SubText = styled(Typography)`
  text-align: center;
  font-size: 16px;
  font-family: iran-sans;
  color: #666;
  margin-bottom: 30px;
`;

const Label = styled.label`
  margin: 20px 0;
  font-size: 14px;
  color: #444;

`;

const StyledInput = styled(Field)`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #e66551;
  }
`;

const StyledTextArea = styled(StyledInput).attrs({ component: 'textarea' })`
  height: 150px;
`;

const Button = styled.button`
  background-color: #e66551;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s;
  font-family: iran-sans;

  &:hover {
    background-color: #cc5544;
  }
`;

const ErrorText = styled.div`
  color: #cc0000;
  font-size: 12px;
  margin-top: 5px;
`;

// Validation schema
const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('آدرس ایمیل معتبر نیست')
    .required('پر کردن فیلد ایمیل الزامی است'),
  name: Yup.string().required('پر کردن فیلد نام الزامی است'),
  message: Yup.string().required('پر کردن فیلد پیام الزامی است'),
});

function ContactForm() {
  return (
    <Container>
      <ToastContainer position="top-center" autoClose={5000} closeOnClick pauseOnFocusLoss draggable />
      <Title>سوالی دارید؟ از شما می‌شنویم.</Title>
      <SubText variant="body1">
        همچنین می‌توانید به بخش سوالات متداول مراجعه کنید، شاید پاسخ سوالتان آنجا باشد!
      </SubText>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            resetForm();
            setSubmitting(false);
            toast.success('پیام شما با موفقیت ارسال شد!');
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Label htmlFor="email">آدرس ایمیل</Label>
            <StyledInput type="email" name="email" />
            <ErrorMessage name="email" component={ErrorText} />

            <Label htmlFor="name">نام</Label>
            <StyledInput type="text" name="name" />
            <ErrorMessage name="name" component={ErrorText} />

            <Label htmlFor="message">پیام</Label>
            <StyledTextArea name="message" />
            <ErrorMessage name="message" component={ErrorText} />

            <Button type="submit" disabled={isSubmitting}>
              ارسال پیام
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default ContactForm;
