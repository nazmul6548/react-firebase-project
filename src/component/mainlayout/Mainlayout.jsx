import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'


function Mainlayout() {
  return (
    <div>
        <h1>gdf</h1>
        
      <Outlet></Outlet>
    </div>
  )
}

export default Mainlayout