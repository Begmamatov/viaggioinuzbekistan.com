import Image from "next/image";

import { Full_Container_Home, HomePage } from "./my-styled-component";
import data from "/data.json";

export default function Home() {
  const obj = data["home-section"];
  return (
    <Full_Container_Home>
      {/* Home background */}
      <HomePage>
        <div className="home">
          <div className="bgImg">
            <Image
              src={obj["home-bg"]["src"]}
              layout="fill"
              alt={obj["home-bg"]["alt"]}
            />
          </div>

          <div className="text-box">
            <div className="text">
              <div className="text-fam center">
                <h1>{obj["home-text"]["title"]}</h1>
              </div>
              <div className="title">
                <p>{obj["home-text"]["title-text1"]}</p>
                <p>{obj["home-text"]["title-text2"]}</p>
              </div>
              <div className="price center">
                <h1>{obj["home-text"]["price"]}</h1>
              </div>
              <div className="text-about center">
                <p className="text1">{obj["home-text"]["title-text3"]}</p>
                <p className="text2">{obj["home-text"]["title-text4"]}</p>
              </div>
            </div>
            <div className="button-box">
              <div className="box-one box">
                {obj["btns1"].map((text, index) => (
                  <div className="data" key={index}>
                    {text}
                  </div>
                ))}
              </div>
              <div className="box-two box">
                {obj["btns2"].map((text, index) => (
                  <div className="data" key={index}>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HomePage>
    </Full_Container_Home>
  );
}
