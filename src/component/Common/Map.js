import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

// Map Area
const Map = () => {
    const mapStyles = {
        height: "50vh",
        width: "100%",
        margin: "0 0 0 0"
    };
    const defaultCenter = {
        lat: 25.726639, lng: -100.358577
    }
    return (
        <>
            <LoadScript googleMapsApiKey="AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw">
                <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
                    <Marker position={ defaultCenter } />
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default Map
