import { Link } from "react-router-dom";
// import oliImg from './assets/doodles/oli.png'
// import leafyStemImg from './assets/doodles/leafystem.png'

const RSVP = () => {

    return (
        <div className="relative text-block doodle-border pb-5 z-99">

            <div >
                <h1 className="font-whimsical">RSVP</h1>
                <></>
                <p className="text-l">
                    Please get your RSVP in by September 12th!
                </p>
                <div className="pt-10">
                    
                    <div className="doodle">
                        <Link to="/RSVP"  className="doodle-button bg-[#EFEFEF] doodle-border p-5">RSVP Here</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RSVP;