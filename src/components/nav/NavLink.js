import styled from "styled-components";

export default styled.li.attrs(({ active }) => ({
  border: active ? "#fff" : "#333",
}))`
  cursor: pointer;
  position: relative;
  text-align: center;
  min-width: 100px;
  text-transform: capitalize;
  color: #fff;

  &:after {
    content: " ";
    height: 30px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.border};
    position: absolute;
    left: 0;
    top: 13px;
  }

  &:hover::after {
    content: " ";
    height: 30px;
    width: 100%;
    border-bottom: 1px solid #fff;
    position: absolute;
    left: 0;
    top: 13px;
  }
`;
