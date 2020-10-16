import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanage-map.css'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Leaflet from 'leaflet';


import 'leaflet/dist/leaflet.css'

const mapIcon = Leaflet.icon({ 
    iconUrl: mapMarkerImg, 

    iconSize: [58, 68], //tamanho
    iconAnchor: [29, 68], //posição
    popupAnchor: [178, 2] //posição do popup
})




function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="mapMarker" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita! </p>
                </header>
                <footer>
                    <strong> Fortaleza</strong>
                    <span> Ceará</span>
                </footer>
            </aside>

            <Map
                center={[-3.7440853, -38.4955035]}
                zoom={15}
                style={{ width: '100%', height: '100%' }} >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />


                <Marker
                    icon={mapIcon} alt ="mapMarker" 
                    position={[-3.7440853, -38.4955035]}>
                        <Popup closeButton = {false} minWidth={240} maxWidth={240} className="map-popup">
                            nome do orfanato
                            <Link to ="/orphanages/1">
                                <FiArrowRight size={20} color="#FFF"/>
                            </Link>
                        </Popup>
                    </Marker>


            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}



export default OrphanagesMap;