import Image from "next/image";

import {
  Full_container_About,
  Container_About,
  About,
} from "./my-styled-component";
import data from "/data.json";

export default function AboutTour() {
  const obj = data["about-section"];

  return (
    <Full_container_About>
      <Container_About>
        <About>
          <h1 className="theme">{obj["about-title"]}</h1>
          {obj["AboutText"].map((item) => {
            if (item.id != 3) {
              return (
                <div className="text-box1" key={item.id}>
                  <div className="img-box" key={item.id}>
                    <div className={`img img${item.id}`}>
                      <Image
                        alt=""
                        src={"/images/About Tour/icon.png"}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              );
            } else {
              return (
                <div className="text-box2" key={item.id}>
                  <div className="img-box" key={item.id}>
                    <div className={`img img${item.id}`}>
                      <Image
                        alt=""
                        src={"/images/About Tour/icon.png"}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <h1>{item.title}</h1>
                  <p className="text1">{item.text1}</p>
                  <p className="text2">{item.text2}</p>
                  <p className="text3">{item.text3}</p>
                  <p className="text4">{item.text4}</p>
                </div>
              );
            }
          })}
        </About>
      </Container_About>
    </Full_container_About>
  );
}
