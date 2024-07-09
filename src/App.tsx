import Hero from "./Hero"
import BrideAndGroom from './BrideAndGroom'
import RSVP from './RSVP'
import Registry from './Registry'
import Location from './Location'
import Countdown from './Countdown'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'doodle.css/doodle.css'
import '../public/App.css'


function App() {  
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
