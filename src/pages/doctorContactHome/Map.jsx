import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { doctorData } from "../Data";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 7.8731,
  lng: 80.7718,
};

const Map = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleMarkerClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseInfoWindow = () => {
    setSelectedDoctor(null);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBSzNtimwLewNypgLnzfpq0fnr26Nfs0no">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {doctorData.map((doctor) => (
          <Marker
            key={doctor.name}
            position={{
              lat: parseFloat(doctor.latitude),
              lng: parseFloat(doctor.longitude),
            }}
            title={doctor.name}
            onClick={() => handleMarkerClick(doctor)}
          />
        ))}
        {selectedDoctor && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedDoctor.latitude),
              lng: parseFloat(selectedDoctor.longitude) + 0.01,
            }}
            onCloseClick={handleCloseInfoWindow}
          >
            <div>
              <h2>{selectedDoctor.name}</h2>
              <p>Specialization: {selectedDoctor.specialization}</p>
              <p>Mobile: {selectedDoctor.mobile}</p>
              <p>Email: {selectedDoctor.email}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
