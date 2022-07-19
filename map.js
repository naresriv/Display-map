import React from 'react'
import "leaflet/dist/leaflet.css";
import { Map, Marker, TileLayer } from "react-leaflet";

const MapApp = () => {
    return (
     <Map
                  center={["17.3850", "78.4867"]}
                  zoom={5}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

                    url="http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png"
                    maxZoom={18}
                    minZoom={2}

                  />
                  <Marker
                    position={["17.3850", "78.4867"]}
                    icon={PositionIcon}
                  // onclick={handleClick}
                  />
                </Map>
 );
}

export default MapApp
