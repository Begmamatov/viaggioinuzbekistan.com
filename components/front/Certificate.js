import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Container_Doc,
  Full_container_Doc,
  CertificateBox,
} from "./my-styled-component";
import data from "/data.json";

export default function Certificate() {
  const obj = data["certificate-section"];

  const [zoom, setZoom] = useState("");

  // certificate
  const imageZoomHandle = (url) => {
    setZoom(url);
  };

  useEffect(() => {
    if (zoom) {
      document.body.style.cssText = `
                overflow: hidden;
                height:100vh;
            `;
    } else {
      document.body.style.cssText = `
                overflow: auto;
                height:auto;
            `;
    }
  }, [zoom]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        setZoom("");
      }
    });
  }, []);

  return (
    <Full_container_Doc>
      <Container_Doc>
        {zoom && (
          <div className="zoom">
            <div className="exit" onClick={() => setZoom("")} />
            <div className="zoom-content">
              <div className="exit-btn" onClick={() => setZoom("")}>
                <Image
                  alt=""
                  layout="fill"
                  src="/images/Certificate/close-btn.png"
                />
              </div>
              <Image alt="" objectFit="contain" src={zoom} layout="fill" />
            </div>
          </div>
        )}
        <h1>{obj["title"]}</h1>
        <CertificateBox>
          {obj["data"].map((item, index) => {
            return (
              <div key={index} className="img">
                <div className="img-box">
                  <Image alt="" src={item.url} layout="fill" />
                </div>
                <div
                  className="icon-box"
                  onClick={() => imageZoomHandle(item.url)}
                >
                  <Image
                    alt=""
                    src="/images/Certificate/lupa.png"
                    layout="fill"
                  />
                </div>
              </div>
            );
          })}
        </CertificateBox>
      </Container_Doc>
    </Full_container_Doc>
  );
}
