'use client';
import React from "react";
import styled from "styled-components";

const PortfolioCard = () => {
  const tags = ["HTML", "CSS", "JavaScript", "React"];
  const handleClick = () => {
    setCurrentPage(curPage);
  }
  return (
    <Card>
      <TourismImage
        loading="lazy"
        sizes="(max-width: 998px) 31vw, 28vw"
        src={srcImg}
        alt="Space Tourism"
      />
      <TourismTitle>
        {title}
      </TourismTitle>
      <FilterTags>
        {tags.map((tag, index) => (
          <TagButton key={index}>{tag}</TagButton>
        ))}
      </FilterTags>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 95%;
  min-height: 280px;
  min-width: 20px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 3px 3px 20px 2px rgba(155, 155, 155, 0.5);
  cursor: pointer;
  pointer-events: auto;
  margin: 0 auto;

  @media (max-width: 991px) {
    min-height: 250px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const TourismImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const TourismTitle = styled.div`
  position: relative;
  line-height: 12px;
  height: auto;
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  margin: auto;
  padding: 15px;
`;

const FilterTags = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0 10px 10px;
`;

const TagButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  position: relative;
  appearance: none;
  color: #333;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #333;
  font-size: 15px;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  padding: 5px 10px;

  @media (max-width: 991px) {
    font-size: 16px;
    border-radius: 10px;
    padding: 5px 10px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    padding: 6px 12px;
  }
`;

export default PortfolioCard;