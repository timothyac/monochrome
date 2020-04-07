import React from "react";
import styled from "styled-components";

import { returnServerStatus } from "../../utils/returns";

const StatusStyled = styled.div.attrs((props) => ({
  status: returnServerStatus(props.status),
}))`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80px;
  color: ${(props) => props.status};

  div {
    height: 7.5px;
    width: 7.5px;
    background-color: ${(props) => props.status};
    border-radius: 7.5px;
  }
`;

export default ({ status }) => {
  return (
    <StatusStyled {...{ status }}>
      <div />
      <p>{status}</p>
    </StatusStyled>
  );
};
