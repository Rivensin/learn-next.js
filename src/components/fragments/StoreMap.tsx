'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
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


export default function StoreMap() {
  return (
    <div className="w-[500px] h-[400px] shadow-lg rounded-lg overflow-hidden">
      <MapContainer
        center={[0.5266058859966887, 101.42878570224349]}
        zoom={16}
        scrollWheelZoom={true}
        className="h-full w-full"
        
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[0.5266058859966887, 101.42878570224349]} icon={redIcon}>
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
    </MapContainer>
    </div>
  )
}
