import React from 'react'
import { useTheme } from 'styled-components'
import { SectionTitle, SectionDescription, InnerContainer } from '../Contact/styles'
import {
  RoadMapContainer
} from './styles'

export const RoadMap = () => {
  const theme = useTheme()

  return (
    <RoadMapContainer id='roadMap'>
      <InnerContainer>
        <SectionTitle className='title'>RoadMap</SectionTitle>
        <SectionDescription className='description'>
          Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam
        </SectionDescription>
      </InnerContainer>
      <img src={theme.images.roadMap} alt='' />
    </RoadMapContainer>
  )
}
