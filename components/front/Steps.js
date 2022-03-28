import Image from "next/image";
import {
  Full_container_Steps,
  Container_Steps,
  StepsBox,
  Button,
} from "./my-styled-component";

import data from "/data.json";

export default function Steps() {
  const obj = data["steps-section"];
  return (
    <Full_container_Steps>
      <Container_Steps>
        <h1>{obj["steps-title"]}</h1>
        <StepsBox>
          {obj["StepData"].map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="img-item">
                  <div className={`img-box img${item.id}`}>
                    <Image alt="" src="/images/Steps/work.png" layout="fill" />
                  </div>
                  <div className="number">{item.id}</div>
                </div>
                <div className="text">
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </StepsBox>
        <Button>
          <a href="#contact">{obj["steps-title"]}</a>
        </Button>
      </Container_Steps>
    </Full_container_Steps>
  );
}
