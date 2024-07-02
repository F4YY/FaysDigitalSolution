import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

function HeroTxtBtn({title, span, btnText, btnLink, curPage, currentPage, setCurrentPage }) {
  const handleClick = () => {
    setCurrentPage(curPage);
  }
  return (
    <main>
      <section>
        <HeroContainer>
          <HeroText>
            <p>{title} <span>{span}</span></p>
          </HeroText>
          <StartButton
            onClick={handleClick}
            $current={currentPage === curPage}
          >
            <Link href={btnLink}>
              {btnText}
            </Link>
          </StartButton>
        </HeroContainer>
      </section>
    </main>
  );
}

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  @media (max-width: 991px) {
    width: 400px;
  }
  @media (max-width: 640px) {
    width: 240px;
  }
`;

const HeroText = styled.div`
  position: relative;
  margin-top: 180px;
  background-color: rgba(74, 74, 74, 0.65);
  padding: 40px;
  border-radius: 0 20px 0 0;
  font: 38px "Poppins", sans-serif;
  p {
    color: #fff;
    span {
      color: #f7e11d;
    }
  }
  @media (max-width: 991px) {
    font: 28px "Poppins", sans-serif;
    margin-top: 100px;
    padding: 20px;
    border-radius: 0 15px 0 0;
  }
  @media (max-width: 640px) {
    font: 23px "Poppins", sans-serif;
    margin-top: 160px;
    padding: 20px;
    border-radius: 0 10px 0 0;
  }
`;

const StartButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgba(74, 144, 226, 1);
  color: #fff;
  border-radius: 0 0 20px 0;
  text-align: center;
  cursor: pointer;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0.16px;
  padding: 15px 25px;
  @media (max-width: 991px) {
    font-size: 20px;
    padding: 10px 15px;
  }
`;

export default HeroTxtBtn;