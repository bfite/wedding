import { useState } from "react";
import { Form, Row, Col, Button} from "react-bootstrap"
import supabase from "../utils/subabase";

const RSVPForm = () => {
    const [step, setStep] = useState(1);

    const [ formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    });

    const handleNext = () => {
        if(step == 1) handleVerifyGuest()

        setStep(step + 1);
    }

    const handlePrevious = () => {
        setStep(step - 1);
    }

    const handleVerifyGuest = async () => {
        const { data: guest } = await supabase.from('guests')
            .select().eq('first_name', formData.firstName).eq('last_name', formData.lastName)
        
        //@ts-ignore
        setGuest(guest)
        console.log(guest)

    }

    return (
    <form className="doodle">
        {step === 1 && (
        <div className="doodle">
            <label>First Name</label>
            <input
                onChange={e => setFormData({...formData, firstName: e.target.value}) } 
                value={formData.firstName}/>
            <label>Last Name</label>
            <input
            onChange={e => setFormData({...formData, lastName: e.target.value}) } 
            value={formData.lastName}/>
        </div>
        )}
        {step === 2 && (
            <Row>
            <Form.Group as={Col}>
                <label>food</label>
                <Form.Select>
                    <option>Select your food</option>
                    <option value="1">Fite</option>
                    <option value="2">Certain</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
                <label>Number of People in Party</label>
                <Form.Control type="number" size="sm"/>
            </Form.Group>
        </Row>
        )}

        <div className="d-flex justify-content-between">
            {step > 1 && (
            <Button variant="secondary" onClick={handlePrevious}>
                Previous
            </Button>
            )}
            {step < 3 ? (
            <Button variant="primary" onClick={handleNext}>
                Next
            </Button>
            ) : (
            <Button variant="primary" type="submit">
                Submit
            </Button>
            )}
        </div>
    </form>
)}

export default RSVPForm