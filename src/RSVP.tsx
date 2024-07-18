import { Link } from "react-router-dom";

const RSVP = () => {

    return (
        <>
            <div className="doodle text-block doodle-border">
                <div>
                    <h2>RSVP</h2>
                    <p>
                        Please RSVP before September 12th.
                    </p>
                    <Link to="/RSVP"  className="doodle-button bg-[#EFEFEF] doodle-border">RSVP</Link>
                </div>

            </div>
      </>
    )
}

export default RSVP;