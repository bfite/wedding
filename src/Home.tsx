import BrideAndGroom from "./BrideAndGroom";
import Countdown from "./Countdown";
import Hero from "./Hero";
import Registry from "./Registry";
import Location from "./Location";
import RSVP from "./RSVP";
import ThingsToDo from "./ThingsToDo";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Hero />

            <BrideAndGroom />

            <Countdown />

            <RSVP />

            <Registry />

            <Location />

            <ThingsToDo />

            <Footer />
        </>
    )
}

export default Home;