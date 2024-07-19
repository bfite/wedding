const Location = () => {
    return (
        <div className="text-block doodle-border items-center">
            <div>
                <h1 className="font-whimsical">Hotel Parq Central</h1>
                <p className="p-5">Our Ceremony and the following reception will take place at Hotel Parq Central in Albuquerque, NM</p>
                <iframe className="inline-block" width={'100%'} height={'100%'} allowFullScreen loading="lazy" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJy1dc-qIMIocRDKMqksWIe54&key=AIzaSyAwMaenfhPvPg-TpAECILH5epeEagNkV8o"></iframe>                
            </div>
        </div>
    )
}

export default Location;