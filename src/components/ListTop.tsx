import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// use for container FavoriteList and IssueList
const ListTop = ({ title, url, btnTitle }: { [index: string]: string }): JSX.Element => {
  return (
    <ListTopContainer>
      <Title>{title}</Title>
      <CustomLink to={url}>{btnTitle}</CustomLink>
    </ListTopContainer>
  );
};

const ListTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  color: #fff;
  background-color: #478bff;

  &:hover {
    background-color: #378aee;
  }
`;

export default memo(ListTop);
