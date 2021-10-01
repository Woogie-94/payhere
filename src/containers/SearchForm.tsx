import React from "react";
import styled from "styled-components";
import Input from "../components/Input";

const SearchForm = (): JSX.Element => {
  return (
    <FormContainer>
      <Input styleType="searchInput" />
      <SearchBtn>검색</SearchBtn>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SearchBtn = styled.button`
  width: 20%;
  height: 40px;
  background-color: #478bff;
  color: #fff;

  &:hover {
    background-color: #467aee;
  }
`;

export default SearchForm;
