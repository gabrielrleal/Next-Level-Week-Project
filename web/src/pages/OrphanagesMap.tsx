import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanage-map.css'
import api from '../services/api';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Leaflet from 'leaflet';


import 'leaflet/dist/leaflet.css'


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68], //tamanho
    iconAnchor: [29, 68], //posição
    popupAnchor: [178, 2] //posição do popup
})

interface Orphanage{ // interface com quais informações de orphanage iremos utilizar nesta tela 
    id: number;
    latitude: number;
    longitude: number; 
    name: string;
}


function OrphanagesMap() {
    //parametros: array de orfanatos , função para atualizar valores do array
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);//cria array vazio tipado como um array do tipo Orphanage (interface que contem as informações que serão utilizadas)
    //parametros: qual ação quero executar, quando executar ação
    useEffect(() => {
        api.get('orphanages').then(response => {//buscou orphanages na api
            setOrphanages(response.data);//quando for atualizar usa setOrphanages, preenche os orphanages no array
        })
    }, []);

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

                
                {orphanages.map(orphanage => {//por que não for each? porque o map percorre vai array e retorna algo
                    return (//não é identificada oque tem dentro do orphanage, pois não se sabe qual o formato de orphanage, para isso, é preciso criar uma interface com as informações de orphanage irão ser utilizadas
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon} alt="mapMarker"
                            position={[orphanage.latitude, orphanage.longitude]}> 
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}


            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}



export default OrphanagesMap;