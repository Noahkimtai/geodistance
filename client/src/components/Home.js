import { data } from 'autoprefixer';
import react,  {useEffect, useState} from 'react'
import PlacesMap from './PlacesMap';

function Home(){
    const [places, setPlaces] = useState([]);
    
    useEffect(()=>{
        fetch ('http://localhost:3000/places')
        .then(resp => resp.json())
        .then(data => setPlaces(data))
     }, [])
     
    return(
        <div>
            Calculate distance, cost and travel time.
            <form className='p-2'>
                <div>
                    <input type='text' placeholder='Enter your pointer of origin'></input>
                </div>
                <div>
                    <input type='text' placeholder='Enter your final destination'></input>
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
            <PlacesMap places = {places}/>
        </div>
    )
}
export default Home;