import Image from "next/image";
import styled, { keyframes } from "styled-components";
import teamBanner from "../../assets/images/teamBanner.png"; // مسیر تصویر

// انیمیشن اصلی برای دسکتاپ و تبلت
const growAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 200px;
    height: 300px;
  }
`;

// انیمیشن خاص برای موبایل
const growAnimationMobile = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 50px;
    height: 50px;
  }
`;

const Container = styled.div`
  background: #fff;
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin: 150px 0 40px 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  position: relative;
  flex-wrap: wrap; /* برای شکستن خطوط در نمایش‌های کوچک‌تر */

  @media (max-width: 768px) {
    gap: 5px;
    height: 253px;
    align-items: center;
  }
`;

const TeamMember = styled.div`
  background-color: ${(props) => props.bgColor || "#eee"};
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  border-radius: 15px;
  animation: ${growAnimation} 0.8s ease-out; /* انیمیشن برای دسکتاپ و تبلت */

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    animation: ${growAnimationMobile} 0.8s ease-out; /* انیمیشن برای موبایل */
  }
`;

const FloatingImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 650px;
  height: auto;
  z-index: 2;

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const MemberInfo = styled.div`
  color: #333;
  font-size: 16px;
  text-align: center;
  padding: 20px 0;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

function MeetTheTeam() {
  const teamMembers = [
    { name: "", role: "", bgColor: "#ff6f61", showImage: false },
    { name: "", role: "", bgColor: "#ffb84d", showImage: false },
    { name: "", role: "", bgColor: "#ffcc99", showImage: true },
    { name: "", role: "", bgColor: "#6699ff", showImage: false },
    { name: "", role: "", bgColor: "#003366", showImage: false },
  ];
  const Highlight = styled.span`
    color: red; /* رنگ قرمز برای کلمه "صرافی نوری" */
  `;
  return (
    <Container>
      <Title>
        با تیم پشت <Highlight>صرافی نوری</Highlight> آشنا شوید
      </Title>

      <TeamGrid>
        {teamMembers.some((member) => member.showImage) && (
          <FloatingImage
            src={teamBanner}
            alt="Team Banner"
            layout="intrinsic"
            quality={100}
          />
        )}
        {teamMembers.map((member, index) => (
          <TeamMember key={index} bgColor={member.bgColor}>
            <MemberInfo>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </Container>
  );
}

export default MeetTheTeam;
