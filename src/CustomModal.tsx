import { ReactNode } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

import supabase from "./utils/subabase"
import RSVPForm from "./Components/RSVPForm";


interface ModalType {
    children?: ReactNode;
    show: boolean;
    onHide: () => void;
}

export default function CustomModal(props: ModalType) {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          RSVP
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RSVPForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button className="doodle-button" onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
    );
}