import Image from "next/image";
import {
  Container_Comment,
  Full_container_Comment,
  Slider,
} from "./my-styled-component";
import data from "/data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

export default function Comment() {
  SwiperCore.use([Autoplay]);
  const obj = data["comment-section"];

  return (
    <Full_container_Comment>
      <Container_Comment>
        <Slider>
          <h1>Was die Teilnehmer der FAM-Tour sagen?</h1>
          <Swiper
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {obj["CommentText"].map((item) => {
              if (item.id <= 7)
                return (
                  <SwiperSlide>
                    <div className={`box box${item.id}`} key={item.id}>
                      <div className="user-img">
                        <Image
                          src={`/images/Comment/${item.img}`}
                          layout="fill"
                          alt={item.name}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <div className="text">
                        <p>{item.text1}</p>
                      </div>
                      <div className="text">
                        <p>{item.text2}</p>
                      </div>
                      <div className="text">
                        <p>{item.text3}</p>
                      </div>
                      <hr />
                      <div className="user-name">{item.name}</div>
                      <div className="user-data">{item.data}</div>
                    </div>
                  </SwiperSlide>
                );
              else
                return (
                  <SwiperSlide>
                    <div className={`box box${item.id} none`} key={item.id}>
                      <div className="text">
                        <p>{item.text1}</p>
                      </div>
                      <div className="text">
                        <p>{item.text2}</p>
                      </div>
                      <div className="text">
                        <p>{item.text3}</p>
                      </div>
                      <hr />
                      <div className="user-name">{item.name}</div>
                      <div className="user-data">{item.data}</div>
                    </div>
                  </SwiperSlide>
                );
            })}
          </Swiper>
        </Slider>
      </Container_Comment>
    </Full_container_Comment>
  );
}
