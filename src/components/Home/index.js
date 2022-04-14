import React from 'react'
import { FunnyNFTCareer } from '../FunnyNFTCareer'
import { HomeHero } from '../HomeHero'
import { MintingIsLive } from '../MintingIsLive'
import { Provider } from '../Provider'
import { RoadMap } from '../RoadMap'
import { ChooseUS } from '../ChooseUs'
import { Contact } from '../Contact'

import {
  HomeContainer
} from './styles'

export const Home = (props) => {
  return (
    <HomeContainer id='home'>
      <HomeHero />
      <MintingIsLive />
      <FunnyNFTCareer />
      <Provider />
      <ChooseUS />
      <RoadMap />
      <Contact />
    </HomeContainer>
  )
}
