import React, { useEffect } from "react";
import banner from "../../../assets/JoinUspage/yellow-banner-img/projectfund.png";
import timeline from "../../../assets/JoinUspage/timelinebg.png";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./UAS.css";
import i18next from "i18next";

const UAS = () => {
  useEffect(() => {
    i18next.changeLanguage("en");
  }, []);
  return (
    <>
      <Navbar />
      <div className="uas-wrapper">
        <div className="volunteering-header-sect projectfunds-header-sect">
          <h1>UAS</h1>
          <a href="#about-internship" className="volunteering-arrow">
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
            <span class="m_scroll_arrows quad"></span>
          </a>
        </div>
        <div className="projectfund-quotes-wrapper">
          <div>
            <h2>
              <span style={{ color: "#FBBA16", fontWeight: 600 }}>
                UNNATHI{" "}
              </span>{" "}
              ADMINISTRATIVE
            </h2>
            <h1 style={{ color: "#EC1D25", fontWeight: 600 }}>SERVICE</h1>
          </div>
          <div>
            <p>
              The Unnathi Administrative Services is where your expertise
              collaborates with Unnathi’s vision of empowering targeted
              communities.
            </p>
          </div>
        </div>
        {/* card section starts*/}
        <div className="internship-page-card-wrapper" id="about-internship">
          <h1>
            <span>Why</span> UAS?
          </h1>
          <div className="internship-cards-wrapper-div uas-cards">
            <div className="internship-individual-cards-wrapper">
              <div className="internship-hover-display-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533 210"
                  fill="none"
                >
                  <path d="M0.525265 319.954C159.057 122.433 486.814 -187.932 529.58 150.771C572.346 489.475 194.696 404.686 0.525265 319.954Z" />
                </svg>
              </div>
              <div className="internship-individual-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="151"
                  height="152"
                  viewBox="0 0 151 152"
                  fill="none"
                >
                  <path
                    d="M43.7858 68.6157C27.9413 67.4972 12.433 79.3498 6.48682 86.686C10.0391 87.2266 17.3753 89.0027 18.302 91.7827C19.4604 95.2578 34.0556 112.633 48.4192 114.023C59.91 115.135 67.2617 104.447 69.5012 98.9645C74.3662 78.3458 63.4777 70.0058 43.7858 68.6157Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M91.2782 14.1731C116.113 3.60894 139.311 9.77137 147.806 14.1731C142.246 20.9688 131.134 30.6218 128.577 45.6804C126.02 60.739 113.287 79.041 95.2166 78.8093C80.7603 78.624 72.0495 68.693 69.5012 63.7507C64.2451 53.5572 66.4431 24.7373 91.2782 14.1731Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M82.4746 76.261V147.384"
                    stroke="#CCCCCC"
                    stroke-width="8.34013"
                    stroke-linecap="round"
                  />
                  <path
                    d="M68.3428 101.745C71.7092 104.945 79.295 113.133 82.7063 120.278"
                    stroke="#CCCCCC"
                    stroke-width="8.34013"
                    stroke-linecap="round"
                  />
                  <path
                    opacity="0.927"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M109.301 0.131076C122.879 -0.566252 136.006 1.51878 148.685 6.38618C150.211 7.50375 150.751 8.97115 150.307 10.7879C146.33 14.3 142.469 18.0068 138.723 21.9081C137.004 24.4968 135.228 27.0451 133.395 29.5532C129.188 31.0429 127.257 29.5755 127.603 25.1515C130.452 19.6845 134.235 14.9742 138.955 11.0196C123.379 6.09381 107.934 6.40286 92.621 11.9463C76.411 19.3463 68.3025 31.9334 68.2956 49.7085C69.4229 55.3655 72.2029 59.9989 76.6357 63.6088C78.0809 52.3023 82.7912 42.6495 90.7676 34.65C92.0779 33.6084 93.468 32.6817 94.9377 31.8699C99.3436 31.1772 100.965 32.9537 99.8028 37.1983C89.5995 44.9384 84.2711 55.2862 83.8175 68.2422C98.3863 72.1189 109.429 67.4855 116.946 54.3419C118.416 50.859 119.883 47.384 121.348 43.9168C124.648 42.3484 126.81 43.275 127.835 46.6968C125.073 57.9467 118.896 66.7502 109.301 73.1072C100.985 77.4432 92.4129 78.2925 83.5858 75.6556C83.4315 98.0503 83.2768 120.445 83.1225 142.84C81.2719 146.159 78.9552 146.468 76.1724 143.767C76.0181 136.044 75.8633 128.322 75.709 120.6C73.6611 114.029 70.4177 108.16 65.9789 102.993C60.1658 110.029 52.675 113.195 43.5069 112.491C37.2054 111.886 31.6453 109.569 26.8266 105.541C21.9305 100.378 17.1428 95.1266 12.463 89.7875C8.92867 87.3726 5.06733 85.674 0.879514 84.6908C0.0238622 83.4958 -0.207808 82.1832 0.184502 80.7524C5.8974 72.7301 13.3879 66.9383 22.6565 63.3771C32.3473 59.5619 42.2317 58.9443 52.3103 61.5237C68.3748 67.4716 74.3983 78.8235 70.3806 95.5793C72.1506 98.1865 73.9266 100.812 75.709 103.456C76.0181 93.1083 76.0181 82.76 75.709 72.4122C62.2467 63.2288 57.7676 50.7186 62.2722 34.8816C68.7742 16.9531 81.3618 5.90986 100.034 1.75277C103.18 1.15182 106.269 0.611097 109.301 0.131076ZM36.0934 67.3155C26.3809 69.0827 17.8864 73.3301 10.6097 80.0574C13.1567 81.0976 15.4734 82.4876 17.5598 84.2274C22.3642 89.1856 26.9976 94.2824 31.46 99.5177C35.6708 103.05 40.5359 104.98 46.0552 105.309C52.2469 105.034 57.1119 102.408 60.6505 97.4326C53.9686 91.1562 46.0918 87.0635 37.0201 85.1541C34.9221 82.4273 35.3854 80.2654 38.4101 78.6673C47.9776 79.8595 56.3951 83.6436 63.6622 90.0192C65.106 82.4718 62.7119 76.3715 56.4804 71.7172C50.2003 68.0179 43.4049 66.5505 36.0934 67.3155Z"
                    fill="black"
                  />
                </svg>
                <h3>
                  Fullfillment
                  <br></br>& Growth
                </h3>
                <p>
                  UAS officers receive unparalleled experience and job
                  satisfaction.
                </p>
              </div>
            </div>{" "}
            <div className="internship-individual-cards-wrapper">
              <div className="internship-hover-display-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533 210"
                  fill="none"
                >
                  <path d="M0.525265 319.954C159.057 122.433 486.814 -187.932 529.58 150.771C572.346 489.475 194.696 404.686 0.525265 319.954Z" />
                </svg>
              </div>
              <div className="internship-individual-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="105"
                  height="133"
                  viewBox="0 0 105 133"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M32.0244 12.2234L10.9937 33.2541V114.373L32.0244 133H82.4982L104.731 111.969V33.2541L82.4982 12.2234H32.0244Z"
                    fill="black"
                  />
                  <path
                    opacity="0.869"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3022 0.0722792C42.0509 -0.120518 59.795 0.0723948 77.5356 0.650903C85.7937 7.7505 93.7012 15.2726 101.259 23.2172C102.031 50.6055 102.031 77.9932 101.259 105.382C93.7012 113.326 85.7937 120.848 77.5356 127.948C59.7915 128.72 42.0466 128.72 24.3022 127.948C16.0441 120.848 8.13629 113.326 0.578653 105.382C-0.192884 77.9932 -0.192884 50.6055 0.578653 23.2172C8.36519 15.236 16.2731 7.52102 24.3022 0.0722792ZM32.403 9.33026C44.5448 7.98924 56.8892 7.79633 69.4349 8.75164C68.2776 10.6804 67.1204 12.6091 65.9631 14.5379C55.9333 15.3094 45.9042 15.3094 35.8747 14.5379C34.8339 12.6266 33.6766 10.8907 32.403 9.33026ZM23.145 12.802C25.9312 13.7449 26.8955 15.6736 26.0381 18.5882C23.145 21.4814 20.2519 24.3745 17.3587 27.2676C15.1373 27.5164 13.2085 26.745 11.5725 24.9531C15.6662 21.0542 19.5236 17.0039 23.145 12.802ZM76.3784 12.802C81.476 16.1532 86.105 20.2035 90.2653 24.9531C88.4357 25.7707 86.6999 26.7351 85.0577 27.8462C81.9713 24.7602 78.8861 21.6743 75.7997 18.5882C75.3554 16.6249 75.5475 14.6962 76.3784 12.802ZM32.403 23.2172C44.3674 23.0245 56.3256 23.2175 68.2776 23.7959C71.5978 27.5038 75.2616 30.7826 79.2715 33.6325C80.0434 53.6914 80.0434 73.7508 79.2715 93.8093C75.6065 97.4743 71.9426 101.138 68.2776 104.803C56.7052 105.575 45.1327 105.575 33.5602 104.803C29.8956 101.138 26.231 97.4743 22.5664 93.8093C21.7948 73.7508 21.7948 53.6914 22.5664 33.6325C26.082 30.3119 29.3608 26.8401 32.403 23.2172ZM8.10076 33.6325C10.0337 33.9232 11.7696 34.6946 13.3084 35.947C14.2722 54.8604 14.0794 73.7623 12.7298 92.6521C11.2854 93.277 9.93523 94.0489 8.67939 94.9666C8.10088 74.525 7.90796 54.0808 8.10076 33.6325ZM91.4226 33.6325C92.964 43.4387 93.7348 53.6611 93.7371 64.2995C93.5438 74.5215 93.3517 84.7446 93.1585 94.9666C91.9028 94.0489 90.5523 93.277 89.1081 92.6521C87.7587 73.7623 87.5655 54.8604 88.5295 35.947C89.6809 35.2921 90.6449 34.5205 91.4226 33.6325ZM15.0442 100.753C19.1721 103.133 22.8368 106.218 26.0381 110.011C26.7602 112.284 26.1816 114.213 24.3022 115.797C19.8837 111.957 15.6405 107.907 11.5725 103.646C12.8116 102.66 13.9688 101.696 15.0442 100.753ZM84.4791 100.753C86.7045 101.094 88.6336 102.058 90.2653 103.646C86.1976 107.907 81.954 111.957 77.5356 115.797C75.6562 114.213 75.0776 112.284 75.7997 110.011C78.9301 107.076 81.8232 103.99 84.4791 100.753ZM35.8747 113.483C45.9116 113.29 55.9414 113.483 65.9631 114.061C66.8808 115.317 67.6527 116.667 68.2776 118.112C56.7052 119.654 45.1327 119.654 33.5602 118.112C34.347 116.538 35.1186 114.995 35.8747 113.483Z"
                    fill="black"
                  />
                  <path
                    opacity="0.857"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M62.4907 44.0476C64.767 43.7705 66.8894 44.1562 68.8555 45.2048C69.6274 57.9345 69.6274 70.6642 68.8555 83.394C66.541 84.9366 64.2265 84.9366 61.912 83.394C60.9747 70.1909 61.1679 57.0749 62.4907 44.0476Z"
                    fill="black"
                  />
                </svg>
                <h3>
                  Priceless
                  <br></br>
                  exposure
                </h3>
                <p>
                  Gets an opportunity to come across people from different walks
                  of life thereby opening boundless era of opportunities.
                </p>
              </div>
            </div>{" "}
            <div className="internship-individual-cards-wrapper">
              <div className="internship-hover-display-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533 210"
                  fill="none"
                >
                  <path d="M0.525265 319.954C159.057 122.433 486.814 -187.932 529.58 150.771C572.346 489.475 194.696 404.686 0.525265 319.954Z" />
                </svg>
              </div>
              <div className="internship-individual-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="142"
                  height="147"
                  viewBox="0 0 142 147"
                  fill="none"
                >
                  <path
                    opacity="0.901"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M67.995 2.56595C77.26 1.68941 81.5366 5.84402 80.8254 15.0298C77.9668 20.8722 73.4453 22.7051 67.2618 20.5285C62.1774 17.1925 60.8333 12.6713 63.2294 6.96495C64.7417 5.32698 66.3303 3.86064 67.995 2.56595Z"
                    fill="black"
                  />
                  <circle cx="71.6607" cy="79.1822" r="67.818" fill="#CCCCCC" />
                  <circle
                    cx="71.6607"
                    cy="12.0973"
                    r="12.0973"
                    fill="#CCCCCC"
                  />
                  <circle
                    cx="119.316"
                    cy="131.603"
                    r="12.0973"
                    fill="#CCCCCC"
                  />
                  <circle
                    cx="25.4713"
                    cy="121.339"
                    r="12.0973"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M47.0997 26.0272L41.2344 9.16431L55.8977 13.9299L47.0997 26.0272Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M128.848 120.239L126.648 105.209L141.312 111.808L128.848 120.239Z"
                    fill="#CCCCCC"
                  />
                  <path
                    opacity="0.838"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38.6685 1.83276C43.7832 2.76389 48.6709 4.35237 53.3318 6.59835C50.4888 10.6957 47.5561 14.7281 44.5338 18.6956C43.4648 16.5897 42.6094 14.3902 41.9677 12.0971C14.4984 25.2405 2.5233 46.9911 6.04253 77.349C7.74355 85.6374 11.0428 93.2132 15.9403 100.077C14.881 101.223 13.659 102.2 12.2744 103.01C6.46916 96.2574 2.68113 88.4367 0.910358 79.5485C-3.68929 46.0982 9.14111 22.0259 39.4016 7.33152C39.737 7.02799 39.9813 6.6614 40.1348 6.23177C39.4954 4.80238 39.0066 3.33605 38.6685 1.83276Z"
                    fill="black"
                  />
                  <path
                    opacity="0.843"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M82.6585 4.03223C111.145 11.8691 128.863 30.1983 135.813 59.0198C138.868 73.4485 138.013 87.6228 133.247 101.543C134.958 102.521 136.669 103.499 138.379 104.476C134.463 107.284 130.431 109.972 126.282 112.541C124.376 107.85 123.399 102.962 123.349 97.8776C124.88 98.47 126.346 99.2032 127.748 100.077C137.51 69.8384 130.789 43.8111 107.586 21.9948C100.219 15.9891 91.9103 11.7122 82.6585 9.1644C81.8703 7.46997 81.8703 5.7592 82.6585 4.03223Z"
                    fill="black"
                  />
                  <path
                    opacity="0.841"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M59.929 24.5611C87.4535 24.3499 104.683 37.5469 111.617 64.1521C114.752 94.1826 102.165 114.345 73.8591 124.638C65.3805 126.654 56.8269 127.509 48.1983 127.204C47.6062 128.982 46.873 130.693 45.9988 132.337C42.8295 128.455 39.6525 124.545 36.4676 120.606C40.9533 118.825 45.4745 117.115 50.0312 115.474C50.3978 115.718 50.7644 115.963 51.1309 116.207C50.696 117.587 50.2072 118.931 49.6646 120.239C71.2982 123.539 88.2835 116.085 100.62 97.8778C111.596 76.3117 108.541 56.8825 91.4551 39.591C74.2858 26.8046 56.934 26.5602 39.4003 38.8578C25.7893 51.1847 22.2457 65.9704 28.7694 83.2145C39.0666 101.475 54.0965 106.973 73.8591 99.7107C76.8937 97.7759 79.8264 95.6988 82.6571 93.4788C83.9886 94.4429 85.2108 95.5427 86.323 96.778C74.8445 107.895 61.4034 111.072 45.9988 106.309C26.8026 97.1314 18.3712 81.8574 20.7045 60.4863C25.7812 39.6941 38.856 27.7191 59.929 24.5611Z"
                    fill="black"
                  />
                  <path
                    opacity="0.917"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M59.1973 42.8904C62.3744 42.8904 65.5515 42.8904 68.7285 42.8904C68.0825 47.4975 70.0379 49.5748 74.5938 49.1223C75.4495 48.2669 76.3043 47.4116 77.1599 46.5562C79.4819 48.8779 81.8031 51.1996 84.125 53.5213C80.9856 55.5296 80.4973 57.9735 82.6587 60.853C84.1052 61.2163 85.5716 61.3384 87.0577 61.2196C87.0577 64.6412 87.0577 68.0622 87.0577 71.4839C82.6968 70.5916 80.8639 72.3028 81.5589 76.6161C82.4145 77.4717 83.2694 78.3265 84.125 79.1822C81.7921 81.6375 79.3484 83.9595 76.7934 86.1472C71.8342 81.9029 69.1457 83.1244 68.7285 89.8131C65.5515 89.8131 62.3744 89.8131 59.1973 89.8131C60.2083 86.0101 58.8641 83.8106 55.1649 83.2146C53.6846 84.4925 52.0961 85.3481 50.3993 85.7807C48.31 83.8143 46.3549 81.7365 44.534 79.5487C45.664 78.2994 46.6416 76.9555 47.4667 75.5163C46.8704 71.8168 44.6709 70.4729 40.8682 71.4839C40.8682 68.0622 40.8682 64.6412 40.8682 61.2196C42.5961 61.3393 44.3069 61.2171 46.0003 60.853C48.2373 58.3498 47.8707 56.2725 44.9006 54.6211C44.4118 53.8879 44.4118 53.1547 44.9006 52.4216C46.8672 50.3322 48.9445 48.3771 51.1325 46.5562C56.4727 51.0953 59.161 49.8733 59.1973 42.8904ZM62.13 57.5537C56.7956 59.6664 54.7182 63.5767 55.8981 69.2844C60.0802 76.1659 65.2124 76.8991 71.2946 71.4839C74.5279 62.8113 71.4735 58.1678 62.13 57.5537Z"
                    fill="black"
                  />
                  <path
                    opacity="0.713"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M89.2564 81.748C90.9874 81.8756 92.6979 82.1198 94.3885 82.4812C94.2492 88.499 92.0497 89.5988 87.79 85.7805C88.3912 84.4608 88.8795 83.1161 89.2564 81.748Z"
                    fill="black"
                  />
                  <path
                    opacity="0.913"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.8727 103.01C29.0059 101.778 33.2827 106.177 31.7031 116.207C26.6627 123.325 21.0418 123.814 14.8403 117.674C12.3421 111.588 13.6862 106.7 18.8727 103.01Z"
                    fill="black"
                  />
                  <path
                    opacity="0.909"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M114.918 114.008C120.865 113.73 124.652 116.418 126.282 122.072C126.283 130.617 122.006 134.161 113.451 132.703C110.641 131.848 108.808 130.015 107.953 127.205C106.259 120.567 108.581 116.168 114.918 114.008Z"
                    fill="black"
                  />
                </svg>
                <h3>
                  Lasting
                  <br></br>
                  impact
                </h3>
                <p>
                  Create monumental changes in the lives of countless citizens.
                </p>
              </div>
            </div>{" "}
            <div className="internship-individual-cards-wrapper">
              <div className="internship-hover-display-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533 210"
                  fill="none"
                >
                  <path d="M0.525265 319.954C159.057 122.433 486.814 -187.932 529.58 150.771C572.346 489.475 194.696 404.686 0.525265 319.954Z" />
                </svg>
              </div>
              <div className="internship-individual-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="144"
                  viewBox="0 0 72 144"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M42.4156 7.69214H26.3322L18.2905 16.0835L26.3322 30.2439L8.15088 124.472L35.4228 143.353L60.7718 124.472L57.7998 107.689L71.0862 98.0742L43.8142 30.2439L50.807 16.0835L42.4156 7.69214Z"
                    fill="black"
                  />
                  <path
                    opacity="0.951"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.782 0C26.1903 0 32.5985 0 39.0068 0C42.5268 3.28791 45.9165 6.72424 49.1764 10.3089C49.3622 10.959 49.3622 11.6092 49.1764 12.2593C46.7616 16.7172 44.3471 21.1751 41.9323 25.633C41.7464 26.0974 41.7464 26.5617 41.9323 27.0261C51.0983 49.1393 60.1535 71.2896 69.0977 93.4769C68.8247 94.8717 68.0816 95.9862 66.8687 96.8204C63.2121 99.6406 59.6366 102.566 56.1419 105.597C56.9301 110.702 57.8125 115.81 58.7888 120.921C58.7155 121.625 58.4834 122.275 58.0922 122.871C48.9008 129.437 39.7529 136.031 30.6482 142.653C29.8123 142.653 28.9765 142.653 28.1406 142.653C19.1824 136.16 10.1735 129.706 1.11448 123.289C0.514889 122.614 0.143489 121.825 0 120.921C5.80699 89.4676 11.658 58.0301 17.553 26.6082C14.6025 21.6822 11.9093 16.6206 9.47307 11.4234C9.62241 10.7431 9.8545 10.093 10.1696 9.47307C13.3445 6.2515 16.5486 3.09379 19.782 0ZM22.2896 5.5724C27.027 5.52598 31.7635 5.57242 36.4992 5.71171C38.4961 7.70849 40.4926 9.70525 42.4895 11.702C40.6958 15.4202 38.792 19.1351 36.7778 22.8468C31.8841 23.2159 27.0083 23.2159 22.1503 22.8468C20.118 19.2006 18.1214 15.5321 16.1599 11.8413C18.2596 9.78836 20.3027 7.69871 22.2896 5.5724ZM22.8468 28.9765C27.212 28.9765 31.5768 28.9765 35.9419 28.9765C35.8823 29.4345 35.9754 29.8524 36.2206 30.2302C30.7875 35.6633 25.3544 41.0964 19.9213 46.5295C20.894 40.6933 21.8691 34.8422 22.8468 28.9765ZM37.0564 37.6137C37.3766 37.6947 37.5624 37.9268 37.6137 38.3102C38.2665 41.8097 38.87 45.2924 39.4247 48.7585C31.2519 56.9312 23.0789 65.1042 14.9062 73.277C15.7799 67.7926 16.8013 62.313 17.971 56.8384C24.389 50.467 30.7507 44.0587 37.0564 37.6137ZM46.5295 54.0522C51.925 66.7957 57.2188 79.6123 62.4108 92.5018C59.986 94.787 57.4319 96.9229 54.7488 98.91C51.9545 83.964 49.2148 69.0113 46.5295 54.0522ZM40.6785 55.724C41.825 60.67 42.7074 65.6852 43.3254 70.7694C31.902 82.1928 20.4786 93.6162 9.05514 105.04C10.2616 97.8967 11.5616 90.7453 12.9558 83.5859C22.2528 74.3355 31.4938 65.048 40.6785 55.724ZM44.5792 77.7349C44.7803 77.8514 44.9196 78.0369 44.9971 78.2922C45.702 81.8131 46.2592 85.3423 46.6688 88.8797C35.0596 100.489 23.4506 112.098 11.8413 123.707C10.2014 122.346 8.48314 121.092 6.68687 119.946C6.52054 119.65 6.42776 119.325 6.40825 118.971C6.62251 117.76 6.8546 116.552 7.1048 115.349C19.6524 102.847 32.1438 90.3096 44.5792 77.7349ZM47.9226 95.8452C49.5851 103.647 51.1641 111.495 52.6591 119.389C44.982 125.115 37.2272 130.734 29.3944 136.245C25.2421 133.124 21.0166 130.106 16.7172 127.19C27.1752 116.778 37.5769 106.33 47.9226 95.8452Z"
                    fill="black"
                  />
                </svg>
                <h3>
                  INTERACTION WITH
                  <br></br>
                  PROFFESSIONALS
                </h3>
                <p>
                  Reporting directly to the CEO, a senior IAS officer and being
                  part of an organization that vouches for speed and efficacy.
                </p>
              </div>
            </div>
            <div className="internship-individual-cards-wrapper">
              <div className="internship-hover-display-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533 210"
                  fill="none"
                >
                  <path d="M0.525265 319.954C159.057 122.433 486.814 -187.932 529.58 150.771C572.346 489.475 194.696 404.686 0.525265 319.954Z" />
                </svg>
              </div>
              <div className="internship-individual-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="130"
                  viewBox="0 0 118 130"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M44.5114 90.5892C48.8871 95.2774 47.4806 105.279 50.4498 107.311C57.7947 107.311 72.0782 107.498 73.5785 106.373C75.0787 105.248 77.2249 94.9128 77.9542 90.5892C90.2061 75.5868 92.9565 68.3983 92.0188 56.5214C81.5485 29.486 68.2651 32.1426 58.8887 31.2049C49.5122 30.2673 34.041 40.8939 30.4467 56.5214C26.8524 72.1488 40.1357 85.901 44.5114 90.5892Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M59.8304 2.7549C61.4913 2.51727 62.6893 3.14237 63.4248 4.63019C63.6332 8.48495 63.6332 12.3397 63.4248 16.1945C61.8079 18.5499 60.0367 18.6541 58.1114 16.507C57.903 12.4439 57.903 8.38078 58.1114 4.31764C58.534 3.61472 59.1069 3.09383 59.8304 2.7549Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.3878 19.0072C22.2539 18.9824 23.0872 19.1387 23.8882 19.476C26.5149 22.0645 29.1716 24.617 31.8582 27.1334C32.9028 29.7335 32.0695 31.2963 29.3578 31.8217C28.7431 31.8086 28.1698 31.6523 27.6388 31.3529C25.2853 28.8947 22.8368 26.5505 20.2939 24.3205C18.8199 22.1917 19.1847 20.4206 21.3878 19.0072Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M98.5868 19.3198C102.115 19.3976 103.209 21.0645 101.869 24.3206C99.4298 26.4466 97.0856 28.6866 94.8362 31.0404C92.2268 32.4934 90.5599 31.8165 89.8354 29.0088C89.8401 28.3419 89.9964 27.7168 90.3043 27.1335C92.9381 24.342 95.6989 21.7374 98.5868 19.3198Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.07258 57.451C10.2412 57.3988 14.4085 57.451 18.5745 57.6072C20.3232 58.343 20.8961 59.6454 20.2935 61.5141C20.0482 62.0723 19.6838 62.5411 19.1996 62.9206C14.7198 63.129 10.2399 63.129 5.76003 62.9206C4.16322 61.8685 3.79857 60.4621 4.66611 58.7012C5.10268 58.2105 5.5715 57.7935 6.07258 57.451Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M103.275 57.4509C107.565 57.3174 111.837 57.4737 116.09 57.9197C117.247 58.9811 117.611 60.2835 117.184 61.8266C116.701 62.4135 116.128 62.8824 115.465 63.233C111.193 63.4415 106.922 63.4415 102.65 63.233C100.972 62.2229 100.504 60.8164 101.244 59.0136C101.808 58.2866 102.485 57.7659 103.275 57.4509Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.1387 87.1432C33.3267 86.9526 34.5247 88.4112 33.733 91.5189C30.9817 94.5831 28.1165 97.5524 25.1379 100.427C22.5522 101.478 20.9895 100.645 20.4497 97.9262C20.5775 97.2007 20.8382 96.5238 21.2311 95.8946C24.1675 92.9057 27.1367 89.9887 30.1387 87.1432Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M89.5227 87.143C90.6576 87.0367 91.6993 87.2974 92.6482 87.9243C95.0867 90.6757 97.6393 93.3324 100.306 95.8943C101.783 98.5629 101.054 100.23 98.1178 100.895C97.503 100.882 96.9298 100.726 96.3988 100.426C93.5243 97.6562 90.7632 94.791 88.1162 91.8312C87.1545 89.7952 87.6234 88.2325 89.5227 87.143Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.5794 112.772C56.7063 112.72 64.8326 112.772 72.9582 112.928C75.1123 113.806 75.6852 115.316 74.6773 117.46C74.2978 117.944 73.829 118.309 73.2708 118.554C65.0404 118.763 56.8098 118.763 48.5794 118.554C46.4254 117.677 45.8525 116.166 46.8604 114.022C47.3292 113.407 47.9021 112.99 48.5794 112.772Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M51.0795 124.024C57.5396 123.972 63.999 124.024 70.4575 124.18C72.0534 124.498 72.887 125.488 72.9579 127.149C72.7748 128.516 72.0453 129.401 70.7701 129.806C64.1025 130.015 57.4346 130.015 50.767 129.806C48.9095 128.922 48.3366 127.515 49.048 125.587C49.6121 124.86 50.2894 124.339 51.0795 124.024Z"
                    fill="black"
                  />
                  <path
                    opacity="0.938"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M55.6224 0.04909C57.2833 -0.188541 58.4813 0.436557 59.2168 1.92438C59.4252 5.77914 59.4252 9.63393 59.2168 13.4887C57.5999 15.8441 55.8287 15.9483 53.9034 13.8012C53.695 9.7381 53.695 5.67497 53.9034 1.61183C54.326 0.908912 54.8989 0.388018 55.6224 0.04909Z"
                    fill="black"
                  />
                  <path
                    opacity="0.912"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.1794 16.3016C18.0454 16.2768 18.8787 16.4331 19.6797 16.7704C22.3064 19.3589 24.9631 21.9114 27.6497 24.4279C28.6943 27.028 27.861 28.5907 25.1493 29.1161C24.5346 29.103 23.9613 28.9467 23.4303 28.6473C21.0768 26.1891 18.6283 23.845 16.0854 21.6149C14.6115 19.4861 14.9762 17.715 17.1794 16.3016Z"
                    fill="black"
                  />
                  <path
                    opacity="0.906"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M94.3788 16.614C97.9075 16.6917 99.0014 18.3587 97.6606 21.6148C95.2217 23.7407 92.8776 25.9808 90.6282 28.3346C88.0188 29.7876 86.3519 29.1106 85.6274 26.303C85.6321 25.636 85.7884 25.0109 86.0963 24.4277C88.7301 21.6361 91.4909 19.0315 94.3788 16.614Z"
                    fill="black"
                  />
                  <path
                    opacity="0.933"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M52.8099 23.1778C69.4525 22.4564 81.1731 29.645 87.9717 44.7436C92.5389 59.2921 89.4135 71.8982 78.5952 82.562C76.7384 85.2346 75.3838 88.1519 74.5321 91.3134C74.0933 94.4857 73.4682 97.6112 72.6568 100.69C71.6041 102.472 70.0936 103.671 68.1248 104.284C60.8365 104.722 53.5438 104.826 46.2464 104.597C43.4141 104.16 41.3825 102.65 40.1517 100.065C39.7895 93.5606 37.8101 87.6222 34.2133 82.2495C23.1781 71.0411 20.3652 58.0185 25.7745 43.1809C31.2347 31.6769 40.2464 25.0093 52.8099 23.1778ZM55.3103 28.8036C70.5977 29.4575 80.1305 37.1671 83.9085 51.9322C85.2559 62.4773 82.0261 71.3328 74.2195 78.4989C70.1689 84.1907 67.9811 90.5461 67.656 97.5643C67.2766 98.0485 66.8078 98.4129 66.2495 98.6583C59.686 98.8667 53.1225 98.8667 46.559 98.6583C46.2986 98.3979 46.038 98.1372 45.7776 97.8769C45.2516 91.605 43.3763 85.7709 40.1517 80.3742C37.7554 77.3528 35.3594 74.3317 32.9631 71.3103C26.2833 58.6011 27.7939 46.9849 37.4951 36.4611C42.6234 31.9919 48.5618 29.4394 55.3103 28.8036Z"
                    fill="black"
                  />
                  <path
                    opacity="0.943"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.86457 54.7452C6.03319 54.693 10.2005 54.7452 14.3665 54.9014C16.1152 55.6372 16.6881 56.9396 16.0855 58.8083C15.8402 59.3665 15.4758 59.8353 14.9916 60.2148C10.5118 60.4232 6.03188 60.4232 1.55203 60.2148C-0.0447863 59.1627 -0.409437 57.7563 0.458105 55.9954C0.894673 55.5047 1.3635 55.0877 1.86457 54.7452Z"
                    fill="black"
                  />
                  <path
                    opacity="0.906"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M99.0672 54.7451C103.357 54.6116 107.629 54.7679 111.882 55.2139C113.039 56.2753 113.403 57.5777 112.976 59.1208C112.493 59.7077 111.92 60.1766 111.257 60.5272C106.985 60.7357 102.714 60.7357 98.4421 60.5272C96.7643 59.5171 96.2955 58.1106 97.0356 56.3078C97.5998 55.5808 98.2771 55.0601 99.0672 54.7451Z"
                    fill="black"
                  />
                  <path
                    opacity="0.909"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.9302 84.4374C29.1182 84.2468 30.3162 85.7054 29.5245 88.8131C26.7732 91.8773 23.908 94.8466 20.9294 97.7207C18.3437 98.7725 16.781 97.9389 16.2412 95.2204C16.369 94.4949 16.6297 93.818 17.0226 93.1888C19.959 90.1999 22.9282 87.2829 25.9302 84.4374Z"
                    fill="black"
                  />
                  <path
                    opacity="0.909"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M85.3147 84.4371C86.4496 84.3309 87.4913 84.5915 88.4402 85.2185C90.8787 87.9699 93.4313 90.6265 96.0976 93.1885C97.5754 95.8571 96.8462 97.5239 93.9098 98.1893C93.295 98.1762 92.7218 98.0199 92.1908 97.7205C89.3163 94.9503 86.5552 92.0852 83.9082 89.1254C82.9465 87.0894 83.4154 85.5267 85.3147 84.4371Z"
                    fill="black"
                  />
                  <path
                    opacity="0.911"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M44.3709 110.066C52.4978 110.014 60.6241 110.066 68.7497 110.223C70.9038 111.1 71.4767 112.611 70.4688 114.755C70.0893 115.239 69.6205 115.603 69.0623 115.849C60.8319 116.057 52.6013 116.057 44.3709 115.849C42.2169 114.971 41.644 113.461 42.6519 111.317C43.1207 110.701 43.6937 110.285 44.3709 110.066Z"
                    fill="black"
                  />
                  <path
                    opacity="0.91"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M46.871 121.318C53.3311 121.266 59.7905 121.318 66.249 121.474C67.8449 121.792 68.6785 122.782 68.7494 124.444C68.5663 125.81 67.8368 126.696 66.5616 127.1C59.894 127.309 53.2261 127.309 46.5585 127.1C44.701 126.216 44.1281 124.809 44.8395 122.881C45.4036 122.154 46.0809 121.633 46.871 121.318Z"
                    fill="black"
                  />
                </svg>
                <h3>
                  OPEN TO
                  <br></br>
                  IDEAS
                </h3>
                <p>
                  Operational freedom and opportunity to execute new ideas and
                  to be part of the transformational process.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card section ends*/}
        <div className="uas-description-for-eligibility">
          <h1>
            <span className="">Who</span> Are We Looking For?
          </h1>
          <div className="uas-description-for-eligibility-content">
            <div className="uas-description-for-eligibility-content-one">
              <div>
                <h1>1</h1>
                <p>Generalist administrators or specialists are welcome.</p>
              </div>{" "}
              <div>
                <h1>2</h1>
                <p>
                  Experience in establishing institutions and handling
                  challenges preferred.{" "}
                </p>
              </div>{" "}
              <div>
                <h1>3</h1>
                <p>
                  High ethical standards and a clean professional track-record.
                </p>
              </div>{" "}
            </div>
            <div className="uas-description-for-eligibility-content-one">
              <div>
                <h1>4</h1>
                <p>
                  HR, Procurement, Outreach, Marketing & Branding, Project
                  Management, Technology &
                  Innovation,Legal/Documentation/Compliances, Finance, and CSR
                  specialists.
                </p>
              </div>{" "}
              <div>
                <h1>5</h1>
                <p>
                  Individuals with commitment to social change, welfare of all
                  communities and deep adherence to the Constitution of India.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* eligibility */}
        <div className="volunteering-eligibility-selection">
          <div>
            <h1>
              <span>Eligibility </span>&nbsp;Criteria
            </h1>
            <div className="volunteering-eligilibility-set">
              <div>
                <div className="yellow-circle"></div>
                <p>
                  Graduates from reputed institutions such as IIT, IIM, NIT,
                  IRMA, NLSIU, XLRI, BITS Pilani, NID, NIFT or other renowned
                  centers of learning including those abroad with a work
                  experience of at least 10 years.{" "}
                </p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>
                  Can be individuals who have led or had been part of
                  established institutions and have contributed to its growth.
                </p>
              </div>{" "}
            </div>
          </div>
          <div>
            <h1>
              <span>Selection</span>&nbsp;Process
            </h1>
            <p className="volunteering-selection-content">
              Candidates undergo an intense competitive evaluation to assume
              leadership roles across various initiatives and departments at
              Unnathi. Shortlisted candidates are invited for a online
              interviews, team interactions and a 360 degree evaluation is
              conducted before selection.
            </p>
          </div>
        </div>

        {/* apply */}
        <div className="volunteering-apply-button-wrapper" style={{background:"transparent"}}>
         
          <a href="">
            {/* <p>Apply</p> */}
            <p>Coming Soon</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
            >
              <path
                d="M27.2189 12.0805C27.5005 11.7988 27.6587 11.4168 27.6587 11.0185C27.6587 10.6201 27.5005 10.2381 27.2189 9.95642L18.7211 1.4586C18.5825 1.31512 18.4167 1.20068 18.2335 1.12196C18.0502 1.04323 17.8531 1.00179 17.6536 1.00006C17.4541 0.998323 17.2563 1.03633 17.0717 1.11186C16.8871 1.18739 16.7194 1.29893 16.5784 1.43998C16.4373 1.58102 16.3258 1.74874 16.2502 1.93335C16.1747 2.11797 16.1367 2.31577 16.1384 2.51523C16.1402 2.71469 16.1816 2.91181 16.2603 3.09508C16.3391 3.27835 16.4535 3.44411 16.597 3.58268L22.5306 9.51628L2.63723 9.51628C2.23883 9.51628 1.85674 9.67455 1.57503 9.95626C1.29332 10.238 1.13505 10.6201 1.13505 11.0185C1.13505 11.4169 1.29332 11.7989 1.57503 12.0807C1.85674 12.3624 2.23883 12.5206 2.63723 12.5206L22.5306 12.5206L16.597 18.4542C16.3233 18.7376 16.1719 19.117 16.1754 19.5109C16.1788 19.9047 16.3368 20.2815 16.6153 20.56C16.8938 20.8385 17.2706 20.9965 17.6644 20.9999C18.0583 21.0034 18.4377 20.852 18.7211 20.5783L27.2189 12.0805Z"
                fill="black"
                stroke="#FBBA16"
                stroke-width="1.2"
              />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UAS;
