import React from 'react';
import styled from 'styled-components';
import Avatar, { genConfig } from 'react-nice-avatar';

const Container = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const TeamCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 15px;
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TeamName = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > span {
    font-size: 18px;
    color: #ccc;
  }
`;

const TeamBio = styled.p`
  font-size: 16px;
  color: #333;
  padding: 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Team = () => {
  // داده‌های تصادفی برای اعضای تیم
  const teamMembers = [
    {
      name: 'سید سپهر حسینی',
      role: 'توسعه‌دهنده بک‌اند',
      gender: 'male',
      bio: 'سید سپهر حسینی یک توسعه‌دهنده‌ی بک‌اند با تجربه است که در طراحی و پیاده‌سازی معماری‌های مقیاس‌پذیر و امن تخصص دارد. او بر توسعه‌ی APIهای RESTful و ارتباطات مبتنی بر پایگاه داده متمرکز است و با تکنولوژی‌های نظیر Node.js، Django و PostgreSQL به خوبی آشناست.',
    },
    {
      name: 'محمد سهرابی',
      role: 'توسعه‌دهنده فرانت‌اند',
      gender: 'male',
      bio: 'محمد سهرابی یک توسعه‌دهنده‌ی فرانت‌اند با مهارت‌های پیشرفته در طراحی واسط کاربری (UI) و تجربه کاربری (UX) است. او به تکنولوژی‌های جدید جاوااسکریپت مانند React.js و Vue.js تسلط دارد و در ایجاد برنامه‌های وب تعاملی و ریسپانسیو بسیار توانمند است.',
    },
    {
      name: 'حسین یوسفی',
      role: 'مدیر پروژه',
      gender: 'male',
      bio: 'حسین یوسفی مدیر پروژه‌ای با بیش از ۱۰ سال تجربه در مدیریت تیم‌های توسعه و اجرای پروژه‌های پیچیده است. او در برنامه‌ریزی، هماهنگی و نظارت بر پروژه‌ها با استفاده از روش‌های Agile و Scrum تخصص دارد و توانایی مدیریت منابع و زمان را به خوبی داراست.',
    },
  ];
  

  return (
    <Container>
      <Title>اعضای تیم ما</Title>
      <TeamGrid>
        {teamMembers.map((member, index) => {
          // تنظیمات آواتار بر اساس جنسیت
          const avatarConfig = genConfig({ sex: member.gender });

          return (
            <TeamCard key={index}>
              <StyledAvatar {...avatarConfig} />
              <TeamName>
                {member.name}
                <span>{member.role}</span>
              </TeamName>
              <TeamBio>{member.bio}</TeamBio>
            </TeamCard>
          );
        })}
      </TeamGrid>
    </Container>
  );
};

export default Team;
