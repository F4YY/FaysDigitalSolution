import * as React from "react";
import styled from "styled-components";

function HeroTxtBtn() {
  return (
    <main>
      <section>
        <HeroContainer>
          <HeroText>
            <p>Custom Website solutions to help your business <span>succeed.</span></p>
          </HeroText>
          <StartButton href="/about">Get Started!</StartButton>
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
  @media (max-width: 475px) {
    width: 300px;
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
  @media (max-width: 475px) {
    font: 23px "Poppins", sans-serif;
    margin-top: 160px;
    padding: 10px;
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
  padding: 15px 25px;
  @media (max-width: 991px) {
    font-size: 20px;
    padding: 10px 15px;
  }
`;

export default HeroTxtBtn;