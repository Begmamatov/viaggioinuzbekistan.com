import styled from "styled-components";
import { createContext, useState } from "react";
import Home from "../components/front/Home";
import Navbar from "../components/front/Navbar";
import FAMvideo from "../components/front/FAMvideo";
import Map from "../components/front/Map";
import Day from "../components/front/Day";
import AboutTour from "../components/front/About";
import Comment from "../components/front/Comment";
import Steps from "../components/front/Steps";
import Certificate from "../components/front/Certificate";
import Contact from "../components/front/Contact";
import FooterBtn from "../components/front/FooterButton";
import Footer from "../components/front/Footer";
import SmallModal from "../components/front/Modal";
import Modal2 from "../components/front/Modal2";
import Social from "../components/front/social-share";

const Body = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

export const AppContext = createContext(null);
export default function Web() {
  const [navPhoneActive, setNavPhoneActive] = useState(false);
  const [pdfFormActive, setPdfFormActive] = useState(false);
  const appState = {
    navPhoneActive,
    setNavPhoneActive,
    pdfFormActive,
    setPdfFormActive,
  };
  return (
    <AppContext.Provider value={appState}>
      <Body>
        <SmallModal />
        <Modal2 />
        <Social />
        <Navbar />
        <Home />
        <FAMvideo />
        <Map />
        <Day />
        <AboutTour />
        <Comment />
        <Steps />
        <Certificate />
        <Contact />
        <FooterBtn />
        <Footer />
      </Body>
    </AppContext.Provider>
  );
}
