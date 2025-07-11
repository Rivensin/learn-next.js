'use client'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState } from 'react'
import Link from 'next/link'

// Fix marker icon issue (tanpa ini marker tidak akan muncul)
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const initialPosition : [number,number] = [0.5266058859966887,101.42878570224349]

function ResetView({position} : {position: [number,number]}){
  const map = useMap()
  map.flyTo(position, map.getZoom())
  return null
  }

  
  export default function StoreMap(){
    const [trigger,SetTrigger] = useState(false)
    const [key,setKey] = useState(0)
    return (
      <div className="[width:clamp(320px,80vw,590px)] sm:[width:clamp(576px,80vw,718px)] md:[width:clamp(691px,80vw,974px)] lg:w-[95%] lg:min-w-[850px] lg:max-w-[1100px] xl:w-[95%] xl:min-w-[1100px] xl:max-w-[1500px] h-[400px] xl:h-[450px] 2xl:h-[550px] shadow-lg overflow-hidden transition-all duration-700 relative">
        <button 
          className='absolute top-0 right-0 p-1 border-2 z-[1000] bg-white cursor-pointer pointer-events-auto'
          onClick={() => {SetTrigger(prev => !prev)}}>
            Reset
        </button>
        <MapContainer
          center={initialPosition}
          zoom={16}
          scrollWheelZoom={true}
          className="h-full w-full"  
        >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={initialPosition} icon={redIcon}>
          <Popup>
            <div className='font-bold mb-2 text-white'>
              PEKANBARU
            </div>
            <div className='text-white font-normal'>
              Jl Lily 2 No 49N
            </div>
            <Link href="https://www.google.com/maps/dir//D'looti,+No+49N,+Jl.+Lili+II,+Kedungsari,+Sukajadi,+Pekanbaru+City,+Riau+28123/@0.5264204,101.4288326,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31d5ab9b94295e2d:0x7167949350a3fad2!2m2!1d101.4287786!2d0.5265375? entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
              target='_blank'>
              <div className='ml-10 bg-red-500 p-3 font-bold mt-6 text-white text-center'>
                &#x2934; Direction
              </div>
            </Link>
          </Popup>
        </Marker>

        {trigger && <ResetView key={key} position={initialPosition} />}
      </MapContainer>
      </div>
    )}