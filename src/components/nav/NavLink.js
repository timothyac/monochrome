import styled from "styled-components";

export default styled.li.attrs(({ active }) => ({
  activeColor: active ? "#fff" : "#333",
}))`
  cursor: pointer;
  position: relative;
  text-align: center;
  min-width: 100px;
  text-transform: capitalize;
  color: ${(props) => props.activeColor};
  transition: color 0.2s ease-in;

  &:after {
    content: " ";
    height: 30px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.activeColor};
    position: absolute;
    left: 0;
    top: 13px;
  }

  &:hover {
    color: #fff;
  }
`;
