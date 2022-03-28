import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";

import { Full_container_Fam, Container_Fam } from "./my-styled-component";
import data from "/data.json";

export default function FAMvideo() {
  const obj = data["famVideo-section"];

  const [play, setPlay] = useState(false);
  const closeVideo = () => setPlay(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeVideo();
      }
    });
  }, []);

  useEffect(() => {
    if (play) {
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
  }, [play]);

  return (
    <Full_container_Fam>
      <div className={`youtube-video ${play ? "active" : ""}`}>
        <div className="exit__btn" onClick={closeVideo}>
          <div className="close-container">
            <span className="cross-line top-left"></span>
            <span className="cross-line top-right"></span>
            <span className="cross-line bottom-left"></span>
            <span className="cross-line bottom-right"></span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
          onClick={closeVideo}
        />
        <ReactPlayer
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
              },
            },
          }}
          width="100%"
          height="100%"
          controls
          url={"https://youtu.be/deVWGGpAqGg"}
          playing={play}
        />
      </div>

      <Container_Fam>
        <div className="box-item">
          <div className="video-item1">
            <h1>Fam Tour Video</h1>
            <div className="box-video" style={{ cursor: "pointer" }}>
              <Image
                alt=""
                src="/images/FAM video/fam.jpg"
                layout="fill"
                onClick={() => setPlay(true)}
              />
            </div>
          </div>
          <div className="text-item1">
            {obj["FamText"].map((item) => {
              if (item.id <= 7)
                return (
                  <div className="text-box" key={item.id}>
                    <h2>{item.title}</h2>
                    <p className="text">{item.text}</p>
                    <p className="user-text">
                      <b>{item.user}</b> {item.userText}
                    </p>
                  </div>
                );
            })}
          </div>
          <div className="text-item2">
            {obj["FamText"].map((item) => {
              if (item.id > 7)
                return (
                  <div className="text-box" key={item.id}>
                    <h2>{item.title}</h2>
                    <p className="text">{item.text}</p>
                    <p className="user-text">
                      <b>{item.user}</b> {item.userText}
                    </p>
                  </div>
                );
            })}
          </div>
        </div>
      </Container_Fam>
    </Full_container_Fam>
  );
}
