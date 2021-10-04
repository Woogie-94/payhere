import React from "react";
import styled from "styled-components";
import { Issue } from "../types";

const IssueItem = ({ title, comments, html_url, labels, user, number, updated_at }: Issue): JSX.Element => {
  const repoTitle = `${html_url.split("/")[3]}/${html_url.split("/")[4]}`;
  const lastUpdatedAt = `${new Date(updated_at).getMonth() + 1}/${new Date(updated_at).getDate()}`;

  return (
    <ItemContainer>
      <IssueLink href={html_url} target="_blank" rel="noreferrer">
        <RepoTitle>{repoTitle}</RepoTitle>

        <IssueTitle>{title}</IssueTitle>
        <IssueEtc>
          <span>#{number}</span>
          <span>opened on {lastUpdatedAt}</span>
          <span>by {user.login}</span>

          {labels.map((label) => (
            <IssueLabel key={label.id} color={label.color}>
              {label.name}
            </IssueLabel>
          ))}
        </IssueEtc>
      </IssueLink>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  min-height: 112px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:hover {
    background-color: #f6f6f8;
  }
`;

const IssueLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const RepoTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: rgb(9 105 218);
  margin-bottom: 10px;
`;

const IssueTitle = styled.p`
  overflow: hidden;
  width: 80%;
  padding-bottom: 3px;
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 15px;
`;

const IssueEtc = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: #888;

  & > span {
    margin-right: 4px;
  }
`;

const IssueLabel = styled.div<{ color: string }>`
  padding: 4px 10px;
  margin-left: 5px;
  font-size: 12px;
  color: #fff;
  background-color: ${({ color }) => `#${color}`};
  border-radius: 20px;
`;

export default IssueItem;
