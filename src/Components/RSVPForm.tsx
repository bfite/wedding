import { useEffect, useState } from "react";
import {  Row, Button} from "react-bootstrap"
import supabase from "../utils/subabase";
import { Database} from '../../types/supabase.ts'
import { useNavigate } from "react-router-dom";


// Define the interface for the guest selection state
interface GuestSelection {
    selected: boolean;
    meal?: Database["public"]["Enums"]["Meal"];
  }

const RSVPForm = () => {
    const [step, setStep] = useState(1);
    const [guestId, setGuestId] = useState<number | null>( null);
    const [partyId, setPartyId] = useState<number | null>( null);
    const [partyList, setPartyList] = useState<Database['public']['Tables']['guests']['Row'][] | []>([]);
    const [selectedGuests, setSelectedGuests] = useState<{ [key: number]: GuestSelection }>({});
    const navigate = useNavigate();

    const [ formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        notes: ""
    });

    const handleNext = () => {
        if(step == 1) handleVerifyGuest()
        if(step == 2) handleSaveRSVP() 
        if(step == 3) handleSubmit()
        setStep(step + 1);
    }

    const handlePrevious = () => {
        setStep(step - 1);
    }

    const handleSubmit = async () => {
        // Submit notes to db and redirect to homepage
        const { error } = await supabase
        .from('guests')
        .update({ notes: formData.notes })
        .eq('id', guestId)
        
        if(error) {
            console.error('Error updating selections: ', error);
        }

        navigate('/');
    }

    const handleSaveRSVP = async () => {
        var selections = getSelections()

        const updates = selections.map(({guestId, selected, meal}) => ({
            id: guestId,
            rsvp: selected,
            meal_selection: meal,
        }));

        const { error } = await supabase
        .from('guests')
        .upsert(updates, { onConflict: 'id'});

        if(error) {
            console.error('Error updating selections: ', error);
        }
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
            console.log(guestId);
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

    const handleCheckboxChange = (guestId: number) => {
        setSelectedGuests((prevSelectedGuests) => ({
        ...prevSelectedGuests,
        [guestId]: {
            ...prevSelectedGuests[guestId],
            selected: !prevSelectedGuests[guestId]?.selected,
        },
        }));
    };

    // Handle meal selection change
    const handleMealChange = (guestId : number, meal: Database["public"]["Enums"]["Meal"]) => {
        setSelectedGuests((prevSelectedGuests) => ({
          ...prevSelectedGuests,
          [guestId]: {
            ...prevSelectedGuests[guestId],
            meal,
          },
        }));
      };

    // Function to get the selections for all guests
    const getSelections = () => {
        const selections = Object.entries(selectedGuests).map(([guestId, { selected, meal }]) => ({
        guestId,
        selected,
        meal,
        }));
        console.log(selections);
        return selections;
    };
    

    const generateCheckboxList = () => {   
        return (
            <div style={{ marginBottom: '10px' }}>
              {partyList.map((guest) => (
                <div key={guest.id} className="grid grid-cols-3 g-10 mb-10 h-10">
                  <label>{guest.first_name}</label>
                  <input
                    type="checkbox"
                    value={guest.id.toString()}
                    onChange={() => handleCheckboxChange(guest.id)}
                    checked={selectedGuests[guest.id]?.selected || false}
                  />
                  {selectedGuests[guest.id] && (
                    <select style={{ gridColumn: '3 / span 1' }}
                    value={selectedGuests[guest.id]?.meal || ''}
                    onChange={(e) => handleMealChange(guest.id, e.target.value as  Database["public"]["Enums"]["Meal"] )}
                    >
                      <option value="">Select Meal</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Pasta">Pasta</option>
                    </select>
                  )}
                </div>
              ))}
            </div>
          );
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
                {step === 3 && (
                    <div>
                        <Row>
                            <label>Would you like to leave a message for Laura and Brandon?</label>
                            <textarea onChange={e => setFormData({...formData, notes: e.target.value}) }  />
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
                    <Row>
                        {step === 3 ? ( 
                            <Button variant="primary" onClick={handleNext}>
                                Submit
                            </Button>) : 
                            (<Button variant="primary" onClick={handleNext}>
                                Next
                            </Button>)}
                    </Row>
                </div>
            </form>
    </div>
)}

export default RSVPForm