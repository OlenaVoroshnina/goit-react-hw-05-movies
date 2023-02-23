import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBack = styled.div`
    color: #ff6a00;
    text-decoration-line: none;
`
export const LinkBack = styled(Link)`
    color: #ff6a00;
    font-size: 20px;
    margin: 15px;
    cursor: pointer;
`;

export const ItemMovie = styled.div`
    display: flex;
    gap: 40px;
`;
export const TitleMovie = styled.div`
   font-size: 35px;
   font-weight: 800;
`
export const Discription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`