import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ArticleLink = ({ text, textLink, curPage, currentPage, setCurrentPage }) => {
  const handleClick = () => {
    setCurrentPage(curPage);
  }
  return (
    <StyledLink
      onClick={handleClick}
      $current={currentPage === curPage}
    >
      <Link
        href='/blog/article-01'
      >
        <p>{text}</p>
      </Link>
    </StyledLink>
  );
};

const StyledLink = styled.button`
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
    margin: 20px auto 0;
    padding: 10px 15px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    margin-top: 21px;
    padding: 10px 15px;
  }
`;

export default ArticleLink;