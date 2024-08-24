import React from "react";
import ContactForm from "../template/ContactForm";
import FAQSection from "../template/FAQSection";

function ContactUsPage() {
  return (
    <>
      {" "}
      <ContactForm />
      <FAQSection
        title="هنوز سوال دارید؟"
        description="در این بخش به پرسش‌های متداول پاسخ داده‌شده است، اگر سوالی دارید که پاسخ آن را نیافتید، با ما تماس بگیرید."
      />
    </>
  );
}

export default ContactUsPage;
