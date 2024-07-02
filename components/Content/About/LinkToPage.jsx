import * as React from "react";
import styled from "styled-components";
import AuthContext from "@/app/context/authContext";

function LinkToPage() {
  const { authReady, user, login, logout } = React.useContext(AuthContext);
  return (
    <main>
      <section>
        {authReady && user ? (
          <LinkButton onClick={() => {logout();}}>Get Started!</LinkButton>
        ) : (
          <LinkButton onClick={() => {login();}}>Get Started!</LinkButton>
        )}
      </section>
    </main>
  );
}

const LinkButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  appearance: none;
  background-color: #4a90e2;
  color: white;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  width: auto;
  align-self: center;
  letter-spacing: 1px;
  box-shadow: 1px 3px 3px 0 rgba(74, 74, 74, 0.56);
  padding: 15px 25px;
`;

export default LinkToPage;