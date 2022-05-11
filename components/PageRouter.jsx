import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import  MainLanding  from '../components/MainLanding'

export const PageRouter = () => {
  return (
    <>
    <BrowserRouter>
    <MainLanding />
    </BrowserRouter>
    </>
  )
}
