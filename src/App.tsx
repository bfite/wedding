import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'doodle.css/doodle.css'
import Home from "./Home"
import RSVPForm from "./Components/RSVPForm"

function App() {  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/RSVP" element={<RSVPForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
