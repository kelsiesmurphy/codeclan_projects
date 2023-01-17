import { deleteSighting } from "./SightingService"

const SightingCard = ({sighting, removeSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }
    return (
        <>
            <h1 className="text-3xl font-bold underline">{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default SightingCard;