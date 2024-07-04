import Modal from "./Modal";
import useModal from "./hooks/useModal";

const RSVP = () => {
    const { isOpen, toggle } = useModal();

    return (
        <div>
            <div className="text-block doodle-border">
                <div>
                    <h2>RSVP</h2>
                    <p>
                        Please RSVP before September 12th.
                    </p>
                    <button className="doodle-button" onClick={toggle}>RSVP Here</button>
                    <Modal isOpen={isOpen} toggle={toggle}>
                        <div>
                            TESTING
                        </div>    
                    </Modal>
                </div>
            </div>
      </div>
    )
}

export default RSVP;