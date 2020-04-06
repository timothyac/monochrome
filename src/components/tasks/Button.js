import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #333;
  background-color: #070707;
  color: #444;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 16px;
  width: 100%;
  transition: all 0.1s ease-in;

  &:hover {
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  border: 1px solid #fff;
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
