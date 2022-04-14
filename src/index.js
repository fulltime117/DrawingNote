import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import theme from './theme.json'

/**
 * Theme images
 */
import logo from './assets/images/logo.png'
import discord from './assets/images/discord.png'
import instagram from './assets/images/instagram.png'
import leftBackground from './assets/images/left-background.png'
import rightBackground from './assets/images/right-background.png'
import homeHero from './assets/images/home-hero.png'
import encryption from './assets/images/encryption.png'
import secure from './assets/images/secure.png'
import automated from './assets/images/automated.png'
import benefit from './assets/images/benefit.png'
import liveFunnyLogo from './assets/images/live-funny-logo.png'
import leftArrow from './assets/icons/left-arrow.png'
import rightArrow from './assets/icons/right-arrow.png'
import hart from './assets/icons/hart.png'
import mintingLiveBg from './assets/images/minting-live-bg.png'
import funnyCareer from './assets/images/funny-career.png'
import providerLogo from './assets/images/provider-logo.png'
import roadMapBg from './assets/images/road-map-bg.png'
import roadMap from './assets/images/road-map_changed.png'
import messageMask from './assets/images/message-mask.png'
import linksMask from './assets/images/links-mask.png'
import chooseUsBg from './assets/images/choose-us-bg.png'
import slider1 from './assets/images/slider-1.png'
import slider2 from './assets/images/slider-2.png'
import slider3 from './assets/images/slider-3.png'
import slider4 from './assets/images/slider-4.png'
import slider5 from './assets/images/slider-5.jpg'
import slider6 from './assets/images/slider-6.png'
import slider7 from './assets/images/slider-7.jpeg'
import mintingLeft from './assets/images/minting-live-left.png'
import mintingRight from './assets/images/minting-live-right.png'

import phone from './assets/icons/phone.png'
import location from './assets/icons/location.png'
import message from './assets/icons/message.png'
import joys from './assets/icons/joys.png'
import younger from './assets/icons/younger.png'
import cure from './assets/icons/cure.png'
import funnyLife from './assets/icons/funny-life.png'
import playing from './assets/icons/playing.png'
import funnyTravel from './assets/icons/funny-travel.png'
import stressful from './assets/icons/stressful.png'
import happy from './assets/icons/happy.png'

theme.images = {
  logo,
  discord,
  instagram,
  homeHero,
  leftBackground,
  rightBackground,
  encryption,
  secure,
  automated,
  benefit,
  liveFunnyLogo,
  mintingLiveBg,
  funnyCareer,
  providerLogo,
  roadMapBg,
  roadMap,
  messageMask,
  linksMask,
  chooseUsBg,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  mintingLeft,
  mintingRight
}

theme.icons = {
  phone,
  location,
  message,
  joys,
  younger,
  cure,
  funnyLife,
  playing,
  funnyTravel,
  stressful,
  leftArrow,
  rightArrow,
  hart,
  happy
}

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)