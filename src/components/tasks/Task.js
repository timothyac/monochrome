import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #333;
  background-color: #070707;
  color: #444;
  height: 3rem;
  border-radius: 0.25rem;
  font-size: 14px;
  width: 100%;
  transition: all 0.1s ease-in;

  & > div {
    width: 220px;
    text-align: center;
    text-transform: uppercase;
  }

  /* Store Category */
  & > :first-child {
    width: 150px;
  }

  /* Product Category */
  & > :nth-child(2) {
    width: 315px;
  }
`;

export const Task = styled(Header).attrs((props) => ({
  status: props.status,
}))`
  border-left: #000;
  border-right: #000;
  background-color: #000;

  & > div {
    text-transform: none;
    color: #fff;
  }

  & > :nth-child(6) {
    color: ${(props) => props.status};
  }

  &:hover {
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
  }
`;
