import React from 'react'
import styled from 'styled-components'
import ProductsDisplay from '../components/ProductsDisplay'
import NavBar from '../components/NavCenter/NavBar'

const Home = () => {
    return (
        <HomeContainer>
           <NavBar />
           <ProductsDisplay />
        </HomeContainer>
    )
}

const HomeContainer = styled.section`
    width: 80%;
    margin: auto;

    @media (max-width: 1280px) {
    width: 90%;
  }
    @media (max-width: 640px) {
    width: 100%;
  }
`

export default Home
