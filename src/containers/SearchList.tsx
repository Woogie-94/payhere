import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RepoCard from "../components/RepoCard";
import { getRepos, ReposSelector } from "../reducer/repos";
import { RepoReducerState, REQUEST_STATE } from "../types";
import Loading from "../components/Loading";
import useThrottle from "../hooks/useThrottle";

const SearchList = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const scrollTarget = useRef<HTMLDivElement | null>(null);
  const throttle = useThrottle();

  const { state, repos, empty, searchValue }: RepoReducerState = useSelector(ReposSelector);
  const dispatch = useDispatch();

  const infiniteScroll = useCallback((): void => {
    throttle(() => {
      if (!scrollTarget.current) return;

      const { clientHeight, scrollTop, scrollHeight } = scrollTarget.current;

      if (clientHeight + scrollTop >= scrollHeight) {
        // search api가 1000개까지만 검색을 허용해 임의로 제한을 둡니다 ㅠㅠ
        // search api에 속도 제한이 있어 인증되지 않은 요청일 경우 분당 10번으로 제한되어 여러번 요청하면 에러 발생...
        setPage((page) => (page < 10 ? page + 1 : page));
      }
    }, 200);
  }, [throttle]);

  useEffect(() => {
    if (!searchValue) return;

    if (page > 1) {
      dispatch(getRepos({ searchValue, page }));
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  useEffect(() => {
    if (empty) alert("검색 결과가 없습니다.");
  }, [empty]);

  useEffect(() => {
    if (!scrollTarget.current) return;

    scrollTarget.current.addEventListener("scroll", infiniteScroll);

    return () => {
      scrollTarget!.current!.removeEventListener("scroll", infiniteScroll);
    };
  }, [infiniteScroll]);

  return (
    <ListContainer ref={scrollTarget}>
      {state === REQUEST_STATE.INIT && <FailedMessage>검색을 이용해보세요</FailedMessage>}
      {state === REQUEST_STATE.FAILED && <FailedMessage>잘못된 검색입니다.</FailedMessage>}
      {state === REQUEST_STATE.PENDING && <Loading />}
      {repos.map((repo) => (
        <RepoCard key={repo.id} {...repo} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  overflow: overlay;
  position: relative;
  width: 100%;
  height: calc(100% - 70px);

  &::-webkit-scrollbar {
    width: 8px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
  }
`;

const FailedMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #aaa;
`;

export default SearchList;
