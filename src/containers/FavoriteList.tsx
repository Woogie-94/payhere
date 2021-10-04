import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ListTop from "../components/ListTop";
import RepoCard from "../components/RepoCard";
import { favoriteSelector, getState } from "../reducer/favorite";
import { Repo } from "../types";

const FavoriteList = (): JSX.Element => {
  const dispatch = useDispatch();
  const favoriteRepos = useSelector(favoriteSelector);

  useEffect(() => {
    dispatch(getState(localStorage.getItem("favorite")));
  }, [dispatch]);

  return (
    <FavoriteContainer>
      <ListTop title="Favorite Repository" btnTitle="이슈 보러가기" url={"/issues"} />
      <ListContainer>
        {!favoriteRepos.length && <EmptyRepo>등록된 레포지토리가 없습니다.</EmptyRepo>}
        {favoriteRepos.map((repo: Repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
      </ListContainer>
    </FavoriteContainer>
  );
};

const FavoriteContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 50px 0;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
  margin-top: 20px;
`;

const EmptyRepo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  font-size: 24px;
  font-weight: bold;
  color: #c6c6c8;
`;

export default FavoriteList;
