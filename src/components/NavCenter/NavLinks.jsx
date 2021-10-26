import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { navLinks } from '../data'


const NavLinks = () => {

    const renderNavLinks = navLinks.map((navLink, i) => (
        <NavLink
            to={`${navLink.path}`}
            key={i}
        >
            <Navs>{navLink.name}</Navs>
        </NavLink>
    ));

    return (
        <NavLinksHolder>
            <NavLink to="/">
                <ImageLogo className="sm:mr-10 mr-0 " src='images/logo.svg' alt="logo" />
            </NavLink>
            {renderNavLinks}
        </NavLinksHolder>
    )
}

const NavLinksHolder = styled.div`
    display: flex;
    gap: 40px;
    @media (max-width: 540px) {
        gap: 0px;
  }
`
const Navs = styled.p`
    border-bottom: 4px solid transparent;
    padding-bottom: 45px;
    transition: 0.2s;
    color: var(--grayishBlue-1);
    font-weight: 500;

    &:hover {
        border-bottom:4px solid var(--orange);
        transition: 0.2s;
        color: var(--veryDarkBlue);
    }

    @media (max-width: 1024px) {
        display: none;
  }
    
`

  const ImageLogo = styled.img`
    max-width: 100%;
  `

export default NavLinks
