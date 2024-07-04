import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

function LearnMoreLink({text, curPage, currentPage, setCurrentPage}) {
  const handleClick = () => {
    setCurrentPage(curPage);
  }
  return (
    <StyledLink
      onClick={handleClick}
      $current={currentPage === curPage}
    >
      <Link
        href="/services"
        style={{textAlign: "center"}}
      >
        <p>{text} &gt;</p>
      </Link>
    </StyledLink>
  );
}

const StyledLink = styled.button`
  position: relative;
  line-height: 28px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  align-self: center;
  text-align: center;
  padding-right: 30px;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  pointer-events: auto;

  @media (max-width: 991px) {
    font-size: 14px;
    align-self: stretch;
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 85%;
    text-align: center;
    font-size: 14px;
    align-self: center;
  }
`;

export default LearnMoreLink;