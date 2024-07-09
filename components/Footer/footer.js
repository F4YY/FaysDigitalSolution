// 'use client'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faLinkedin,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   Contact,
//   Copyright,
//   FDlogo,
//   FootWrapper,
//   Footer,
//   OpenHours,
//   SocialMedia,
//   VisitSosmed
// } from '@/components/Styled_Components/styled_footer';
// import LogoFDS from '@/public/LogoFDS&desc(new)rounded-white.png';

// const socials = [
//   {
//     icon: faEnvelope,
//     url: "mailto: info@littlelemon.com",
//   },
//   {
//     icon: faGithub,
//     url: "https://github.com/F4YY",
//   },
//   {
//     icon: faLinkedin,
//     url: "https://www.linkedin.com/in/rikiwendri/",
//   },
//   {
//     icon: faInstagram,
//     url: "https://www.instagram.com/fays.dalgona",
//   },
//   {
//     icon: faTwitter,
//     url: "https://www.twitter.com",
//   },
// ];

// const FootNav = () => {
//   return (
//     <Footer>
//       <FootWrapper>
//         <VisitSosmed>
//           <p>Visit our social media:</p>
//           <SocialMedia>
//             {socials.map(({icon, url}) => (
//               <a
//                 key={url}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon className="icon" icon={icon} size="xl" key={url} />
//               </a>
//             ))}
//           </SocialMedia>
//         </VisitSosmed>
//         <Contact>
//           <h1>Contact:</h1>
//           <p>Office: Caringin, Bogor, West Java - Indonesia -</p>
//           <p>Phone Number: 0857-73436024</p>
//           <p>e-mail: info@fds.com</p>
//         </Contact>
//         <OpenHours>
//           <h2>Open hours:</h2>
//           <p>Monday-Sunday: 10:00 - 20:00</p>
//           <p>Eid Fitri & Eid Adha: Close</p>
//         </OpenHours>
//       </FootWrapper>
//       <Copyright>
//         <FDlogo src={LogoFDS} alt="FDS_Footer" width={180} height={100}/>
//         <p>© 2024</p>
//       </Copyright>
//     </Footer>
//   );
// };
// export default FootNav;

'use client'
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const companyLinks = [
    { text: "About us", url: "#" },
    { text: "Portfolio", url: "#" },
    { text: "Blog", url: "#" },
  ];

  const serviceLinks = [
    { text: "Web App Development", url: "#" },
    { text: "Web App Re-design", url: "#" },
  ];

  const supportLinks = [
    { text: "Contact", url: "#" },
  ];

  return (
    <FooterWrapper>
      <FooterContent>
        <CompanyInfo>
          <CompanyLogo src="https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2Ff5f6dace5a2348e4ba770f044dcd108f?format=webp" alt="Logo FDS" />
          <CompanyDescription>
            Professional website application development services tailored to your particular business needs
          </CompanyDescription>
        </CompanyInfo>
        <FooterColumns>
          <FooterColumn title="Our Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Support" links={supportLinks} />
          <ContactInfo>
            <ContactTitle>Get in touch</ContactTitle>
            <ContactDetail>info@faysdigitalsolution.com</ContactDetail>
            <ContactDetail>+62 8577 3436 024</ContactDetail>
            <ContactDetail>Bogor, Indonesia</ContactDetail>
            <SocialMedia>
              <SocialIcon src="https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F27a3a244f5014f15933d1351493fedcb" alt="Instagram icon" />
              <SocialHandle>fays.digitalsolution</SocialHandle>
            </SocialMedia>
          </ContactInfo>
        </FooterColumns>
      </FooterContent>
      <Copyright>
        © 2024 Fay's Digital Solution. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url(https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F3f137f51a309490380ddfbce6fc2746b);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px;
  @media (max-width: 991px) {
    padding: 30px;
  }
  @media (max-width: 640px) {
    padding: 25px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const CompanyLogo = styled.img`
  aspect-ratio: 8.13;
  object-fit: contain;
  object-position: center;
  width: 90%;
  overflow: hidden;
  margin: 20px 0;
  @media (max-width: 991px) {
    width: 35%;
  }
  @media (max-width: 640px) {
    width: 60%;
    margin: 0 auto 10px;
  }
`;

const CompanyDescription = styled.p`
  line-height: 28px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1px;
  padding-right: 30px;
  color: #333;
  @media (max-width: 991px) {
    font-size: 14px;
    width: 100%;
  }
  @media (max-width: 640px) {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    align-self: center;
  }
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 25px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

const FooterColumn = ({ title, links }) => (
  <ColumnWrapper>
    <ColumnTitle>{title}</ColumnTitle>
    {links.map((link, index) => (
      <ColumnLink key={index} href={link.url}>
        {link.text}
      </ColumnLink>
    ))}
  </ColumnWrapper>
);

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 40%;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 22px;
  color: #2e5ebd;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    margin: 10px auto 5px;
  }
`;

const ColumnLink = styled.a`
  letter-spacing: 1px;
  color: #333;
  font: 16px/28px "Raleway", sans-serif;
  text-decoration: none;
  margin-top: 10px;
  @media (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    width: 85%;
    text-align: center;
    font-size: 13px;
    align-self: center;
    line-height: 24px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h3`
  font-size: 22px;
  color: #2e5ebd;
  font-weight: 600;
  margin: 0 0 20px 12px;
  @media (max-width: 991px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    margin: 10px auto;
  }
`;

const ContactDetail = styled.p`
  letter-spacing: 1px;
  color: #333;
  margin: 10px 0 0 12px;
  font: 16px/28px "Raleway", sans-serif;
  @media (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    text-align: center;
    font-size: 13px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 17%;
  min-height: 20px;
  min-width: 20px;
  overflow: hidden;
  @media (max-width: 640px) {
    width: 12%;
  }
`;

const SocialHandle = styled.p`
  letter-spacing: 1px;
  color: #333;
  margin: auto 0;
  font: 16px/28px "Raleway", sans-serif;
  @media (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    text-align: center;
    font-size: 13px;
  }
`;

const Copyright = styled.p`
  line-height: 28px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  align-self: center;
  color: #333;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 640px) {
    text-align: center;
    font-size: 10px;
  }
`;

export default Footer;