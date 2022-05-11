import React from 'react'

import { Routes, Route } from 'react-router-dom';

import App from '../App'
import Main from '../routes/Main';
import Menu from '../routes/Menu';
import { NoEncontrada } from '../routes/NoEncontrada';


const MainLanding = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<App />} >
          <Route path="main" element={<Main />} />
          <Route path="menu" element={<Menu />} />
          <Route path='*' element={<NoEncontrada />} ></Route>
        </Route>
      </Routes>

    </>
  )
}

export default MainLanding