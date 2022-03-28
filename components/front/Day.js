import { useContext, useEffect } from "react";
import {
  Full_container_Days,
  Container_Days,
  Day_box,
  Button_Days,
} from "./my-styled-component";
import { AppContext } from "../../app";
import data from "/data.json";

export default function Day() {
  const obj = data["days-section"];
  const { pdfFormActive, setPdfFormActive, setNavPhoneActive, navPhoneActive } =
    useContext(AppContext);

  useEffect(() => {
    if (pdfFormActive) {
      document.body.style.cssText = `
            height:100vh;
            overflow:hidden;
          `;
    } else {
      document.body.style.cssText = `
            height:auto;
            overflow:auto;
          `;
    }
  }, [pdfFormActive]);
  return (
    <Full_container_Days>
      <Container_Days>
        <Day_box>
          {obj["DayText"].map((item) => {
            return (
              <div className="days" key={item.id}>
                <div className="day-namber">
                  <h1>{item.id}</h1>
                  <span>Giorno</span>
                </div>
                <div className="title">
                  <h1>{item.title}</h1>
                </div>
                <div className="text">
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </Day_box>
        <Button_Days>
          <a onClick={() => setNavPhoneActive(true)}>
            {obj["button-text"]["text"]}
          </a>
        </Button_Days>
      </Container_Days>
    </Full_container_Days>
  );
}
