import React from 'react'
import { navLinks } from '../data'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = ({ openSideBar, setOpenSideBar}) => {

    const renderNavLinks = navLinks.map((navLink, i) => (
        <NavLink
            to={`${navLink.path}`}
            key={i}
        >
            <Navs>{navLink.name}</Navs>
        </NavLink>
    ));

    return (
        <SideBarModal className="animate__animated animate__zoomIn animate__faster">
        <SideBarContainer className="animate__animated animate__slideInDown animate__faster">
            <div className="py-10" onClick={() => setOpenSideBar(!openSideBar)}>
                <img className="cursor-pointer" src='images/icon-close.svg' />
            </div>
            <div>{ renderNavLinks }</div>
        </SideBarContainer>
        </SideBarModal>
    )
}

const SideBarModal =  styled.section`
    background: rgba(0, 0, 0, 0.5);
    width:100%;
    position: fixed;
    top:0;
    height: 100vh;

    @media (min-width:1024px) {
        display: none;
  }

`
const SideBarContainer =  styled.section`
    background-color: var(--neutral);
    width: 60%;
    padding:0 25px;
    height: 100vh;
`

const Navs = styled.h1`
    color: var(--grayishBlue-1);
    font-weight: 700;
    line-height: 4rem;
    cursor: pointer;

`

export default SideBar
