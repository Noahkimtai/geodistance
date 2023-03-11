//import { data } from 'autoprefixer';
import react,  {useEffect, useState} from 'react'
import PlacesMap from './PlacesMap';

function Home(){
    const [places, setPlaces] = useState([]);
    const [origin, setOrigin] = useState('');
    const [mapCenter, setMapCenter] = useState([0,0])
    const [destination, setDestination] = useState('')
    const [transportMode, setTransportMode] = useState('')
    const [distanceData, setDistanceData] = useState(null)
    const [routeDescription, setRouteDescription] = useState('')
    
    useEffect(()=>{
        fetch ('http://localhost:3000/places')
        .then(resp => resp.json())
        .then(data =>{setPlaces(data);
            // Calculate the center of the map based on the coordinates of the places
            const latitudes = data.map(place => place.latitude);
            const longitudes = data.map(place => place.longitude);
            const centerLatitude = (Math.min(...latitudes) + Math.max(...latitudes)) / 2;
            const centerLongitude = (Math.min(...longitudes) + Math.max(...longitudes)) / 2;
            setMapCenter([centerLatitude, centerLongitude]);
    })     
     }, [])

     const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://127.0.0.1:3000/distance_calculator/distance?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&transport_mode=${encodeURIComponent(transportMode)}`)
        .then(res => res.json())
        .then(data => setDistanceData(data))
        .then(error => console.log(error))
     }

     const handleSelect = (e) => {
        e.preventDefault()
        setTransportMode(e.target.value)
     }

     const handleRouteDescription = (e) => {
        e.preventDefault()
        fetch(`http://127.0.0.1:3000/routes/${distanceData.route_id}`,{
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify({'route':{'experience': routeDescription}}),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response =>response.json())
        .then(data =>{
            alert('shared successfully')
        })
        .catch(error =>{
            alert(error)
        })
     }
     const travelModes ={'Air':[750,0.05],'Water':[50,0.02],'Road':[180,1.8],'Rail':[300,0.01]}
     const Air = 'Air'
     //{travelModes.transportMode[0]} hours travel time and a cost of up to {travelModes.transportMode[1]} US dollars
    return(
        <div>
            Calculate distance, cost and travel time.
            <form className='p-2' onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Enter your pointer of origin' onChange={e => setOrigin(e.target.value)}></input>
                </div>
                <div>
                    <input type='text' placeholder='Enter your final destination' onChange={e => setDestination(e.target.value)}></input>
                </div>
                    
                <div>
                    <select onChange= {handleSelect} className ="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                        <option value='Air'>Air</option>
                        <option value='Water'>Water</option>
                        <option value='Road'>Road</option>
                        <option value='Rail'>Rail</option>
                    </select>
                </div>

                <input type= 'submit'></input>
            </form>
            {distanceData&& 
            <div>
                <p>{origin} is at Latitude:{distanceData.origin.latitude}Longitude:{distanceData.origin.longitude}</p>
                <p>{destination} is at <span> Latitude:{distanceData.destination.latitude}</span>
                <span>Longitude:{distanceData.destination.longitude}</span></p>
                <p>The distance between {origin} and {destination} is {distanceData.distance} kilometers by {transportMode} 
                it will take you {Math.round(distanceData.distance / travelModes[transportMode][0])} hours and cost {Math.round(travelModes[transportMode][1]* distanceData.distance)} US dollars </p>
            </div>
            }
            {distanceData&& 
            <form onSubmit={handleRouteDescription}>
                <div>
                    <input onChange = {e => setRouteDescription(e.target.value)} placeholder= 'Share something about this route'>
                    </input>
                    <input type='submit' placeholder = 'Share'></input>
                </div>
                </form>}
            <PlacesMap mapCenter = {mapCenter} places = {places}/>
        </div>
    )
}
export default Home;