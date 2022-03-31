import React from "react";
import data from './data'

const Main = () => {
    return (
        data.map(loc => {
            const {img, location, place, timeSpan, description, mapUrl} = loc
            return (
                <div className="place">
                    <img src={img} alt={place} samesite='lax' />
                    <div className="text-container">
                        <p className="capital"><ion-icon name="location"></ion-icon> <span className="spacing">{location}</span> <a href={mapUrl}>View on Google Maps</a></p>
                        <h2>{place}</h2>
                        <p><strong>{timeSpan}</strong></p>
                        <p>{description}</p>
                    </div>
                </div>
            )
        })
    )

}

export default Main