import React, { memo } from "react";
import styled from "styled-components";
import { BsStar } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";
import { Repo } from "../types";

// use for containers SearchList and FavoriteRepo
const RepoCard = ({ id, full_name, description, stargazers_count, forks_count, language, html_url }: Repo): JSX.Element => {
  return (
    <CardContainer>
      <CardTitle href={html_url} target="_blank">
        {full_name}
      </CardTitle>
      <CardDesc>{description}</CardDesc>
      <CardEtc>
        {language && <CardEtcItem>{language}</CardEtcItem>}
        {stargazers_count > 0 && (
          <CardEtcItem>
            <BsStar /> {stargazers_count}
          </CardEtcItem>
        )}
        {forks_count > 0 && (
          <CardEtcItem>
            <VscRepoForked /> {forks_count}
          </CardEtcItem>
        )}
      </CardEtc>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 389px;
  height: 130px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CardTitle = styled.a`
  text-decoration: underline;
  font-size: 20px;
`;

const CardDesc = styled.p`
  overflow: hidden;
  width: 100%;
  padding: 2px 0;
  margin-top: 15px;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardEtc = styled.div`
  position: absolute;
  bottom: 15px;
  display: flex;

  & > span:first-child {
    margin-left: 0;
  }
`;

const CardEtcItem = styled.span`
  display: flex;
  margin-left: 10px;
  font-size: 14px;
  color: #777;

  & > svg {
    margin-right: 3px;
  }
`;

export default memo(RepoCard);
