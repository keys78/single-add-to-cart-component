import React from 'react'
import styled from 'styled-components'
// import Cart from '../components/Cart Folder/Cart'
import ImageLightBox from '../components/ImageLightBox'
import NavBar from '../components/NavCenter/NavBar'
// import ClickOutsideComponent from '../CustomHooks/ClickOutsideComponent'

const Home = () => {
    return (
        <HomeContainer>
           <NavBar />
           {/* <ClickOutsideComponent /> */}
           <ImageLightBox />
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
