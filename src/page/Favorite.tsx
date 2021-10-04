import React from "react";
import FavoriteList from "../containers/FavoriteList";
import SearchSideBar from "../containers/SearchSideBar";

const Favorite = (): JSX.Element => {
  return (
    <>
      <FavoriteList />
      <SearchSideBar />
    </>
  );
};

export default Favorite;
