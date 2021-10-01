import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface InputStyleTypes {
  [index: string]: FlattenSimpleInterpolation;
}

interface InputProps {
  styleType: string;
  // value: string;
  // onChange: () => void;
}

const STYLE_TYPES: InputStyleTypes = {
  searchInput: css`
    width: 80%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-right: none;
  `,
};

// use for container SearchForm
const Input = ({ styleType }: InputProps): JSX.Element => {
  return <StyledInput inputType={STYLE_TYPES[styleType]} placeholder="검색하실 제목을 입력하세요." />;
};

const StyledInput = styled.input<{ inputType: FlattenSimpleInterpolation }>`
  ${(p) => p.inputType}
`;

export default Input;
