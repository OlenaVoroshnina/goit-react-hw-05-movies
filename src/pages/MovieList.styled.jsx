import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MovieItem = styled(NavLink)`
    color: #0923b7;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 24px;
`