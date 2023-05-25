import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import './style/index.css'
function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBcuZRZclDIy6ln3KvHAHTfWnlv2dor_DQ",
  });
  return (
      <div className="maps">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{
              lat: -7.666548,
              lng: -36.889466,
            }}
            zoom={19}
          >
            <Marker
              position={{
                lat: -7.666548,
                lng: -36.889466,
              }}
            />
          </GoogleMap>
        ) : (
          <> </>
        )}
      </div>
  );
}
export default Location;