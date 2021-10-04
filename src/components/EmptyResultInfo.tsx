import React from "react";
import styled from "styled-components";

// use for container FavoriteList and IssueList
const EmptyResultInfo = ({ body }: { body: string }): JSX.Element => {
  return <Empty>{body}</Empty>;
};

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #c6c6c8;
`;

export default EmptyResultInfo;
