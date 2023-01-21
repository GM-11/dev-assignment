import Footer from '@/components/footer'
import React from 'react'
import Care from './screens/care'
import Home from './screens/home'
import Welcome from './screens/welcome'
function Root() {
  return (
    <div>
    
      <Home/>
      <Welcome/>
      <Care/>
      <Footer/>
    </div>
  )
}

export default Root
