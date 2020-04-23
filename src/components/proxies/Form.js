import React from "react";
import styled from "styled-components";
import { Button } from "../tasks/Button";

const FormStyle = styled.form`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > * {
    margin: 1rem 0;
  }

  div {
    & > :first-child {
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      color: #666;
    }
  }

  input {
    text-align: center;
  }
`;

export const Form = ({ purchaseProxies }) => {
  return (
    <FormStyle onSubmit={purchaseProxies}>
      <div>
        <p>Location</p>
        <select name="providers" id="providers">
          <option value="Ashburn">Ashburn</option>
          <option value="Boston">Boston</option>
          <option value="Chicago">Chicago</option>
          <option value="New York">New York</option>
        </select>
      </div>
      <div>
        <p>Amount (Max. 99)</p>
        <input type="tel" maxLength="2" />
      </div>
      <div>
        <p>Profile</p>
        <select name="profiles" id="profiles">
          <option value="AMEX 1">AMEX 1</option>
          <option value="Dad 1">Dad 2</option>
          <option value="Dad 2">Dad 2</option>
          <option value="Privacy">Privacy</option>
        </select>
      </div>
      <Button>Purchase</Button>
    </FormStyle>
  );
};
