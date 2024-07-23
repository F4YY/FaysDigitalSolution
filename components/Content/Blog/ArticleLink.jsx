import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ArticleLink = ({ text, textLink, curPage, currentPage, setCurrentPage }) => {
  const handleClick = () => {
    setCurrentPage(curPage);
  }
  return (

    <Link
      href={textLink}
      onClick={handleClick}
      $current={currentPage === curPage}
    >
      <StyledLink >
        {text}
      </StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  all: unset;
  display: flex;
  flex-direction: column;
  position: relative;
  appearance: none;
  background-color: rgba(255, 255, 255, 0.9);
  color: rgba(74, 74, 74, 1);
  border-radius: 8px;
  text-align: center;
  letter-spacing: 1px;
  border: 1px solid rgba(226, 232, 240, 1);
  margin: 22px auto 20px;
  padding: 10px;
  font: 500 16px "Raleway", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #fff;
    background-color: rgba(27, 35, 118, 1);
  }

  @media (max-width: 991px) {
    font-size: 15px;
    margin: 0 auto;
    padding: 10px 15px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    padding: 10px 15px;
  }
`;

export default ArticleLink;