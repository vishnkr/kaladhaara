import Map from "../../components/Map";
import { geojson } from "@/locations";
import style from '../styles/Facility.module.css';
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Head from "next/head";

export default function Locations() {
    const [markerCoordinates, setMarkerCoordinates] = useState<mapboxgl.LngLat | null>(null);
    const images = 2;
    
    const [carouselIndices, setCarouselIndices] = useState<number[]>(geojson.features.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndices((prevIndices) =>
        prevIndices.map((index, idx) => {
          const images = geojson.features[idx].properties.images;
          return images ? (index + 1) % images.length : 0;
        })
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

    const handleButtonClick = (lng:number,lat:number) => {
        setMarkerCoordinates(new mapboxgl.LngLat(lng, lat));
      };

      return (
        <section>
          <Head>
            <title>Our Locations - Kaladhaara</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <h1 className="text-2xl md:text-3xl font-semibold text-center">OUR LOCATIONS</h1>
          <div className="h-64 md:h-96 w-full mb-10">
            <Map markerCoordinates={markerCoordinates} />
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {geojson.features.map((location, idx) => { 
              const images = location.properties.images;

              return (
              <div className="bg-slate-300 p-4 rounded-lg" key={idx}>
                <h2 className="text-lg font-bold mb-4 text-center">{location.properties.title}</h2>
                <div className="mb-4">
                  <div className="flex flex-auto justify-center items-center space-x-4">
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
                {location.properties.images && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img className="object-cover w-full h-full" src={location.properties.images[carouselIndices[idx]]} alt={location.properties.title} />
                  </div>
                )}
              </div>
            )}
          )}
          </div>
        </section>
      );
  }
