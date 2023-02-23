import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBar = styled.header`
    padding: 10px;
    background-color: azure;
    height: 100px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderLink = styled(NavLink)`
    padding: 15px;
    background-color: aquamarine;
    display: inline-block;
    width: 150px;
    border-radius: 15px;
    margin-right: 15px;
    color: #ff6a00;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration-line: none;
    cursor: pointer;

    &:hover {
      background-color: #ff6a00;
      color: aquamarine;
  }
`;

export const Title = styled.h1`
    color: #ff6a00;
    display: block;
    text-align: center;
    font-size: 40px;
`