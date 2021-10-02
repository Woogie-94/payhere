import React, { ChangeEvent } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface InputStyleTypes {
  [index: string]: FlattenSimpleInterpolation;
}

interface InputProps {
  styleType: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
const Input = ({ styleType, ...valus }: InputProps): JSX.Element => {
  return <StyledInput inputType={STYLE_TYPES[styleType]} {...valus} />;
};

const StyledInput = styled.input<{ inputType: FlattenSimpleInterpolation }>`
  ${(p) => p.inputType}
`;

export default Input;
