import React, { useState } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'

export const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('home')

  return (
    <ScrollToTop>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </ScrollToTop>
  )
}