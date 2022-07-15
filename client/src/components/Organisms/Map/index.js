import React from 'react';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import { map_close_icon } from '../../../Assets';
import { CloseButton } from './MapElements';

function MapComp({ onClick, marker, name }) {
   
    return (
        <>
            <CloseButton src={map_close_icon} onClick={onClick} />
            <MapContainer
                style={{ width: '100%', height: '100%' }}
                center={marker}
                zoom={18}
                scrollWheelZoom={true}
                zoomAnimation={true}
                fadeAnimation={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    icon={
                        new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                        })
                    }
                    position={marker}
                >
                    <Popup>

                        {name}
                        <div 
                        style={{ widht: "200px" ,  height: "200px", backgroundColor:"white" }}></div>
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default MapComp;
