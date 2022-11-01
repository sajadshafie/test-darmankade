import React, { useState, useRef, useMemo, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import style from "../../styles/style_b/ContactAtribute.module.css";
import "leaflet/dist/leaflet.css";
export default function GoogleMap() {
  return (
    <div
      style={{
        height: 500,
      }}
    >
      <MapContainer
        className={"map"}
        center={[35.7471, 51.3033]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.7471, 51.3033]}>
          <Popup minWidth={90}>
            <span></span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
