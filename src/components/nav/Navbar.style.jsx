import styled from 'styled-components';
import Flex from "../globalstyles/Flex";
import { Link } from "react-router-dom";

const Nav = styled(Flex)`
    padding: 1rem 2rem;
    background: lightblue;
`;

export const Logo = styled(Link)`
    padding: 1rem 0;
    color: green;
`;


export default Nav;

