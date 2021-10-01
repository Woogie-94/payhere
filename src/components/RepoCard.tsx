import React from "react";
import styled from "styled-components";
import { BsStar } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";

// use for containers SearchList and FavoriteRepo
const RepoCard = (): JSX.Element => {
  return (
    <CardContainer>
      <CardTitle>fullname</CardTitle>
      <CardDesc>
        이것저것 하는 공간입니다. 레포레포레포 이것저것 다양하게 많이 코딩 코딩다양하게 많이 코딩 코딩다양하게 많이 코딩 코딩다양하게 많이 코딩 코딩
      </CardDesc>
      <CardEtc>
        <CardEtcItem>typescript</CardEtcItem>
        <CardEtcItem>
          <BsStar /> 5000
        </CardEtcItem>
        <CardEtcItem>
          <VscRepoForked /> 40
        </CardEtcItem>
        <CardEtcItem>Updated 12days ago</CardEtcItem>
      </CardEtc>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 389px;
  height: 130px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
`;

const CardDesc = styled.p`
  overflow: hidden;
  width: 100%;
  padding: 2px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardEtc = styled.div`
  position: absolute;
  bottom: 15px;
  display: flex;
`;

const CardEtcItem = styled.span`
  display: flex;
  margin-right: 10px;
  font-size: 14px;
  color: #555;

  & > svg {
    margin-right: 3px;
  }
`;

export default RepoCard;
