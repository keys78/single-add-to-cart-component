import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavCenter/NavBar'

const Home = () => {
    return (
        <HomeContainer>
           <NavBar />
        </HomeContainer>
    )
}

const HomeContainer = styled.section`
    width: 80%;
    margin: auto;
`

export default Home
