import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogItem {
  title: string;
  summary: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
}

interface BlogAreaProps {
  blog_data: BlogItem[];
}

const BlogArea: React.FC<BlogAreaProps> = ({ blog_data }) => {
  function isPartOfSeries(num: number): boolean {
    // Check if (num - 1) is divisible by 3
    if ((num - 1) % 3 === 0) {
      const n = (num - 1) / 3 + 1;
      return n > 0;
    }
    return false;
  }

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h1 className="cs_section_title anim_heading_title">
                  Blog | Flow Hashtag Media
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row">
            {blog_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-4 ${
                  isPartOfSeries(i) ? "mt-0 mt-md-5" : ""
                } `}
              >
                <div className="anim_div_ShowDowns">
                  <Link href={`/${item.slug}/`} className="cs_blog cs_style_1">
                    <div>
                      <Image
                        width={420} // Provide a default or fallback width
                        height={385} // Provide a default or fallback height
                        src={item?.image?.url}
                        alt={item?.image?.alt || "Image description"} // Use a meaningful alt text or fallback
                        layout="responsive" // Optional: Use this for a responsive image layout
                      />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">{item.title}</h6>
                      <p className="cs_blog_subtitle">
                        {item.summary?.slice(0, 150)}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          {/* <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BlogArea;
