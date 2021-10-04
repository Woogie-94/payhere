import React from "react";
import styled from "styled-components";
import FavoriteList from "../containers/FavoriteList";
import SearchSideBar from "../containers/SearchSideBar";

const Favorite = (): JSX.Element => {
  return (
    <PositionStandard>
      <FavoriteList />
      <SearchSideBar />
    </PositionStandard>
  );
};

const PositionStandard = styled.div`
  overflow: hidden;
  position: relative;
  height: calc(100vh - 80px);
`;

export default Favorite;
