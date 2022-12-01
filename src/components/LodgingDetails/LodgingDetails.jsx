import './LodgingsDetails.css'
import Rating from '../Rating/Rating'

export default function LodgingDetails({lodgingsDetails}) {

return(

    <div className="lodgingDetailsContainer">
        <div className="lodgingDetailsLeftSideDetails">
            <h1 className="lodgingDetailsTitle">{lodgingsDetails.title}</h1>
            <p className="lodgingDetailsLocation">{lodgingsDetails.location}</p>
            <div className="lodgingDetailsTags">
                {lodgingsDetails.tags.map ((numberOfTags) =>
                (<div className="lodgingDetailsTagInfos" key={numberOfTags+lodgingsDetails.id}>{numberOfTags}</div>)
                )}
            </div>
        </div>
        <div className="lodgingDetailsRightSideDetails">
            <h1 className="lodgingDetailsHostName">{lodgingsDetails.host.name}</h1>
            <img src={lodgingsDetails.host.picture} alt="Propriétaire du logement" className="lodgingDetailsHostPicture" />
            <Rating 
                key={lodgingsDetails.rating}
            />
        </div>
    </div>
)
}

