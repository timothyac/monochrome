import React from "react";
import styled from "styled-components";
import { returnTaskStatus } from "../../utils/returns";

const HeaderStyle = styled.div`
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

const TaskStyle = styled(HeaderStyle).attrs((props) => ({
  status: props.status,
}))`
  border-left: #000;
  border-right: #000;
  border-top: #000;
  background-color: #000;
  border-radius: 0;

  & > div {
    text-transform: none;
    color: #fff;
  }

  /* Size Category */
  & > :first-child,
  & > :nth-child(n + 3):nth-child(-n + 5) {
    color: #888;
  }

  /* Status Category */
  & > :nth-child(6) {
    color: ${(props) => props.status};
  }

  /* Actions Category */
  & > :last-child {
    padding: 0 3rem;
    display: flex;

    & > :last-child {
      color: #444;
      margin-left: auto;
    }

    & > *:hover {
      transition: color 0.1s ease-in;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Header = () => (
  <HeaderStyle>
    <div>
      <p>Store</p>
    </div>
    <div>
      <p>Product</p>
    </div>
    <div>
      <p>Size</p>
    </div>
    <div>
      <p>Profile</p>
    </div>
    <div>
      <p>Proxy</p>
    </div>
    <div>
      <p>Status</p>
    </div>
    <div>
      <p>Actions</p>
    </div>
  </HeaderStyle>
);

export const Task = ({ task }) => {
  const { store, product, size, profile, proxy, status } = task;

  const [statusColor, statusAction] = returnTaskStatus(status);

  return (
    <TaskStyle {...{ status: statusColor }}>
      <div>
        <p>{store}</p>
      </div>
      <div>
        <p>{product}</p>
      </div>
      <div>
        <p>{size}</p>
      </div>
      <div>
        <p>{profile}</p>
      </div>
      <div>
        <p>{proxy}</p>
      </div>
      <div>
        <p>{status}</p>
      </div>
      <div>
        <p>{statusAction}</p>
        <p>Edit</p>
      </div>
    </TaskStyle>
  );
};
