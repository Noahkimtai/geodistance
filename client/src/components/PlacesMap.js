import react from 'react'
import Leaflet from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, useMap,Map, Marker, Popup} from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function PlacesMap({places}){

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;
    return(
        <div>
            <p>People also travelled to this destinations</p>
            <MapContainer center={[-1.286389, 36.817223]} style={{ height: '500px' }} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {places.map((point) => {
                    return(<Marker key = {point.id} position={[point.latitude,point.longitude]}>
                            <Popup>
                             {point.name} {point.description}
                            </Popup>
                        </Marker>)})}
            </MapContainer>
        </div>
    )
};
export default PlacesMap;