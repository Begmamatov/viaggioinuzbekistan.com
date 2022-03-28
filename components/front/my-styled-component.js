import styled from "styled-components";

// Navbar styled

export const Full_container_Navbar = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
  .container {
    margin: auto;
    position: relative;
    @media (min-width: 320px) {
      width: 100%;
    }
    @media (min-width: 576px) {
      width: 540px;
    }
    @media (min-width: 768px) {
      width: 720px;
    }
    @media (min-width: 992px) {
      width: 960px;
    }
    @media (min-width: 1200px) {
      width: 1140px;
    }
    @media (min-width: 1400px) {
      width: 1360px;
    }
  }
  .contact-home {
    display: flex;
    flex-direction: column;
    @media (min-width: 320px) {
      margin-left: 10px;
      padding: 20px 0px;
    }
    @media (min-width: 576px) {
      margin-left: 15px;
      padding: 20px 0px;
    }
    @media (min-width: 768px) {
      margin: 0 30px;
      padding: 20px 0px;
    }
    @media (min-width: 992px) {
      padding: 10px 0px;
      margin: auto 30px;
      margin-right: 10px;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    h3 {
      font-style: normal;
      font-weight: bold;
      color: #171312;
      @media (min-width: 320px) {
        font-size: 13px;
        line-height: 15px;
      }
      @media (min-width: 576px) {
        font-size: 15px;
        line-height: 20px;
      }
      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }
      @media (min-width: 992px) {
        font-size: 15px;
        line-height: 20px;
      }
      @media (min-width: 1200px) {
        font-size: 18px;
        line-height: 24px;
      }
      @media (min-width: 1400px) {
      }
    }
    p {
      @media (min-width: 320px) {
        br {
          display: block;
        }
        a {
          margin-left: 10px;
          line-height: 10px;
        }
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
      }
      @media (min-width: 576px) {
        font-size: 15px;
        font-weight: 400;
      }
      @media (min-width: 768px) {
        br {
          display: none;
        }
        a {
          margin-left: 5px;
          line-height: 0;
          font-weight: 400;
        }
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
      }
      @media (min-width: 992px) {
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
      }
      @media (min-width: 1200px) {
        font-size: 14px;
        font-weight: 300;
        line-height: 135.4%;
      }
      @media (min-width: 1400px) {
      }
    }
  }
  .avaters {
    position: relative;
    display: flex;
    column-gap: 15px;
    @media (min-width: 320px) {
      margin-left: 10px;
      flex-direction: row;
      row-gap: 20px;
      column-gap: 10px;
    }
    @media (min-width: 576px) {
      margin-left: 15px;
      flex-direction: row;
      align-items: center;
    }
    @media (min-width: 768px) {
      margin-left: 30px;
    }
    @media (min-width: 992px) {
      display: flex;
      margin: auto;
    }
    @media (min-width: 1200px) {
      display: flex;
    }
    @media (min-width: 1400px) {
      display: flex;
    }
    .box {
      position: relative;
      border-radius: 50%;
      filter: drop-shadow(2px 3px 3px rgba(0, 0, 0, 0.15));
      border: 5px solid #ffffff;
      box-sizing: border-box;
      background-color: white;
      @media (min-width: 320px) {
        width: 75px;
        height: 76.56px;
      }
      @media (min-width: 576px) {
        width: 104px;
        height: 106.17px;
      }
      @media (min-width: 768px) {
        width: 104px;
        height: 106.17px;
      }
      @media (min-width: 992px) {
        width: 90px;
        height: 92px;
      }
      @media (min-width: 1200px) {
        width: 104px;
        height: 106.17px;
      }
      @media (min-width: 1400px) {
      }
      img {
        border-radius: 50%;
      }
      .name {
        position: absolute;
        left: 50%;
        top: 95%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #2c85b8;
        border-radius: 3px;
        font-style: normal;
        font-weight: normal;
        line-height: 135.4%;
        letter-spacing: 0.035em;
        color: #ffffff;
        @media (min-width: 320px) {
          width: 47.58px;
          height: 16px;
          font-size: 11px;
        }
        @media (min-width: 576px) {
          width: 59.58px;
          height: 21.67px;
          font-size: 14px;
        }
        @media (min-width: 768px) {
          width: 59.58px;
          height: 21.67px;
          font-size: 14px;
        }
        @media (min-width: 992px) {
          width: 53.58px;
          height: 19.48px;
          font-size: 13px;
        }
        @media (min-width: 1200px) {
          width: 59.58px;
          height: 21.67px;
          font-size: 14px;
        }
        @media (min-width: 1400px) {
        }
      }
    }
  }
`;
export const Container_Navbar = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  filter: drop-shadow(0px 4px 12px rgba(207, 207, 207, 0.25));
  z-index: 600;
  @media (min-width: 320px) {
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }

  /* Home Hand Block */

  .head-home {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    @media (min-width: 320px) {
      justify-content: space-between;
    }
    @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
      justify-content: space-around;
    }
    @media (min-width: 992px) {
      justify-content: space-around;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .button-box {
      position: relative;
      display: flex;
      flex-direction: column;
      @media (min-width: 320px) {
        padding: 10px;
        row-gap: 7px;
        margin-right: 10px;
      }
      @media (min-width: 576px) {
        padding: 10px;
        row-gap: 7px;
        margin-right: 10px;
      }
      @media (min-width: 768px) {
        row-gap: 13px;
        padding: 7px;
        margin-left: 20px;
        margin-right: 40px;
      }
      @media (min-width: 992px) {
        row-gap: 15px;
        padding: 10px;
        margin-left: 20px;
        margin-right: 0px;
      }
      @media (min-width: 1200px) {
        row-gap: 19px;
        padding: 15px 0;
      }
      @media (min-width: 1400px) {
      }

      button {
        background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
        border-radius: 4px;
        border: none;
        font-style: normal;
        line-height: 16px;
        text-transform: uppercase;
        color: #171312;
        cursor: pointer;
        &.click {
          transition: 0.4s;
          box-shadow: 0px 1px 0px #967c13;
          transform: translateY(2px);

          @media (min-width: 1200px) {
            box-shadow: 0px 3px 0px #967c13;
          }
        }

        &:hover {
          transition: 0.4s;
          background: linear-gradient(to bottom, #d3af1d 0%, #eec520 100%);
        }
        @media (min-width: 320px) {
          width: 155px;
          height: 20px;
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          line-height: 11px;
          text-transform: uppercase;
          box-shadow: 0px 2.09302px 0px #967c13;
          border-radius: 2.51163px;
        }
        @media (min-width: 576px) {
          width: 185px;
          height: 25px;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 11px;
          text-transform: uppercase;
          box-shadow: 0px 2.09302px 0px #967c13;
          border-radius: 2.51163px;
        }
        @media (min-width: 768px) {
          width: 200px;
          height: 30px;
          box-shadow: 0 3px 0 #967c13;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: -0.2px;
        }
        @media (min-width: 992px) {
          width: 200px;
          height: 35px;
          box-shadow: 0 3px 0 #967c13;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: -0.2px;
        }
        @media (min-width: 1200px) {
          width: 220px;
          height: 40px;
          box-shadow: 0px 5px 0px #967c13;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0px;
        }
        @media (min-width: 1400px) {
        }
      }
    }
    #nav-icon {
      margin: auto 0px;
      position: relative;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      @media (min-width: 320px) {
        width: 30px;
        height: 25px;
        margin-right: 5px;
      }
      @media (min-width: 576px) {
        width: 36px;
        height: 25px;
      }
      @media (min-width: 768px) {
        width: 45px;
        height: 25px;
      }
      @media (min-width: 992px) {
        display: none;
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
      span {
        display: block;
        position: absolute;
        background: #2c85b8;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
        @media (min-width: 320px) {
          height: 4px;
          width: 100%;
          border-radius: 20px;
        }
        @media (min-width: 576px) {
          height: 4px;
          width: 100%;
          border-radius: 9px;
        }
        @media (min-width: 768px) {
          height: 5px;
          width: 100%;
        }
      }
      span:nth-child(1) {
        top: 0px;
      }

      span:nth-child(2) {
        top: 10px;
      }

      span:nth-child(3) {
        top: 20px;
      }
    }
    #nav-icon.open span:nth-child(1) {
      top: 10px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    #nav-icon.open span:nth-child(2) {
      opacity: 0;
      left: -60px;
    }

    #nav-icon.open span:nth-child(3) {
      top: 10px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;
export const RightMenu = styled.div`
  flex-direction: row;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 992px) {
    column-gap: 15px;
    display: flex;
  }
  @media (min-width: 1200px) {
    column-gap: 30px;
  }
  @media (min-width: 1400px) {
  }
`;
export const Logo = styled.div`
  position: relative;
  @media (min-width: 320px) {
    width: 90px;
    height: 52px;
    margin: auto 0px;
  }
  @media (min-width: 576px) {
    width: 90px;
    height: 52px;
  }
  @media (min-width: 768px) {
    width: 150px;
    height: 88px;
  }
  @media (min-width: 992px) {
    width: 170px;
    height: 98px;
  }
  @media (min-width: 1200px) {
    width: 218px;
    height: 126px;
  }
  @media (min-width: 1400px) {
  }
  img {
    object-fit: cover;
  }
`;
export const Menu = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: transparent;
  right: -100%;
  z-index: 499;
  .content {
    position: absolute;
    width: auto;
    padding-right: 20px;
    right: 0;
    height: 100vh;
    flex-direction: column;
    background-image: url("/images/Home/bgfon.jpg");
    z-index: 500;
    display: flex;
    box-shadow: -5px 10px 41px rgba(0, 0, 0, 0.25);
    * {
      opacity: 0;
    }
  }
  &.active {
    right: 0;
    opacity: 1;
    * {
      opacity: 1;
    }
  }
  @media (min-width: 320px) {
    opacity: 0;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    display: none;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
  .contact-home {
    row-gap: 3px;
    p {
      a {
        margin: 0;
      }
    }
  }
`;

// Home styled

export const Full_Container_Home = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const HomePage = styled.div`
  /* Home Block */
  background-image: url("/images/Home/bgfon.jpg");
  width: 100%;
  @media (min-width: 320px) {
    width: 100%;
    height: 550px;
  }
  @media (min-width: 576px) {
    width: 100%;
    height: 600px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    height: 800px;
  }
  @media (min-width: 1400px) {
  }
  .home {
    position: relative;
    width: 100%;
    @media (min-width: 320px) {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 576px) {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      width: 100%;
    }
    @media (min-width: 992px) {
      width: 100%;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .bgImg {
      position: relative;
      @media (min-width: 320px) {
        width: 100%;
        height: 30%;
      }
      @media (min-width: 576px) {
        width: 100%;
        height: 100%;
      }
      @media (min-width: 768px) {
        width: 100%;
      }
      @media (min-width: 992px) {
        width: 100%;
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
    }
    img {
      object-fit: cover;
    }
  }
  .text-box {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    @media (min-width: 320px) {
      row-gap: 30px;
      height: 90%;
      margin-top: 50px;
    }
    @media (min-width: 576px) {
      row-gap: 40px;
      height: 90%;
      margin-top: 90px;
    }
    @media (min-width: 768px) {
      row-gap: 40px;
      height: 90%;
    }
    @media (min-width: 992px) {
      row-gap: 40px;
      height: 90%;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .center,
    .data {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 0px;
      .text-fam {
        @media (min-width: 320px) {
          width: 100%;
          margin-bottom: 35%;
        }
        @media (min-width: 576px) {
          width: 500px;
          height: 50px;
          margin-bottom: 0;
        }
        @media (min-width: 768px) {
          height: 70px;
        }
        @media (min-width: 992px) {
          width: 622px;
          height: 70px;
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
        h1 {
          font-style: normal;
          font-weight: 500;
          color: #ffffff;
          text-shadow: 2px 2px 2px rgba(67, 92, 123, 0.75);
          @media (min-width: 320px) {
            font-size: 30px;
            line-height: 23px;
          }
          @media (min-width: 576px) {
            font-size: 40px;
            line-height: 23px;
          }
          @media (min-width: 768px) {
            font-size: 44px;
            line-height: 51px;
          }
          @media (min-width: 992px) {
            font-size: 55px;
            font-weight: 400;
            line-height: 51px;
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
      }
      .title {
        p {
          text-align: center;
          margin-top: 5px;
          @media (min-width: 320px) {
            font-size: 14px;
            color: #171312;
            font-weight: 500;
            text-shadow: 2px 2px 2px rgba(171, 171, 171, 0.6);
          }
          @media (min-width: 576px) {
            font-size: 25px;
            color: #ffffff;
            font-weight: 400;
            text-shadow: 2px 2px 2px rgb(67 92 123 / 75%);
          }
          @media (min-width: 768px) {
            font-size: 30px;
          }
          @media (min-width: 992px) {
            font-size: 38px;
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
      }
      .price {
        margin-top: 10px;
        @media (min-width: 320px) {
          height: 36px;
        }
        @media (min-width: 576px) {
          height: 45px;
        }
        @media (min-width: 768px) {
          height: 75px;
        }
        @media (min-width: 992px) {
          height: 75px;
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
        h1 {
          font-style: normal;
          font-weight: 900;
          margin-top: 10px;
          @media (min-width: 320px) {
            font-size: 30px;
            line-height: 23px;
            color: #171312;
            text-shadow: 2px 2px 2px rgba(171, 171, 171, 0.6);
          }
          @media (min-width: 576px) {
            font-size: 45px;
            line-height: 23px;
            color: #ffffff;
            text-shadow: 2px 2px 2px rgba(67, 92, 123, 0.75);
          }
          @media (min-width: 768px) {
            font-size: 50px;
            line-height: 51px;
          }
          @media (min-width: 992px) {
            font-size: 55px;
            font-weight: 900;
            line-height: 51px;
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
      }
      .text-about {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        p {
          text-align: center;
          font-style: normal;
          @media (min-width: 320px) {
            font-size: 14px;
            line-height: 14px;
            padding: 0px 10px;
            font-weight: 500;
            color: #171312;
            text-shadow: 2px 2px 2px rgba(171, 171, 171, 0.6);
          }
          @media (min-width: 576px) {
            font-size: 18px;
            line-height: 20px;
            padding: 0px 20px;
            font-weight: 400;
            color: #ffffff;
            text-shadow: 2px 2px 2px rgba(67, 92, 123, 0.75);
          }
          @media (min-width: 768px) {
          }
          @media (min-width: 992px) {
            font-size: 21px;
            line-height: 24px;
            padding: 0;
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
        .text1 {
          text-align: center;
          margin-top: 10px;
          @media (min-width: 320px) {
            font-size: 14px;
            font-weight: 500;
            color: #171312;
            text-shadow: 2px 2px 2px rgba(171, 171, 171, 0.6);
          }
          @media (min-width: 576px) {
            font-weight: 400;
            font-size: 25px;
            text-shadow: 2px 2px 2px rgb(67 92 123 / 75%);
            color: #ffffff;
          }
          @media (min-width: 768px) {
            font-size: 30px;
          }
          @media (min-width: 992px) {
            font-size: 38px;
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
        .text2 {
          @media (min-width: 320px) {
            margin-top: 5px;
          }
          @media (min-width: 576px) {
            margin-top: 15px;
          }
          @media (min-width: 768px) {
            font-size: 20px;
          }
          @media (min-width: 992px) {
            font-size: 25px;
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
      }
    }
    .button-box {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      .data {
        background: rgba(92, 136, 182, 0.7);
        border-radius: 3px;
        font-family: "Nunito Sans", sans-serif;
        font-weight: 900;
        color: #ffffff;
        text-shadow: 2px 2px 2px rgb(67 92 123 / 75%);
        text-transform: uppercase;
        @media (min-width: 320px) {
          width: 250px;
          height: 30px;
          font-size: 14px;
          letter-spacing: 0.05em;
        }
        @media (min-width: 576px) {
          width: 250px;
          height: 35px;
          font-size: 14px;
          letter-spacing: 0.05em;
        }
        @media (min-width: 768px) {
          width: 270px;
          height: 35px;
          font-size: 16px;
        }
        @media (min-width: 992px) {
          width: 320px;
          height: 45px;
          font-size: 18px;
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
      .box {
        display: flex;
        @media (min-width: 320px) {
          flex-direction: column;
          row-gap: 10px;
        }
        @media (min-width: 576px) {
          flex-direction: row;
          column-gap: 50px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
  }
`;

// FamVideo styled

export const Full_container_Fam = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }

  .youtube-video {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 2245564;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    display: none;

    .exit__btn {
      position: absolute;
      z-index: 2;
      right: 40px;
      top: 20px;
      .close-container {
        position: absolute;
        width: 40px;
        height: 40px;
        @media (min-width: 320px) {
          width: 20px;
          height: 20px;
        }
        @media (min-width: 768px) {
          width: 30px;
          height: 30px;
        }
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
      }
      .close-container:after {
        content: "";
        display: block;
        position: absolute;
        width: 70%;
        height: 2px;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        transform: scale(0, 1);
        transition: all 0.25s cubic-bezier(0.3, 0, 0.2, 1);
      }
      .close-container .cross-line {
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 6px;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
      }
      .close-container .cross-line.top-left {
        transform: rotate(45deg);
      }
      .close-container .cross-line.top-right {
        transform: rotate(135deg);
      }
      .close-container .cross-line.bottom-left {
        transform: rotate(-45deg);
      }
      .close-container .cross-line.bottom-right {
        transform: rotate(-135deg);
      }
      .close-container .cross-line:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        border-radius: 6px;
        background-color: #fff;
        transition: all 0.4s cubic-bezier(0.3, 0, 0.2, 1);
      }
      .close-container:hover:after {
        transition: all 0.4s cubic-bezier(0.3, 0, 0.2, 1);
        transform: scale(1, 1);
      }
      .close-container:hover .cross-line:before {
        transform: translate(-105%, 0);
      }
    }

    &.active {
      display: block;
    }
    iframe {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      @media (min-width: 320px) {
        width: 95%;
        height: 40%;
      }
      @media (min-width: 576px) {
        width: 540px;
        height: 50%;
      }
      @media (min-width: 768px) {
        width: 720px;
        height: 50%;
      }
      @media (min-width: 992px) {
        width: 960px;
        height: 70%;
      }
      @media (min-width: 1200px) {
        width: 1140px;
        height: 80%;
      }
      @media (min-width: 1400px) {
        width: 1360px;
        height: 90%;
      }
    }
  }
`;
export const Container_Fam = styled.div`
  margin: auto;
  background-color: #ffffff;
  padding: 15px;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }

  /* Box Item */
  .box-item {
    width: 100%;
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    @media (min-width: 320px) {
      display: flex;
      flex-direction: column;
      row-gap: 15px;
    }
    @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
      display: grid;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .video-item1 {
      grid-area: video;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 37px;
        /* identical to box height */

        text-transform: uppercase;

        /* Text Color */

        color: #171312;
        margin-bottom: 24px;
        margin-top: 8px;
        text-align: center;
        @media (min-width: 320px) {
          font-size: 20px;
          line-height: 23px;
        }
        @media (min-width: 576px) {
          font-size: 32px;
          line-height: 37px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
      .box-video {
        @media (min-width: 320px) {
          width: 100%;
          height: 236px;
        }
        @media (min-width: 400px) {
          width: 100%;
          height: 280px;
        }
        @media (min-width: 500px) {
          width: 100%;
          height: 350px;
        }
        @media (min-width: 576px) {
          width: 100%;
          height: 400px;
        }
        @media (min-width: 768px) {
          width: 90%;
          height: 400px;
        }
        @media (min-width: 992px) {
          width: 100%;
          height: 390px;
        }
        @media (min-width: 1200px) {
          height: 400px;
        }
        @media (min-width: 1400px) {
          height: 420px;
        }
      }
    }
    .text-box {
      padding: 15px 10px;
      background: #f8f8f8;
      h2 {
        font-style: normal;
        /* identical to box height */

        text-transform: uppercase;

        /* Text Color */

        color: #171312;
        margin-bottom: 5px;
        @media (min-width: 320px) {
          font-weight: bold;
          font-size: 15px;
          line-height: 17px;
        }
        @media (min-width: 576px) {
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
      p {
        font-style: normal;

        /* Text Color */

        color: #171312;
        @media (min-width: 320px) {
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
        }
        @media (min-width: 576px) {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
      .user-text {
        font-style: normal;
        /* identical to box height */

        /* Text Color */

        color: #171312;
        margin-top: 13px;
        @media (min-width: 320px) {
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
        }
        @media (min-width: 576px) {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
    .text-item1 {
      grid-area: text1;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      @media (min-width: 320px) {
      }
      @media (min-width: 576px) {
      }
      @media (min-width: 768px) {
      }
      @media (min-width: 992px) {
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
    }
    .text-item2 {
      grid-area: text2;
      align-self: end;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      @media (min-width: 320px) {
      }
      @media (min-width: 576px) {
      }
      @media (min-width: 768px) {
      }
      @media (min-width: 992px) {
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
    }
    grid-template-areas:
      "text1 video"
      "text1 text2";
    column-gap: 30px;
  }
`;

// Map styled

export const Full_container_Map = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const Container_Map = styled.div`
  margin: auto;
  background-color: #ffffff;
  padding: 15px;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }
`;
export const Map_text = styled.div`
  h1 {
    font-style: normal;
    text-transform: uppercase;

    /* Text Color */

    color: #171312;
    text-align: center;
    margin-top: 15px;
    @media (min-width: 320px) {
      font-weight: bold;
      font-size: 16px;
      line-height: 18px;
    }
    @media (min-width: 576px) {
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
    }
    @media (min-width: 768px) {
      font-weight: bold;
      font-size: 25px;
      line-height: 27px;
    }
    @media (min-width: 992px) {
      font-weight: bold;
      font-size: 30px;
      line-height: 34px;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
  h2 {
    font-style: normal;
    text-align: center;
    text-transform: uppercase;

    /* Text Color */

    color: #171312;
    margin-top: 25px;
    @media (min-width: 320px) {
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
    }
    @media (min-width: 576px) {
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
    }
    @media (min-width: 768px) {
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
    }
    @media (min-width: 992px) {
      font-weight: normal;
      font-size: 22px;
      line-height: 25px;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
  .map-box {
    width: 100%;
    height: 675px;
    object-fit: cover;
    margin: auto;
    margin-top: 25px;
    justify-content: center;
    @media (min-width: 320px) {
      width: 100%;
      height: 200px;
    }
    @media (min-width: 420px) {
      width: 100%;
      height: 300px;
    }
    @media (min-width: 576px) {
      width: 100%;
      height: 300px;
    }
    @media (min-width: 768px) {
      width: 100%;
      height: 400px;
    }
    @media (min-width: 992px) {
      width: 100%;
      height: 555px;
    }
    @media (min-width: 1200px) {
      width: 960px;
      height: 555px;
    }
    @media (min-width: 1400px) {
    }
  }
`;

// Days styled

export const Full_container_Days = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const Container_Days = styled.div`
  margin: auto;
  background-color: #ffffff;
  padding: 15px;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }
`;
export const Day_box = styled.div`
  display: grid;
  @media (min-width: 320px) {
    grid-template-columns: 1fr;
    row-gap: 15px;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr;
    row-gap: 15px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 15px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 15px;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
  .days {
    background: #f8f8f8;
    padding: 15px 10px;
    display: grid;
    column-gap: 15px;
    justify-content: start;
    @media (min-width: 320px) {
      grid-template-columns: 55px auto auto auto;
      grid-template-areas:
        "Number title title title"
        " text text text text";
      row-gap: 15px;
    }
    @media (min-width: 576px) {
      grid-template-areas:
        "Number title"
        "Number text";
      grid-template-columns: 55px auto auto auto;
      row-gap: 5px;
    }
    @media (min-width: 768px) {
      grid-template-areas:
        "Number title"
        "Number text";
      grid-template-columns: 70px auto auto auto;
      row-gap: 5px;
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .day-namber {
      background: #fecc00;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: Number;
      @media (min-width: 320px) {
        width: 55px;
        height: 55px;
      }
      @media (min-width: 576px) {
        width: 55px;
        height: 55px;
      }
      @media (min-width: 768px) {
        width: 70px;
        height: 70px;
      }
      @media (min-width: 992px) {
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
      h1 {
        font-family: "Nunito Sans", sans-serif;
        font-style: normal;
        font-weight: 900;
        /* identical to box height */

        text-transform: uppercase;

        /* Text Color */

        color: #171312;
        @media (min-width: 320px) {
          font-size: 24px;
          line-height: 15px;
        }
        @media (min-width: 576px) {
          font-size: 30px;
          line-height: 30px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
      span {
        position: absolute;
        background: #2c85b8;
        border-radius: 3px;
        font-style: normal;
        bottom: -4px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* identical to box height */

        text-transform: uppercase;

        color: #ffffff;
        padding: 2px 4px;
        @media (min-width: 320px) {
          font-weight: 500;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.05em;
        }
        @media (min-width: 576px) {
          font-weight: 600;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.02em;
          padding: 2px 3px;
        }
        @media (min-width: 768px) {
          padding: 2px 4px;
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
    .title {
      grid-area: title;
      justify-self: start;
      align-self: center;
      h1 {
        font-style: normal;
        text-transform: uppercase;

        /* Text Color */

        color: #171312;
        @media (min-width: 320px) {
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
        }
        @media (min-width: 576px) {
          font-weight: bold;
          font-size: 16px;
          line-height: 22px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
    .text {
      grid-area: text;
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        /* or 17px */

        letter-spacing: -0.01em;

        /* Text Color */

        color: #171312;
        @media (min-width: 320px) {
          font-weight: 400;
          font-size: 13px;
          line-height: 17px;
        }
        @media (min-width: 576px) {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
  }
`;
export const Button_Days = styled.div`
  @media (min-width: 320px) {
    padding: 25px 0;
  }
  @media (min-width: 576px) {
    padding: 30px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
  a {
    background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-style: normal;
    /* identical to box height */

    text-transform: uppercase;

    /* Text Color */

    color: #171312;
    cursor: pointer;
    &.click {
      transition: 0.4s;
      box-shadow: 0px 1px 0px #967c13;
      transform: translateY(2px);

      @media (min-width: 1200px) {
        box-shadow: 0px 3px 0px #967c13;
      }
    }

    &:hover {
      transition: 0.4s;
      background: linear-gradient(to bottom, #d3af1d 0%, #eec520 100%);
    }
    @media (min-width: 320px) {
      width: 290px;
      height: 30px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      box-shadow: 0px 4px 0px #967c13;
      border-radius: 3px;
    }
    @media (min-width: 576px) {
      width: 380px;
      height: 40px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      box-shadow: 0px 5px 0px #967c13;
      border-radius: 4px;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
`;

// About styled

export const Full_container_About = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const Container_About = styled.div`
  margin: auto;
  padding: 15px;
  background-color: #fff;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }
`;
export const About = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  .theme {
    font-style: normal;
    font-weight: bold;
    /* identical to box height */

    text-transform: uppercase;
    text-align: center;
    padding: 25px;

    /* Text Color */

    color: #171312;
    @media (min-width: 320px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media (min-width: 576px) {
      font-size: 20px;
      line-height: 25px;
    }
    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 30px;
    }
    @media (min-width: 992px) {
      font-size: 30px;
      line-height: 38px;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
  .text-box1 {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    display: grid;
    row-gap: 10px;
    justify-content: start;
    padding-right: 5px;
    @media (min-width: 320px) {
      grid-template-columns: 70px auto;
      grid-template-rows: auto auto;
      column-gap: 10px;
      grid-template-areas: "img title" "text text";
    }
    @media (min-width: 576px) {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      column-gap: 30px;
      grid-template-areas: "img title" "img text";
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .img-box {
      background: #fecc00;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: img;
      @media (min-width: 320px) {
        width: 70px;
        height: 70px;
        border: 5px solid #ffffff;
      }
      @media (min-width: 576px) {
        width: 90px;
        height: 90px;
        border: 5px solid #ffffff;
      }
      @media (min-width: 768px) {
        width: 120px;
        height: 120px;
        border: 5px solid #ffffff;
      }
      @media (min-width: 992px) {
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
      .img {
        @media (min-width: 320px) {
          width: 50px;
          height: 50px;
        }
        @media (min-width: 576px) {
          width: 82px;
          height: 81px;
        }
        @media (min-width: 768px) {
          width: 82px;
          height: 81px;
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
        img {
          object-fit: cover;
        }
      }
      .img1 {
        img {
          object-position: 0px 0px;
        }
      }
      .img2 {
        img {
          object-position: 0px 7%;
        }
      }
      .img3 {
        img {
          object-position: 0px 14%;
        }
      }
      .img4 {
        img {
          object-position: 0px 21%;
        }
      }
      .img5 {
        img {
          object-position: 0px 28.5%;
        }
      }
    }
    h1 {
      font-style: normal;
      align-self: center;
      /* identical to box height */

      grid-area: title;

      /* Text Color */

      color: #171312;
      @media (min-width: 320px) {
        font-size: 15px;
        line-height: 23px;
        font-weight: 600;
      }
      @media (min-width: 576px) {
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
      }
      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 23px;
      }
      @media (min-width: 992px) {
        font-size: 20px;
        line-height: 23px;
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      padding-bottom: 15px;
      /* Text Color */
      grid-area: text;
      color: #171312;
      @media (min-width: 320px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        padding-left: 15px;
      }
      @media (min-width: 576px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        padding-left: 0;
      }
      @media (min-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 992px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
    }
  }
  .text-box2 {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    display: grid;
    row-gap: 10px;
    justify-content: start;
    padding-right: 5px;
    @media (min-width: 320px) {
      grid-template-columns: 70px auto;
      grid-template-rows: auto auto;
      column-gap: 10px;
      grid-template-areas: "img title" "text1 text1" "text2 text2" "text3 text3" "text4 text4";
    }
    @media (min-width: 576px) {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      column-gap: 30px;
      grid-template-areas: "img title" "img text1" "text2 text2" "text3 text3" "text4 text4";
    }
    @media (min-width: 768px) {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      column-gap: 30px;
      grid-template-areas: "img title" "img text1" "img text2" "img text3" "img text4";
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .img-box {
      background: #fecc00;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: img;
      @media (min-width: 320px) {
        width: 70px;
        height: 70px;
        border: 5px solid #ffffff;
      }
      @media (min-width: 576px) {
        width: 90px;
        height: 90px;
        border: 5px solid #ffffff;
      }
      @media (min-width: 768px) {
        width: 120px;
        height: 120px;
        border: 5px solid #ffffff;
      }
      @media (min-width: 992px) {
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
      .img {
        @media (min-width: 320px) {
          width: 50px;
          height: 50px;
        }
        @media (min-width: 576px) {
          width: 82px;
          height: 81px;
        }
        @media (min-width: 768px) {
          width: 82px;
          height: 81px;
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
        img {
          object-fit: cover;
        }
      }
      .img1 {
        img {
          object-position: 0px 0px;
        }
      }
      .img2 {
        img {
          object-position: 0px 7%;
        }
      }
      .img3 {
        img {
          object-position: 0px 14%;
        }
      }
      .img4 {
        img {
          object-position: 0px 21%;
        }
      }
      .img5 {
        img {
          object-position: 0px 28.5%;
        }
      }
    }
    h1 {
      font-style: normal;
      align-self: center;
      /* identical to box height */

      grid-area: title;

      /* Text Color */

      color: #171312;
      @media (min-width: 320px) {
        font-size: 15px;
        line-height: 23px;
        font-weight: 600;
      }
      @media (min-width: 576px) {
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
      }
      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 23px;
      }
      @media (min-width: 992px) {
        font-size: 20px;
        line-height: 23px;
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      /* Text Color */
      color: #171312;
      @media (min-width: 320px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        padding-left: 15px;
      }
      @media (min-width: 576px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        padding-left: 0;
      }
      @media (min-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 992px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
    }
    .text1 {
      grid-area: text1;
    }
    .text2 {
      grid-area: text2;
      @media (min-width: 576px) {
        padding-left: 10px;
      }
      @media (min-width: 768px) {
        padding-left: 0px;
      }
    }
    .text3 {
      grid-area: text3;
      @media (min-width: 576px) {
        padding-left: 10px;
      }
      @media (min-width: 768px) {
        padding-left: 0px;
      }
    }
    .text4 {
      grid-area: text4;
      padding-bottom: 15px;
      @media (min-width: 576px) {
        padding-left: 10px;
      }
      @media (min-width: 768px) {
        padding-left: 0px;
      }
    }
  }
`;

// Comment styled

export const Full_container_Comment = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #ffffff;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const Container_Comment = styled.div`
  margin: auto;
  padding: 15px;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }
`;
export const Slider = styled.div`
  width: 100%;
  h1 {
    font-style: normal;
    font-weight: bold;
    /* identical to box height */

    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;

    /* Text Color */

    color: #171312;
    @media (min-width: 320px) {
      font-weight: bold;
      font-size: 15px;
      line-height: 17px;
      margin-top: 30px;
      margin-bottom: 10px;
    }
    @media (min-width: 576px) {
      font-size: 20px;
      line-height: 25px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 44px;
      margin-top: 50px;
      margin-bottom: 30px;
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 30px 10px;
    @media (min-width: 1200px) {
      padding: 30px 150px;
    }
    .user-img {
      border: 5px solid #ffffff;
      box-sizing: border-box;
      filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
      border-radius: 50%;
      @media (min-width: 320px) {
        width: 130px;
        height: 130px;
      }
      @media (min-width: 576px) {
        width: 160px;
        height: 160px;
      }
      @media (min-width: 768px) {
      }
      @media (min-width: 992px) {
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
      img {
        border-radius: 50%;
      }
    }
    .text {
      p {
        display: block;
        text-align: center;

        /* Text Color */

        color: #171312;
        @media (min-width: 320px) {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
        }
        @media (min-width: 576px) {
          font-size: 16px;
          line-height: 22px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
    hr {
      size: 1;
      width: 100%;
      color: #171312;
    }
    .user-name {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */

      text-align: center;

      color: #b70a90;
    }
    .user-data {
      font-style: italic;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */

      text-align: center;

      color: #52535d;
    }
  }
  .none {
    padding-top: 100px;
  }
`;

// Steps styled

export const Full_container_Steps = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #f8f8f8;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const Container_Steps = styled.div`
  margin: auto;
  @media (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
    padding: 0 0;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    /* identical to box height */

    text-transform: uppercase;
    text-align: center;

    /* Text Color */

    color: #171312;
    @media (min-width: 320px) {
      font-weight: bold;
      font-size: 15px;
      line-height: 17px;
      margin-top: 30px;
      margin-bottom: 10px;
    }
    @media (min-width: 576px) {
      font-size: 20px;
      line-height: 25px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 44px;
      margin-top: 50px;
      margin-bottom: 30px;
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
`;
export const Button = styled.div`
  @media (min-width: 320px) {
    padding: 25px 0;
  }
  @media (min-width: 576px) {
    padding: 30px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
  a {
    background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-style: normal;
    /* identical to box height */

    text-transform: uppercase;

    /* Text Color */

    color: #171312;
    cursor: pointer;
    &.click {
      transition: 0.4s;
      box-shadow: 0px 1px 0px #967c13;
      transform: translateY(2px);

      @media (min-width: 1200px) {
        box-shadow: 0px 3px 0px #967c13;
      }
    }

    &:hover {
      transition: 0.4s;
      background: linear-gradient(to bottom, #d3af1d 0%, #eec520 100%);
    }
    @media (min-width: 320px) {
      width: 280px;
      height: 30px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      box-shadow: 0px 4px 0px #967c13;
      border-radius: 3px;
    }
    @media (min-width: 576px) {
      width: 380px;
      height: 40px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      box-shadow: 0px 5px 0px #967c13;
      border-radius: 4px;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
`;
export const StepsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) {
    flex-direction: column;
    row-gap: 30px;
    padding: 10px 0;
  }
  @media (min-width: 576px) {
    flex-direction: column;
    row-gap: 30px;
    padding: 10px 0;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    flex-direction: row;
    column-gap: 10px;
    padding: 70px 0;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    column-gap: 20px;
  }
  @media (min-width: 1400px) {
  }
  .item {
    width: 100%;
    display: flex;
    align-items: center;
    @media (min-width: 320px) {
      flex-direction: column;
      row-gap: 20px;
    }
    @media (min-width: 576px) {
      flex-direction: row;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
      flex-direction: column;
      row-gap: 20px;
    }
    @media (min-width: 1200px) {
      flex-direction: column;
    }
    @media (min-width: 1400px) {
    }
    .img-item {
      position: relative;
      width: 66px;
      height: 66px;
      .img-box {
        width: 66px;
        height: 66px;
        border: 4px solid #2c85b8;
        border-radius: 50%;
        img {
          object-fit: cover;
        }
      }
      .img1 {
        img {
          object-position: 0px 100%;
        }
      }
      .img2 {
        img {
          object-position: 0px 0px;
        }
      }
      .img3 {
        img {
          object-position: 0px 50%;
        }
      }
      .img4 {
        img {
          object-position: 0px 66.6%;
        }
      }
      .img5 {
        img {
          object-position: 0px 83.3%;
        }
      }
      .number {
        position: absolute;
        top: -2px;
        right: -2px;
        width: 26px;
        height: 26px;
        background: #fecc00;
        border: 2px solid #f8f8f8;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-style: bold;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        /* identical to box height */

        text-transform: uppercase;
        color: #171312;
      }
    }
    .text {
      width: 100%;
      @media (min-width: 320px) {
        text-align: center;
      }
      @media (min-width: 420px) {
        text-align: start;
        padding: 0 50px;
      }
      @media (min-width: 576px) {
        text-align: start;
        padding: 0 0px;
      }
      @media (min-width: 768px) {
      }
      @media (min-width: 992px) {
        text-align: center;
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
      p {
        font-style: normal;
        text-align: center;

        /* Text Color */

        color: #171312;
        @media (min-width: 320px) {
          text-align: center;
          padding-left: 20px;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
        }
        @media (min-width: 576px) {
          text-align: start;
          padding-left: 20px;
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
          text-align: center;
          padding: 0;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
  }
`;

//  Certificate styled

export const Full_container_Doc = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const Container_Doc = styled.div`
  margin: auto;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }
  h1 {
    font-style: normal;
    /* identical to box height */

    text-transform: uppercase;
    text-align: center;

    /* Text Color */

    color: #171312;
    @media (min-width: 320px) {
      font-weight: bold;
      font-size: 15px;
      line-height: 17px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    @media (min-width: 576px) {
      font-size: 20px;
      line-height: 25px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 44px;
      margin-top: 50px;
      margin-bottom: 30px;
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
  .zoom {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 22222;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    &-content {
      width: 270px;
      height: 390px;
      position: relative;
      @media (min-width: 360px) {
        width: 300px;
        height: 430px;
      }

      @media (min-width: 400px) {
        width: 360px;
        height: 500px;
      }

      @media (min-width: 768px) {
        width: 376px;
        height: 532px;
      }
    }

    .exit {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    .exit-btn {
      position: absolute;
      right: -25px;
      top: -15px;
      z-index: 3232;
      width: 32px;
      height: 32px;
      cursor: pointer;
      @media (min-width: 320px) {
        top: -5px;
        right: -8px;
        width: 20px;
        height: 20px;
      }
      @media (min-width: 400px) {
        top: -10px;
      }

      @media (min-width: 768px) {
        width: 30px;
        height: 30px;
        top: -15px;
        right: -15px;
      }
    }
  }
`;
export const CertificateBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 320px) {
    column-gap: 10px;
    padding: 20px 0px;
    justify-content: start;
    overflow-x: auto;
  }
  @media (min-width: 576px) {
    padding: 42px 0px;
    justify-content: center;
    column-gap: 20px;
    overflow-x: hidden;
  }
  @media (min-width: 768px) {
    column-gap: 10px;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 320px) {
      margin-left: 15px;
    }
    @media (min-width: 576px) {
      margin-left: 0;
    }
    .img-box {
      width: 165.61px;
      height: 234.73px;
      border: 5px solid #353535;
      box-sizing: border-box;
      img {
        object-fit: cover;
      }
    }
    .icon-box {
      position: absolute;
      width: 52.16px;
      height: 52.16px;
      img {
        object-fit: cover;
      }
    }
  }
`;
// Contact styled

export const Full_container_Contact = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const ContactBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 105px;
  background-image: url("/images/Contact/resultbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const ContactHead = styled.div`
  background: #ecc320;
  border: 5px solid #967c13;
  border-left: 0;
  border-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) {
    width: 100%;
    height: 65px;
  }
  @media (min-width: 576px) {
    width: 100%;
    height: 80px;
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 90px;
  }
  @media (min-width: 992px) {
    width: 100%;
    height: 110px;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
  &::before {
    content: "";
    position: absolute;
    background: #ecc320;
    border: 5px solid #967c13;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
    @media (min-width: 320px) {
      width: 65px;
      height: 65px;
      bottom: -69%;
    }
    @media (min-width: 576px) {
      width: 80px;
      height: 80px;
      bottom: -66%;
    }
    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
      bottom: -64%;
    }
    @media (min-width: 992px) {
      width: 103px;
      height: 103px;
      bottom: -58%;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
  h1 {
    font-style: normal;
    text-transform: uppercase;
    text-align: center;
    /* Text Color */

    color: #171312;
    @media (min-width: 320px) {
      font-weight: bold;
      font-size: 15px;
      line-height: 17px;
      padding: 0 0%;
    }
    @media (min-width: 576px) {
      font-size: 20px;
      line-height: 25px;
      padding: 0 0;
    }
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 44px;
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
`;
export const Inputs = styled.div`
  background: #ffffff;
  border: 10px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 70px;
  @media (min-width: 320px) {
    width: 100%;
    padding: 30px 15px;
    border: 5px solid #dfdfdf;
  }
  @media (min-width: 400px) {
    width: 95%;
    padding: 30px 20px;
    border: 10px solid #dfdfdf;
  }
  @media (min-width: 500px) {
    width: 90%;
    padding: 30px 30px;
  }
  @media (min-width: 576px) {
    width: auto;
    padding: 30px 50px;
  }
  @media (min-width: 768px) {
    width: auto;
    border: 10px solid #dfdfdf;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    margin-bottom: 15px;
    text-align: center;
    color: #171312;
    @media (min-width: 320px) {
    }
    @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
  .inputs {
    width: 100%;
    display: grid;
    @media (min-width: 320px) {
      grid-template-columns: auto;
      row-gap: 15px;
    }
    @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      row-gap: 15px;
      column-gap: 70px;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
    .input-box {
      display: flex;
      flex-direction: column;
      @media (min-width: 320px) {
      }
      @media (min-width: 576px) {
      }
      @media (min-width: 768px) {
      }
      @media (min-width: 992px) {
      }
      @media (min-width: 1200px) {
      }
      @media (min-width: 1400px) {
      }
      label {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */

        color: #171312;
        margin-bottom: 2px;
        @media (min-width: 320px) {
        }
        @media (min-width: 576px) {
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
      .input {
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 3px;
        display: flex;
        align-items: center;
        @media (min-width: 320px) {
          width: 100%;
          height: 40px;
        }
        @media (min-width: 576px) {
          width: 400px;
          height: 40px;
        }
        @media (min-width: 768px) {
          width: 450px;
          height: 40px;
        }
        @media (min-width: 992px) {
          width: 316px;
          height: 40px;
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
        .img-box {
          position: absolute;
          width: 20px;
          height: 17px;
          z-index: 2;
          left: 20px;
          @media (min-width: 320px) {
          }
          @media (min-width: 576px) {
          }
          @media (min-width: 768px) {
          }
          @media (min-width: 992px) {
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
        .img1 {
          img {
            object-position: 0 0;
          }
        }
        .img2 {
          img {
            object-position: 0 13.9%;
          }
        }
        .img3 {
          img {
            object-position: 0 42.8%;
          }
        }
        .img4 {
          img {
            object-position: 0 28%;
          }
        }
        .img5 {
          img {
            object-position: 0 56.1%;
          }
        }
        .img6 {
          img {
            object-position: 0 70.8%;
          }
        }
        .img7 {
          img {
            object-position: 0 85%;
          }
        }
        input {
          width: 100%;
          height: 100%;
          border: none;
          padding-left: 45px;
          outline: none;
          @media (min-width: 320px) {
          }
          @media (min-width: 576px) {
          }
          @media (min-width: 768px) {
          }
          @media (min-width: 992px) {
          }
          @media (min-width: 1200px) {
          }
          @media (min-width: 1400px) {
          }
        }
      }
      select {
        border: 1px solid #e0e0e0;
        background-color: transparent;
        box-sizing: border-box;
        border-radius: 3px;
        padding-left: 10px;
        outline: none;
        @media (min-width: 320px) {
          width: 100%;
          height: 40px;
        }
        @media (min-width: 576px) {
          width: 400px;
          height: 40px;
        }
        @media (min-width: 768px) {
          width: 450px;
          height: 40px;
        }
        @media (min-width: 992px) {
          width: 316px;
          height: 40px;
        }
        @media (min-width: 1200px) {
        }
        @media (min-width: 1400px) {
        }
      }
    }
  }
  button {
    margin-top: 25px;
    outline: none;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
    box-shadow: 0px 5px 0px #967c13;
    border-radius: 3px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    /* Text Color */

    color: #171312;
  }
`;

// Footer Button styled

export const Footerbtns = styled.div`
  background-color: #ffffff;
  padding-bottom: 40px;
  .content-title {
    font-weight: bold;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
    color: #171312;
    padding: 35px 0 30px 0;
    margin-top: 0;
    @media (min-width: 360px) {
      font-size: 16px;
    }
    @media (min-width: 400px) {
      font-size: 17px;
      line-height: 19px;
    }
    @media (min-width: 576px) {
      font-size: 22px;
      line-height: 23px;
    }
    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 28px;
    }
    @media (min-width: 992px) {
      font-size: 33px;
      line-height: 33px;
    }
    @media (min-width: 1200px) {
      font-size: 30px;
      line-height: 40px;
      font-weight: bold;
    }
  }

  .content-input {
    display: flex;
    align-items: center;
    border: 2px solid #e0e0e0;
    border-radius: 3px;
    padding: 9px 10px;
    margin-bottom: 15px;
    width: 280px;
    input {
      border: none;
      outline: none;
      width: 100%;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }

    @media (min-width: 992px) {
      margin: 0 20px 0 0;
    }
  }

  .content-btn {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 992px) {
      flex-direction: row;
    }

    button {
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
      color: #171312;
      width: 280px;
      background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
      box-shadow: 0px 3px 0px #967c13;
      border-radius: 4px;
      padding: 10px 0;

      cursor: pointer;
      &.click {
        transition: 0.4s;
        box-shadow: 0px 1px 0px #967c13;
        transform: translateY(2px);

        @media (min-width: 1200px) {
          box-shadow: 0px 3px 0px #967c13;
        }
      }

      &:hover {
        transition: 0.4s;
        background: linear-gradient(to bottom, #d3af1d 0%, #eec520 100%);
      }
    }
  }
`;

// Footer styled
export const Full_container_Footer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #000000d6;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
`;
export const Container_Footer = styled.div`
  margin: auto;
  @media (min-width: 320px) {
    width: 100%;
    padding: 15px;
    padding-top: 40px;
  }
  @media (min-width: 576px) {
    width: 540px;
    padding: 0;
    padding-top: 40px;
  }
  @media (min-width: 768px) {
    width: 720px;
    padding: 0;
    padding-top: 40px;
  }
  @media (min-width: 992px) {
    width: 960px;
    padding: 0;
    padding-top: 70px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1360px;
  }

  .footer-text {
    border-top: 1px solid #ffffff9d;
    border-bottom: 1px solid #ffffff9d;
    @media (min-width: 320px) {
      display: grid;
      row-gap: 20px;
      grid-template-columns: 1fr;
      grid-template-areas: "logo" "title" "item1" "item2";
      padding: 20px 10%;
    }
    @media (min-width: 576px) {
      padding: 20px 0%;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "logo title" "item1 item2";
      row-gap: 30px;
    }
    @media (min-width: 768px) {
      padding: 20px 10%;
    }
    @media (min-width: 992px) {
      padding: 50px 10%;
      align-items: center;
    }
    @media (min-width: 1200px) {
      display: flex;
      flex-direction: row;
      padding: 50px 0;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      grid-area: logo;
      display: flex;
      align-items: center;
      justify-content: center;
      @media(min-width:576px){
        justify-content: flex-start;
      }
      .img-box {
        position: relative;
        width: 150px;
        height: 105px;
      }
    }

    .title {
      grid-area: title;
      align-self: center;
      color: rgb(255, 255, 255);
      font-size: 15px;
      font-weight: 400;
      line-height: 20px;
      .adress-1{
        display: inline;
        @media(min-width:576px){
          display: block;
        }
      }
    }
    .fon-icon {
      color: rgb(255, 255, 255);
      margin-right: 5px;
    }
    .phone,
    .email {
      color: rgb(255, 255, 255);
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-top: 5px;
    }

    .item1 {
      grid-area: item1;
    }
    .item2 {
      grid-area: item2;
    }
  }

  .footer-bottom {
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

// Modal styled

export const SThreeSmallFormSection = styled.div`
  opacity: 0;
  transition: all 0.6s;
  z-index: -1;
  &.active {
    opacity: 1;
    z-index: 100000;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.8);

  .icon {
    position: relative;
    width: 20px;
    height: 17px;
  }
  .icon1 {
    img {
      object-position: 0 0;
    }
  }
  .icon2 {
    img {
      object-position: 0 28%;
    }
  }
  .close-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .form-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 90%;
    padding: 25px 15px;
    max-width: 620px;

    @media (min-width: 576px) {
      padding: 25px 30px;
    }
    .close-btn {
      position: absolute;
      right: -10px;
      top: -10px;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    color: #000000;
    text-align: center;
    margin-bottom: 25px;
  }

  .item-box {
    margin-top: 15px;
  }
  label {
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }

  .input-box {
    display: flex;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    padding: 9px 10px;
    &.error-class {
      border-color: red;
    }
    input {
      border: none;
      outline: none;
      width: 80%;
    }
  }

  .submit-box {
    text-align: center;
    margin-top: 20px;

    button {
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
      color: #171312;
      width: 100%;
      background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
      box-shadow: 0px 3px 0px #967c13;
      border-radius: 3px;
      padding: 10px 0;

      cursor: pointer;
      &.click {
        transition: 0.4s;
        box-shadow: 0px 1px 0px #967c13;
        transform: translateY(2px);

        @media (min-width: 1200px) {
          box-shadow: 0px 3px 0px #967c13;
        }
      }

      &:hover {
        transition: 0.4s;
        background: linear-gradient(to bottom, #d3af1d 0%, #eec520 100%);
      }
    }
  }
`;

// Nav Small Form Section
export const NavSmallFormSection = styled.div`
  opacity: 0;
  transition: all 0.6s;
  z-index: -1;
  &.active {
    opacity: 1;
    z-index: 4564646;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.8);

  .icon {
    position: relative;
    width: 20px;
    height: 17px;
  }
  .icon1 {
    img {
      object-position: 0 0;
    }
  }
  .icon2 {
    img {
      object-position: 0 13.9%;
    }
  }
  .close-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .form-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 90%;
    padding: 25px 15px;
    max-width: 620px;

    @media (min-width: 576px) {
      padding: 25px 30px;
    }
    .close-btn {
      position: absolute;
      right: -10px;
      top: -10px;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  .title {
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
    color: #000000;
    text-align: center;
    margin-bottom: 25px;
  }

  .item-box {
    margin-top: 15px;
  }
  label {
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }

  .input-box {
    display: flex;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    padding: 9px 10px;
    &.error-class {
      border-color: red;
    }

    input {
      border: none;
      outline: none;
      width: 80%;
    }
  }

  .submit-box {
    text-align: center;
    margin-top: 20px;

    button {
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
      color: #171312;
      width: 100%;
      background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
      box-shadow: 0px 3px 0px #967c13;
      border-radius: 6px;
      padding: 10px 0;

      cursor: pointer;
      &.click {
        transition: 0.4s;
        box-shadow: 0px 1px 0px #967c13;
        transform: translateY(2px);

        @media (min-width: 1200px) {
          box-shadow: 0px 3px 0px #967c13;
        }
      }

      &:hover {
        transition: 0.4s;
        background: linear-gradient(to bottom, #d3af1d 0%, #eec520 100%);
      }
    }
  }
`;

export const SectionEight = styled.div`
  background: url("/form/bg.webp");
  background-size: cover;
  background-position: center;
  padding-bottom: 35px;

  .title {
    font-family: UniSansHeavy, sans-serif;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    text-transform: uppercase;
    color: #171312;
    background: #ecc320;
    border: 2px solid #967c13;
    text-align: center;
    position: relative;
    padding: 6px 0;
    border-left: none;
    border-right: none;
    z-index: 1;

    @media (min-width: 576px) {
      font-size: 20px;
      line-height: 20px;
      padding: 10px 0;
    }

    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 25px;
      padding: 15px 0;
    }

    @media (min-width: 992px) {
      font-size: 30px;
      line-height: 30px;
      padding: 27px 0;
    }

    @media (min-width: 1200px) {
      font-size: 34px;
      line-height: 34px;
      padding: 33px 0;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: -15px;
      width: 25px;
      height: 25px;
      background: #ecc320;
      border: 2px solid #967c13;
      left: 50%;
      border-right: 0;
      border-top: 0;
      transform: translateX(-50%) rotate(-45deg);
      z-index: -1;

      @media (min-width: 576px) {
        bottom: -17px;
        width: 30px;
        height: 30px;
      }

      @media (min-width: 768px) {
        bottom: -25px;
        width: 45px;
        height: 45px;
      }

      @media (min-width: 992px) {
        bottom: -32px;
        width: 60px;
        height: 60px;
      }

      @media (min-width: 1200px) {
        bottom: -40px;
        width: 75px;
        height: 75px;
      }
    }
  }

  .form {
    margin: 0 auto;
    margin-top: 46px;
    width: 95%;
    background: #fff;
    border: 5px solid #dfdfdf;
    padding: 25px 15px 35px 15px;
    border-radius: 8px;
    @media (min-width: 992px) {
      width: 794px;
      margin-top: 73px;
    }

    &-title {
      font-family: Ubuntu;
      font-weight: bold;
      font-size: 15px;
      line-height: 17px;
      color: #000000;
      text-align: center;
      padding-bottom: 25px;

      @media (min-width: 360px) {
        font-size: 16px;
        line-height: 18px;
      }
      @media (min-width: 400px) {
        font-size: 17px;
      }
      @media (min-width: 576px) {
        font-size: 18px;
        line-height: 21px;
      }
    }

    .form-items {
      @media (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
      }

      @media (min-width: 1200px) {
        grid-column-gap: 70px;
      }
    }

    label {
      font-family: Ubuntu;
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
      color: #000000;
    }

    .input-box {
      display: flex;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      padding: 9px 10px;
      &.error-class {
        border-color: red;
      }
      &.last-input-box {
        select {
          width: 100%;
        }
      }
      input,
      select {
        border: none;
        outline: none;
        width: 80%;
      }
    }

    .item-box {
      margin-bottom: 15px;
    }

    button {
      background: linear-gradient(180deg, #eec520 0%, #d3af1d 100%), #eec520;
      box-shadow: 0px 3px 0px #967c13;
      border-radius: 3px;
      font-family: Ubuntu;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
      color: #171312;
      padding: 10px 0 9px 0;
      width: 100%;
      outline: none;
      border: none;
      margin-top: 15px;
      cursor: pointer;
      &.click {
        transition: 0.4s;
        box-shadow: 0px 1px 0px #967c13;
        transform: translateY(2px);

        @media (min-width: 1200px) {
          box-shadow: 0px 3px 0px #967c13;
        }
      }

      &:hover {
        transition: 0.4s;
        background: linear-gradient(to bottom, #d3af1d 0%, #eec520 100%);
      }
    }
  }

  .icon {
    position: relative;
    width: 20px;
    height: 17px;
  }
`;
