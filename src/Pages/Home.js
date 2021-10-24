import React from 'react'
import styled from 'styled-components'
import Cart from '../components/Cart Folder/Cart'
import ImageLightBox from '../components/ImageLightBox'
import NavBar from '../components/NavCenter/NavBar'

const Home = () => {
    return (
        <HomeContainer>
           <NavBar />
           <Cart />
           <ImageLightBox />
        </HomeContainer>
    )
}

const HomeContainer = styled.section`
    width: 80%;
    margin: auto;
`

export default Home
