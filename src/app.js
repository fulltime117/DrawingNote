import React, { useState } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { HelmetTags } from './components/HelmetTags'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { MenuContext } from './contexts/MenuContext'

export const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('home')

  return (
    <MenuContext.Provider value={[selectedMenu, setSelectedMenu]}>
      <Header />
      <ScrollToTop>
        <HelmetTags />
        <Switch>
          <Route exact path='/'>
            <Home />
            
          </Route>
        </Switch>
      </ScrollToTop>
    </MenuContext.Provider>
  )
}