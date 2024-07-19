import { Link } from "react-router-dom";

const RSVP = () => {

    return (
        <div className="doodle text-block doodle-border">
            <div>
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