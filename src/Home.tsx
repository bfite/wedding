import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import useModal from "./hooks/useModal";
import BrideAndGroom from "./BrideAndGroom";
import Countdown from "./Countdown";
import Hero from "./Hero";
import Registry from "./Registry";
import Location from "./Location";
import RSVP from "./RSVP";

const Home = () => {
    return (
        <>
            <Hero />

            <BrideAndGroom />

            <Countdown />

            <RSVP />

            <Registry />

            <Location />
        </>
    )
}

export default Home;