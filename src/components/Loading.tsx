import React, { memo } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

// use for container SearchList and IssueList
const Loading = (): JSX.Element => {
  return (
    <LoadingContainer>
      <ReactLoading type="spin" color="#478bff" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export default memo(Loading);
