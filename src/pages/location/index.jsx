import GoogleMapReact from "google-map-react";
import "./style/index.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Maps() {
  const defaultProps = {
    center: {
      lat: -7.666394,
      lng: -36.889637,
    },
    zoom: 15,
  };
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={-7.666394} lng={-36.889637} />
      </GoogleMapReact>
    </div>
  );
}

function Location() {
  return (
    <div className="flex flex-wrap justify-around  items-center my-20 gap-10">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-2xl text-center font-bold max-w-[400px] title">
          Receba em domicílio, ou retire o seu produto aqui:
        </h1>
        <address>Rua Manuel Paulino N°404</address>
      </div>
      <div className="min-[250px]:w-4/5 min-[1000px]:w-2/5">
        <Maps/>
      </div>
    </div>
  );
}
export default Location;
