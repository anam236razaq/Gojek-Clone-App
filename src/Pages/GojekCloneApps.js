import React from 'react'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'
import Copyright from '../UI/Copyright'

export default function GojekCloneApps({settings}) {
  return (
    <>
        <Navbar />
        <Footer settings={settings}/>
        <Copyright settings={settings}/>
    </>
  )
}
