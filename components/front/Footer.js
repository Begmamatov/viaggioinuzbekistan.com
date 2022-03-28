import Image from "next/image";

import { Container_Footer, Full_container_Footer } from "./my-styled-component";
import data from "/data.json";
import { FaPhoneSquareAlt, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  const obj = data["navbar-section"];

  return (
    <Full_container_Footer>
      <Container_Footer>
        <div className="footer-text">
          <div className="logo">
            <div className="img-box">
              <Image
                src={obj["logo"]["src"]}
                layout="fill"
                alt={obj["logo"]["alt"]}
              />
            </div>
            <div className="logo-text"></div>
          </div>

          <div className="title">
            <p>Usbekistan, 140157, Samarkand</p>
            <p>Kuk Saroy 1-place </p>
          </div>

          <div className="contact item1">
            <div className="phone">
              <FaPhoneSquareAlt className="fon-icon" />
              +998(66) 231-05-48
            </div>
            <div className="email">
              <FaTelegramPlane className="fon-icon" />
              +998(99) 777 46 59
            </div>
          </div>

          <div className="contact item2">
            <div className="email">
              <AiOutlineMail className="fon-icon" />
              <a href="mailto:fuzuliy@silkroaddestinations.com">
                fuzuliy@silkroaddestinations.com
              </a>
            </div>
            <div className="email">
              <AiOutlineMail className="fon-icon" />
              <a href="mailto:italiano.b2b@silkroaddestinations.com">
                italiano.b2b@silkroaddestinations.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright 2022 - Silk Road Destinations</p>
          <a href="http://"></a>
        </div>
      </Container_Footer>
    </Full_container_Footer>
  );
}
