import React from 'react'
import { Route } from 'react-router-dom'
import LoginWall from './LoginWall'

const RouteWithLogin = ({ path, element, loggedIn }) => {
  return (
    <Route 
      path={path} 
      element={
        <LoginWall loggedIn={loggedIn}>
          {element}
        </LoginWall>
      }
    />
  )
}

export default RouteWithLogin
