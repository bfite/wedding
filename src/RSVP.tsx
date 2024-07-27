import { Link } from "react-router-dom";
// import oliImg from './assets/doodles/oli.png'
// import leafyStemImg from './assets/doodles/leafystem.png'
import lemons from './assets/doodles/rsvp/lemons.png'
// import wine from './assets/doodles/rsvp/wine.png'
// import grapes from './assets/doodles/rsvp/grapes.png'
// import strawberry from './assets/doodles/rsvp/strawberry.png'
// import bow from './assets/doodles/rsvp/bow.png'
// import candle from './assets/doodles/rsvp/candle.png'
import heartcake from './assets/doodles/rsvp/heartcake.png'
// import coffee from './assets/doodles/rsvp/coffee.png'
// import croissant from './assets/doodles/rsvp/croissant.png'
// import cheese from './assets/doodles/rsvp/cheese.png'
// import smallstrawberry from './assets/doodles/rsvp/smallstrawberry.png'
// import fork from './assets/doodles/rsvp/fork.png'
import knife from './assets/doodles/rsvp/knife.png'
// import cupcake from './assets/doodles/rsvp/cupcake.png'
// import cocktail from './assets/doodles/rsvp/cocktail.png'
import spoon from './assets/doodles/rsvp/spoon.png'
import bigbow from './assets/doodles/rsvp/bigbow.png'
// import cake from './assets/doodles/rsvp/cake.png'
// import twococktail from './assets/doodles/rsvp/twococktail.png'

const RSVP = () => {

    return (
        <div className="relative text-block doodle-border pb-5 z-99">

            <div className="absolute top-0 left-0 h-10 w-10 transform -rotate-[25deg]"><img className="border-none" src={bigbow}/></div>
            <div className="absolute top-1/2 left-0 h-14 w-14 transform translate-x-3 -translate-y-5 -rotate-[0deg]"><img className="border-none" src={spoon}/></div>
            <div className="absolute bottom-0 left-0 h-10 w-10 transform translate-x-0 -translate-y-0 -rotate-[0deg]"><img className="border-none" src={lemons}/></div>
            <div className="absolute top-0 left-0 h-32 w-32 transform translate-x-[50px] -translate-y-0 -rotate-[15deg] hidden md:block"><img className="border-none" src={heartcake}/></div>
            <div className="absolute bottom-0 left-0 h-8 w-8 transform translate-x-[125px] -translate-y-[30px] -rotate-[0deg]  hidden md:block"><img className="border-none" src={knife}/></div>

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