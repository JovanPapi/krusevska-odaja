import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const API_KEY = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

const MapLocation = () => {
  const markerLocation = { lat: 41.3735, lng: 21.2457 };

  return (
    <APIProvider apiKey={API_KEY}>
      <div style={{ width: "100%", height: 500 }}>
        <Map defaultZoom={13} defaultCenter={markerLocation} scrollwheel={false} zoom={15}>
          <Marker position={markerLocation} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapLocation;
