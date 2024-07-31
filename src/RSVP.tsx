import { Link } from "react-router-dom";

import bg from './assets/doodles/rsvp/background.png'
import bgMb from './assets/doodles/rsvp/background-mb.png'

const RSVP = () => {

    return (        
        <div className="relative text-block doodle-border pb-5 z-99 bg-mobile-rsvp md:bg-desktop-rsvp bg-cover bg-center"
        style={{backgroundImage: "url(" + bg + ")"}} >
            <div >
                <h1 className="font-whimsical">RSVP</h1>
                <></>
                <p className="text-l">
                    Please get your RSVP in by September 12th!
                </p>
                <div className="pt-10">
                    
                    <div className="">
                        <Link to="/RSVP"  className="doodle doodle-button bg-[#EFEFEF] doodle-border p-5">RSVP Here</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default RSVP;