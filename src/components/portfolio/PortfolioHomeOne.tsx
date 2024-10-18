"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from "@/assets/img/home/gswf.webp";
import portfolio_img_2 from "@/assets/img/home/laharika.webp";
import portfolio_img_3 from "@/assets/img/home/sai.webp";
import portfolio_img_4 from "@/assets/img/home/Aryagiri.webp";
import portfolio_img_5 from "@/assets/img/home/Brainstrom.webp";
import portfolio_img_6 from "@/assets/img/home/brick.webp";
import portfolio_img_7 from "@/assets/img/home/alliage.webp";
import portfolio_img_8 from "@/assets/img/home/mindful.webp";

interface DataType {
  img: StaticImageData;
  title: string;
  category: string;
  web: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    img: portfolio_img_1,
    title: `Gswf India`,
    category: `Digital Services / App Design`,
    web: "https://gswf.in/",
  },
  {
    img: portfolio_img_4,
    title: `Aryagiri`,
    category: `Digital Services / Web Design`,
    web: "https://staging.aryagiri.com/",
  },
  {
    img: portfolio_img_8,
    title: `Grandeur International School`,
    category: `Digital Services / Web Design`,
    web: "https://mindfullearning.xyz/",
  },
  {
    img: portfolio_img_5,
    title: `Brainstrom`,
    category: `Digital Services / Web Design`,
    web: "https://brainstormmin.com/",
  },

  {
    img: portfolio_img_2,
    title: `Laharika Creations`,
    category: `Digital Services / Web Design`,
    web: "https://www.laharikacreations.com/",
  },
  {
    img: portfolio_img_6,
    title: `Balajibricks`,
    category: `Digital Services / Web Design`,
    web: "https://sribalajibricksandinterlocks.com/",
  },
  {
    img: portfolio_img_7,
    title: `The alliage`,
    category: `Digital Services / Web Design`,
    web: "https://thealliage.com/",
  },
  {
    img: portfolio_img_3,
    title: `Sri sai balaji`,
    category: `Digital Services / Web Design`,
    web: "https://www.srisaibalajichildwelfare.com/",
  },
];

const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={100}
          slidesPerView="auto"
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns"
        >
          {portfolio_slider.slice(0, 4).map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                <Link href={item.web} className="cs_portfolio cs_style_1">
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2
                      className="cs_portfolio_title"
                      style={{ color: "#2b7a78 !important" }}
                    >
                      {item.title}
                    </h2>
                    <div className="cs_portfolio_subtitle">{item.category}</div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto"
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns"
        >
          {portfolio_slider.slice(4, 8).map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                <Link href={item.web} className="cs_portfolio cs_style_1">
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2
                      className="cs_portfolio_title"
                      style={{ color: "#2b7a78 !important" }}
                    >
                      {item.title}
                    </h2>
                    <div className="cs_portfolio_subtitle">{item.category}</div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;
