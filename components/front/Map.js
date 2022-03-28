import Image from "next/image";
import {
  Container_Map,
  Full_container_Map,
  Map_text,
} from "./my-styled-component";

import data from "/data.json";

export default function Map() {
  const obj = data["map-section"];

  return (
    <Full_container_Map>
      <Container_Map>
        <Map_text>
          <h1>{obj["map-title"]}</h1>
          <h2>
            {obj["map-text1"]} <br /> {obj["map-text2"]}
          </h2>
          <div className="map-box">
            <Image alt="" src={obj["src"]} layout="fill" />
          </div>
        </Map_text>
      </Container_Map>
    </Full_container_Map>
  );
}
