import Map from "../../components/Map";
import { geojson } from "@/locations";
import style from '../styles/Facility.module.css';
import { useState } from "react";
import mapboxgl from "mapbox-gl";
import Head from "next/head";

export default function Locations() {
    const [markerCoordinates, setMarkerCoordinates] = useState<mapboxgl.LngLat | null>(null);
    const handleButtonClick = (lng:number,lat:number) => {
        setMarkerCoordinates(new mapboxgl.LngLat(lng, lat));
      };

    return (
        <section className="grid grid-flow-row">
            <Head>
            <title>Our Locations - Kaladhaara</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1 className="text-3xl font-semibold text-center my-2 ">OUR LOCATIONS</h1>
            <h4 className="text-lg text-center">Slowly and surely, we have expanded into three studio spaces around the Sacramento area. </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-10 " >
                <div className="flex flex-col flex-wrap">
                    {geojson.features.map((location,idx) => 
                        <div className="w-full p-4 bg-red-200 my-3 rounded-lg" key={idx}>
                        <h2 className="text-lg font-bold mb-4">{location.properties.title}</h2>
                            <div className="mb-4">
                                <div className="flex flex-auto items-center space-x-4" >
                                    <h4 className="font-bold">{location.properties.loc1}  <br /> {location.properties.loc2}</h4>
                                    <button className=" bg-orange-400 rounded-md p-2"
                                    onClick={() => handleButtonClick(location.geometry.lng, location.geometry.lat)}
                                    > View Location
                                    </button>
                                </div>
                            <p>{location.properties.description}</p>
                            </div>
                        </div>
                    )}
                    
                </div>
                <div className="w-full">
                    <div className="h-full flex items-center">
                        <Map markerCoordinates={markerCoordinates}/>
                    </div>
                </div>
            </div>
        </section>

    
    );
  }
