import { data } from 'autoprefixer';
import react,  {useEffect, useState} from 'react'
import PlacesMap from './PlacesMap';

function Home(){
    const [places, setPlaces] = useState([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('')
    const [distanceData, setDistanceData] = useState([])
    
    useEffect(()=>{
        fetch ('http://localhost:3000/places')
        .then(resp => resp.json())
        .then(data => setPlaces(data))
     }, [])

     const handleSubmit = (e) => {
        e.preventDefault()
        alert(origin)
        alert(destination)
        fetch(`http://127.0.0.1:3000/distance_calculator/distance?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`)
        .then(res => res.json())
        .then(data => {setDistanceData(data)
            console.log(data)})
        .then(error => console.log(error))
     }
     
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
                    <input type= 'submit'></input>
                <div>
                    <select className ="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                        <option value='Air'>Air</option>
                        <option value='Water'>Water</option>
                        <option value='Road'>Road</option>
                        <option value='Rail'>Rail</option>
                    </select>
                </div>
            </form>
            {distanceData && <p>The distance between {origin} and {destination} is {distanceData.distance} kilometers.</p>}
            <PlacesMap places = {places}/>
        </div>
    )
}
export default Home;