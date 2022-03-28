import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../app";
import {
  Full_container_Navbar,
  Container_Navbar,
  RightMenu,
  Logo,
  Menu,
} from "./my-styled-component";
import data from "/data.json";

export default function Navbar() {
  const [open, setOpen] = useState("false");
  const [active, setActive] = useState("false");
  const { pdfFormActive, setPdfFormActive, setNavPhoneActive, navPhoneActive } =
    useContext(AppContext);

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    setActive(!active);
    setMobileMenu((prev) => !prev);
  };

  const btnClickHandle = (e) => {
    e.target.classList.add("click");
    setTimeout(() => {
      e.target.classList.remove("click");
    }, 250);
  };

  useEffect(() => {
    if (mobileMenu || navPhoneActive) {
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
  }, [mobileMenu, navPhoneActive]);

  const router = useRouter();
  const obj = data["navbar-section"];
  return (
    <Full_container_Navbar>
      <Container_Navbar>
        <div className="container">
          {/* Home Head */}
          <div className="head-home">
            <Logo>
              <Image alt="" src={obj.logo.src} layout="fill" />
            </Logo>
            <div className="button-box">
              <button
                className="button-one"
                onClick={(e) => {
                  btnClickHandle(e);
                  router.push("/#contact");
                }}
              >
                {obj["navbar-btns"]["btn-1"]}
              </button>
              <button
                className="button-two"
                onClick={(e) => {
                  btnClickHandle(e);
                  setPdfFormActive(true);
                }}
              >
                {obj["navbar-btns"]["btn-2"]}
              </button>
            </div>
            <div
              id="nav-icon"
              onClick={handleToggle}
              className={open ? "" : "open"}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <RightMenu>
              <div className="contact-home">
                <h3>{obj["about-me"]["navbar-tite"]}</h3>
                <p>
                  <b>{obj["about-me"]["massengers"]} </b>
                  <a href="http://">{obj["about-me"]["massengers-tel"]}</a>
                </p>
                <p>
                  <b>Tel: </b>
                  <a href="http://">{obj["about-me"]["navbar-tel"]}</a>
                </p>
                {obj["about-me"]["navbar-email"].map((text, index) => (
                  <p key={index}>
                    <b>Email: </b>
                    <a href={`http://${text}`}>{text}</a>
                  </p>
                ))}
              </div>
              <div className="avaters">
                {obj["my-images"].map((item, index) => (
                  <div className="avatar-one box" key={index}>
                    <Image
                      alt=""
                      src={`/images/Home${item.src}`}
                      layout="fill"
                    />
                    <span className="name">{item.title}</span>
                  </div>
                ))}
              </div>
            </RightMenu>
          </div>
        </div>
      </Container_Navbar>
      <Menu className={active ? "" : "active"} onClick={handleToggle}>
        <div className="content">
          <div className="contact-home">
            <h3>{obj["about-me"]["navbar-tite"]}</h3>
            <p>
              <b>{obj["about-me"]["massengers"]} </b>
              <a href="http://">{obj["about-me"]["massengers-tel"]}</a>
            </p>
            <p>
              <b>Tel: </b>
              <a href="http://">{obj["about-me"]["navbar-tel"]}</a>
            </p>
            {obj["about-me"]["navbar-email"].map((text, index) => (
              <p key={index}>
                <b>Email: </b>
                <a href={`http://${text}`}>{text}</a>
              </p>
            ))}
          </div>
          <div className="avaters">
            {obj["my-images"].map((item, index) => (
              <div className="avatar-one box" key={index}>
                <Image alt="" src={`/images/Home${item.src}`} layout="fill" />
                <span className="name">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Menu>
    </Full_container_Navbar>
  );
}
