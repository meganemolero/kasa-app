import LodgingDetailsCSS from '../LodgingDetails/LodgingsDetails.module.css'
import Rating from '../Rating/Rating'

export default function LodgingDetails({lodgingsDetails}) {

return(

    <div class="container">
        <div className={LodgingDetailsCSS.leftSideDetails} class="leftSideDetails">
            <h1 class="title">{lodgingsDetails.title}</h1>
            <p class="location">{lodgingsDetails.location}</p>
            <div class="tags">
                {lodgingsDetails.tags.map ((numberOfTags) =>
                (<div class="tagInfos" key={numberOfTags+lodgingsDetails.id}>{numberOfTags}</div>)
                )}
            </div>
        </div>
        <div class="rightSideDetails">
            <h1 class="hostName">{lodgingsDetails.host.name}</h1>
            <img src={lodgingsDetails.host.picture} alt="Propriétaire du logement" class="hostPicture" />
            <Rating />
        </div>
    </div>
)
}

