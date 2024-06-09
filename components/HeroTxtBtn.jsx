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
          <StartButton>Get Started!</StartButton>
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
`;

const HeroText = styled.div`
  position: relative;
  margin-top: 120px;
  background-color: rgba(74, 74, 74, 0.65);
  padding: 40px;
  border-radius: 0 20px 0 0;
  font: 45px "Poppins", sans-serif;
  p {
    color: #fff;
    span {
      color: #f7971a;
    }
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
`;

export default HeroTxtBtn;