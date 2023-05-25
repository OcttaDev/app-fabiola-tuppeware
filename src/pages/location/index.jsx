import { Link } from "react-router-dom";
import Location from "./location";
import "./style/index.css";
import "../../components/navbar/style/index.css"
import { useRef } from "react";

function Maps() {
  return (
    <div className="map p-2" >
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-2xl text-center font-bold max-w-[400px] title">
          Receba em domicílio, ou retire o seu produto aqui:
        </h1>
      </div>
      <div className="location">
        <Location />
      </div>
    </div>
  );
}
export default Maps;
