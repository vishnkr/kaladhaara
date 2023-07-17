import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 
import markerImage from '../public/marker-purple.svg'
import {geojson} from '../locations';

interface MapProps{
  markerCoordinates?: mapboxgl.LngLat | null

}

export default function Map({markerCoordinates}:MapProps){
    if (typeof window !== 'undefined') {
        document.cookie = 'SameSite=None; Secure';
    }
    if (!process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
      throw new Error('Mapbox access token is not defined');
    }
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = useState(-121.219297);
    const [lat, setLat] = useState(38.668638);
    const [markers,setMarkers] = useState<mapboxgl.Marker[]>([]);
    const [zoom, setZoom] = useState(10);
    const [curPopupIdx,setCurPopupIdx] = useState<number|null>(null);
    useEffect(() => {
        if (markerCoordinates && map.current) {
          map.current.setCenter(markerCoordinates);
          map.current.setZoom(13);
          if(markers){
            markers.forEach((marker,idx)=>{
              const lngLat = marker.getLngLat();
              if (lngLat.lat == markerCoordinates.lat && lngLat.lng == markerCoordinates.lng){
                marker.togglePopup()
                setCurPopupIdx(idx);
              }
            })
          }
          
        }
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom,
        });
        let markersTmp:mapboxgl.Marker[] = [];
        geojson.features.forEach((location)=>{
            if(map.current){
                markersTmp.push(
                    new mapboxgl.Marker({
                        draggable: true,
                        scale:0.8,
                        color: 'orange'
                      })
                      .setLngLat([location.geometry.lng,location.geometry.lat])
                      .setPopup(new mapboxgl
                        .Popup()
                        .setHTML(`<h3>${location.properties.title}</h3><p>${location.properties.loc1}</p>`))
                      .addTo(map.current)
                )
                }
            })
        setMarkers(markersTmp)
        const nav = new mapboxgl.NavigationControl();
        map.current.addControl(nav, 'top-right');
      }, [markerCoordinates,markers]);

    return <div className='h-full w-full'>
    <div ref={mapContainer} className="h-full w-full map-container"/>
    
    </div>;
}

