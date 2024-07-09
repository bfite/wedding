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
        <div className="flex items-center justify-center h-screen">
            <form className="doodle">
                {step === 1 && (
                <div>
                    <Row>
                        <label>First Name</label>
                        <input
                            onChange={e => setFormData({...formData, firstName: e.target.value}) } 
                            value={formData.firstName}/>
                    </Row>
                    <Row>
                        <label>Last Name</label>
                        <input
                        onChange={e => setFormData({...formData, lastName: e.target.value}) } 
                        value={formData.lastName}/>
                    </Row>
                    
                </div>
                )}
                {step === 2 && (
                    <div>
                        <Row>
                            <Form.Group as={Col}>
                                <label>food</label>
                                <Form.Select>
                                    <option>Select your food</option>
                                    <option value="1">Fite</option>
                                    <option value="2">Certain</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <label>Number of People in Party</label>
                                <Form.Control type="number" size="sm"/>
                            </Form.Group>
                        </Row>
                    </div>
                )}

                <div className="d-flex justify-content-between pt-10">
                    {step > 1 && (
                        <Row>
                            <Button variant="secondary" onClick={handlePrevious}>
                                Previous
                            </Button>
                        </Row>
                    )}
                    {step < 3 ? (
                        <Row>
                            <Button variant="primary" onClick={handleNext}>
                                Next
                            </Button>
                        </Row>
                    ) : (
                        <Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Row>
                    )}
                </div>
            </form>
    </div>
)}

export default RSVPForm