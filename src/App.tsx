import { useState } from 'react'
import Hero from "./Hero"
import BrideAndGroom from './BrideAndGroom'
import RSVP from './RSVP'
import Registry from './Registry'
import Location from './Location'
import Countdown from './Countdown'

import 'doodle.css/doodle.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Hero />

      <BrideAndGroom />

      <Countdown />

      <RSVP />

      <Registry />

      <Location />
    
    </>
  )
}

export default App
