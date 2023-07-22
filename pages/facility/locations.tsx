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
        <section>
          <Head>
            <title>Our Locations - Kaladhaara</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <h1 className="text-3xl font-semibold text-center ">OUR LOCATIONS</h1>
          <div className="flex flex-col md:flex-row md:space-x-6"> 
            <div className="order-2 md:order-1 md:w-1/2">
              {geojson.features.map((location, idx) => (
                <div className="w-full p-4 bg-slate-300 my-3 rounded-lg" key={idx}>
                  <h2 className="text-lg font-bold mb-4">{location.properties.title}</h2>
                  <div className="mb-4">
                    <div className="flex flex-auto items-center space-x-4">
                      <h4 className="font-bold">
                        {location.properties.loc1} <br /> {location.properties.loc2}
                      </h4>
                      <button
                        className="bg-orange-800 text-white rounded-md p-2"
                        onClick={() => handleButtonClick(location.geometry.lng, location.geometry.lat)}
                      >
                        View Location
                      </button>
                    </div>
                    <p>{location.properties.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2 md:w-1/2">
              {/* Map section */}
              <div className="h-64 md:h-full">
                <Map markerCoordinates={markerCoordinates} />
              </div>
            </div>
          </div>
        </section>
      );
  }
