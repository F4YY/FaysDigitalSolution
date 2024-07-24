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
import React, { useContext } from "react";
import styled, {css} from "styled-components";
import { HStack } from "@chakra-ui/react";
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "@/app/context/authContext";
import Link from "next/link";

const Footer = () => {
  const { currentPage, setCurrentPage } = useContext(AuthContext);
  const companyLinks = [
    { text: "About us", url: "/about", curPage: 'About' },
    { text: "Portfolio", url: "/portfolio", curPage: 'Portfolio' },
    { text: "Blog", url: "/blog", curPage: 'Blog' },
  ];

  const serviceLinks = [
    { text: "Web App Development", url: "/services", curPage: 'Services' },
    { text: "Web App Re-design", url: "/services", curPage: 'Services' },
  ];

  const supportLinks = [
    { text: "Contact", url: "/contact", curPage: 'Contact' },
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
          <FooterColumn title="Our Company" links={companyLinks} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <FooterColumn title="Services" links={serviceLinks} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <FooterColumn title="Support" links={supportLinks} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <ContactInfo>
            <ContactTitle>Get in touch</ContactTitle>
            <ContactDetail>
              <HStack onClick={() => { window.open("mailto:info@faysdigitalsolution.com", "_blank"); }}>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <p>info@faysdigitalsolution.com</p>
              </HStack>
            </ContactDetail>
            <ContactDetail>
              <HStack onClick={() => { window.open("https://wa.me/6285773436024", "_blank"); }}>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                <p>+62 8577 3436 024</p>
              </HStack>
            </ContactDetail>
            <ContactDetail>
              <HStack>
                <FontAwesomeIcon icon={faLocationPin} size="lg" />
                <p>Bogor, Indonesia</p>
              </HStack>
            </ContactDetail>
            <SocialMedia>
              <HStack onClick={() => { window.open("https://www.instagram.com/fays.digitalsolution/", "_blank"); }}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <SocialHandle>fays.digitalsolution</SocialHandle>
              </HStack>
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
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
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
    margin-left: 35px;
  }
  @media (max-width: 640px) {
    align-items: center;
    margin-left: 0;
  }
`;

const CompanyLogo = styled.img`
  aspect-ratio: 8.13;
  object-fit: contain;
  object-position: center;
  width: 70%;
  overflow: hidden;
  margin: 20px 0;
  @media (max-width: 991px) {
    width: 27%;
  }
  @media (max-width: 640px) {
    width: 56%;
    margin: 0;
  }
`;

const CompanyDescription = styled.p`
  font-size: 15px;
  line-height: 26px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1px;
  padding-right: 30px;
  color: #333;
  @media (max-width: 991px) {
    font-size: 14px;
    width: 80%;
  }
  @media (max-width: 640px) {
    text-align: center;
    font-size: 13px;
    width: 100%;
    line-height: 20px;
    padding-right:0;
    align-self: center;
    margin-top: 15px;
  }
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;
  gap: 30px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    margin-top: 15px;
  }
`;

const FooterColumn = ({ title, links, currentPage, setCurrentPage }) => {
  return (
  // <ColumnWrapper>
  //   <ColumnTitle>{title}</ColumnTitle>
  //   {links.map((link, index) => (
  //     <ColumnLink
  //       key={index}
  //       onClick={() => setCurrentPage(link.curPage)}
  //       $current={currentPage === link.curPage}
  //     >
  //       <Link href={link.url}>
  //         {link.text}
  //       </Link>
  //     </ColumnLink>
  //   ))}
  // </ColumnWrapper>

  <ColumnWrapper>
    <ColumnTitle>{title}</ColumnTitle>
    {links.map((link, index) => (
      <Link href={link.url} key={index} passHref>
        <ColumnLink
          onClick={() => setCurrentPage(link.curPage)}
          $current={currentPage === link.curPage}
        >
          {link.text}
        </ColumnLink>
      </Link>
    ))}
  </ColumnWrapper>
)};

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 991px) {
    width: 40%;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  color: #2e5ebd;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    margin: 10px auto 5px;
  }
`;

const ColumnLink = styled.p`
  letter-spacing: 1px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    color: #2e5ebd;
  }
  &:active {
    color: #2e5ebd;
  }
  ${props => props.$current && css`
    color: #2e5ebd;
  `}
  @media (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    font-size: 13px;
    line-height: 24px;
    margin: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 40%;
  }
  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`;

const ContactTitle = styled.h3`
  font-size: 18px;
  color: #2e5ebd;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    margin: 10px auto 0;
  }
`;

const ContactDetail = styled.div`
  letter-spacing: 1px;
  color: #333;
  font-size: 14px;
  margin-top: 10px;
  &:hover:not(:nth-child(4)) {
    cursor: pointer;
    color: #2e5ebd;
  }
  &:active:not(:nth-child(4)) {
    color: #2e5ebd;
  }
  @media (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    text-align: center;
    font-size: 13px;
  }
`;

const SocialMedia = styled.div`
  width: auto;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: #2e5ebd;
  }
`;

const SocialHandle = styled.p`
  letter-spacing: 1px;
  color: #333;
  margin: auto 0;
  font-size: 14px;
  &:hover {
    color: #2e5ebd;
  }
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
  font-size: 15px;
  @media (max-width: 640px) {
    text-align: center;
    font-size: 12px;
  }
`;

export default Footer;