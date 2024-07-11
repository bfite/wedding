import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button} from "react-bootstrap"
import supabase from "../utils/subabase";
import { Database, Tables, Enums } from '../../types/supabase.ts'



const RSVPForm = () => {
    const [step, setStep] = useState(1);
    const [guestId, setGuestId] = useState<number | null>( null);
    const [partyId, setPartyId] = useState<number | null>( null);
    const [partyList, setPartyList] = useState<Database['public']['Tables']['guests']['Row'][] | []>([]);

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

    // useEffect to call retrieveParty whenever partyId changes
    useEffect(() => {
        const retrieveParty = async () => {
            try {
                if (partyId) {
                    const { data: guests } = await supabase
                        .from('guests')
                        .select()
                        .eq('party_id', partyId);

                    if (guests != null) {
                        const guestList: Database['public']['Tables']['guests']['Row'][] = guests;
                        setPartyList(guestList);
                        console.log(guestList);
                    } else {
                        // Handle case where no guests are found for the party
                        console.log('No guests found for the party.');
                        setPartyList([]); // Ensure partyList is empty if no guests found
                    }
                }
            } catch (error ) {
                console.error('Error retrieving party guests:', error);
                // Handle error, e.g., show an error message to the user
            }
        };

        if (partyId !== null) {
            retrieveParty();
        }
    }, [partyId]); // useEffect dependency on partyId

    const handleVerifyGuest = async () => {
        try {
            const { data: guests } = await supabase
                .from('guests')
                .select()
                .eq('first_name', formData.firstName.toLowerCase())
                .eq('last_name', formData.lastName.toLowerCase());

            if (guests != null && guests.length > 0) {
                const guest:  Database['public']['Tables']['guests']['Row'] = guests[0];
                setGuestId(guest.id);
                setPartyId(guest.party_id);
                console.log(guest);
            } else {
                // Handle case where guest is not found
                console.log('Guest not found.');
                setGuestId(null);
                setPartyId(null);
                setPartyList([]); // Reset partyList if no guest found
                setStep(1);
            }
        } catch (error) {
            console.error('Error verifying guest:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

    const generateCheckboxList = () => {
        return partyList.map((guest) => (
          <div key={guest.id}>
            <label>
              <input type="checkbox" value={guest.id} />
              {guest.first_name}
            </label>
          </div>
        ));
      };

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
                            {generateCheckboxList() }
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