import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';

export const Nav = styled.nav`

    background:transparent;
    height:80px;
    display:flex;
    justify-content:center;
    font-weight:700;


`;


export const NavLink = styled(Link)`

    color:#fff;
    font-size:2rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    cursor:pointer;



    @media screen and (max-width:600px)
    {
        position:absolute;
        top:10px;
        left:25px;
    }



`;


export const NavIcon = styled.div`
    display:block;
    position:absolute;
    top:0;
    right:0;
    cursor: pointer;
    color:#fff;
    /* font-size:2rem; */

    p{
        transform:translate(-175%,100%);
        font-weight:bold;
        /* font-size:29px; */
    }


`;



export const Bars = styled(FaAlignJustify)`
font-size:2.4rem;
transform:translate(-50%,-15%);

`;


