import { useState, useEffect } from "react";

import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTelegramPlane, FaPinterestP, FaViber } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";

const Wrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;

    .icon {
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      color: #fff;
      font-size: 21px;
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        width: 75px;
      }

      &.facebook {
        background: #3b5998;
      }
      &.linkedin {
        background: #1b77b5;
      }
      &.telegram {
        background: #2288cc;
      }
      &.twitter {
        background: #29a1f2;
      }
      &.whatsapp {
        background: #67c348;
      }
      &.pinterest {
        background: #cc3727;
      }
      &.viber {
        background: #7b519d;
      }
    }
  }
`;

export default function SocialShare() {
  // document.location.href

  const [state, setState] = useState({ url: "", title: "" });

  useEffect(() => {
    setState({
      url: document.location.href,
      title: document.title,
    });
  }, []);

  const { title, url } = state;
  return (
    <Wrapper>
      <FacebookShareButton url={url} quote={title}>
        <div className="icon facebook">
          <FaFacebookF />
        </div>
      </FacebookShareButton>

      {/* <PinterestShareButton url={url} media="/logo.webp" title={title}>
        <div className="icon pinterest">
          <FaPinterestP />
        </div>
      </PinterestShareButton> */}

      <LinkedinShareButton
        url={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        title={title}
        source={url}
      >
        <div className="icon linkedin">
          <GrLinkedinOption />
        </div>
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title}>
        <div className="icon whatsapp">
          <ImWhatsapp />
        </div>
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <div className="icon telegram">
          <FaTelegramPlane />
        </div>
      </TelegramShareButton>

      <ViberShareButton url={url} title={title}>
        <div className="icon viber">
          <FaViber />
        </div>
      </ViberShareButton>

      <TwitterShareButton url={url} title={title}>
        <div className="icon twitter">
          <BsTwitter />
        </div>
      </TwitterShareButton>
    </Wrapper>
  );
}
