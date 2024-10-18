import React from "react";
import Link from "next/link";

interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: `Social Media Marketing`,
    description: `Enhance your brand's online presence and engage with your target audience through strategic social media campaigns. Our experts will help you create compelling content, optimize your profiles, and measure your ROI.`,
  },
  {
    id: 2,
    title: `CGI Marketing`,
    description: `Leverage cutting-edge CGI (Computer-Generated Imagery) to create stunning visual content that captivates your audience. Our CGI marketing services will help you stand out with highly realistic and engaging images and animations, perfect for advertising and product visualization.`,
  },
  {
    id: 3,
    title: `Web Development`,
    description: `Transform your business with custom-designed websites that are both visually appealing and user-friendly. Our skilled developers will create responsive, high-performing websites that showcase your brand and drive conversions.`,
  },
  {
    id: 4,
    title: `SEO`,
    description: `Improve your website's visibility in search engine results and attract more organic traffic. Our SEO experts will conduct thorough keyword research, optimize your content and website structure, and track your performance metrics.`,
  },
];

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Transform Your Online Presence with Webwave Digital Marketing
                Agency Services
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url('/assets/img/hero_img_1.jpg')`,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/services">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                {/* <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
