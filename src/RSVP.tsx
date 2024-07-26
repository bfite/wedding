import { Link } from "react-router-dom";
// import oliImg from './assets/doodles/oli.png'
// import leafyStemImg from './assets/doodles/leafystem.png'

const RSVP = () => {

    return (
        <div className="relative  text-block doodle-border pb-5">
            {/* <div className="absolute top-0 left-0 w-16 h-16 border-none transform -rotate-[25deg]"><img className="border-none" src={oliImg}/></div> */}
            {/* <div className="absolute bottom-0 right-0 transform translate-x-1/4  w-16 h-16"><img className="border-none" src={leafyStemImg}/></div> */}

            <div className="doodle">
                <h1 className="font-whimsical">RSVP</h1>
                <></>
                <p className="text-l">
                    Please get your RSVP in by September 12th!
                </p>
                <div className="pt-10">
                    <Link to="/RSVP"  className="doodle-button bg-[#EFEFEF] doodle-border p-5">RSVP Here</Link>
                </div>
            </div>

        </div>
    )
}

export default RSVP;