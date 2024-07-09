import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import useModal from "./hooks/useModal";

const RSVP = () => {
    const { isOpen, toggle } = useModal();

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
                <CustomModal show={isOpen} onHide={toggle}/>

            </div>
      </>
    )
}

export default RSVP;