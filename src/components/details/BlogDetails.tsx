"use client";

import React from "react";
import Image from "next/image";
import BlogHomeOne from "../blog/BlogHomeOne";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Custom renderers for specific node types

interface blogDataProps {
  blogData: {
    title: string;
    slug: string;
    summary: string;
    sys: {
      firstPublishedAt: string;
      id: string;
    };
    image: {
      url: string;
    };
    body: {
      json: any;
      links: {
        assets: {
          block: {
            url: string;
          }[];
        };
      };
    };
  };
}

const BlogDetails = ({ blogData }: blogDataProps) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data.target.sys.id;

        // Find the correct asset using the assetId
        const asset = blogData.body.links.assets.block.find((asset) =>
          asset.url.includes(assetId)
        );

        if (!asset) {
          console.error("Asset not found for ID:", assetId);
          return null; // Return null or a placeholder if the asset is not found
        }

        const { url } = asset;

        return (
          <img
            src={url}
            width={"480px"}
            height={"480px"}
            alt="Content Image"
            className="custom-image-class"
          />
        );
      },
    },
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_word_writting">
              {blogData?.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="cs_height_65 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="anim_div_ShowZoom">
            <div className="cs_portfolio_details d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="row">
                  {documentToReactComponents(blogData?.body?.json, options)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container">
        <div className="row">
          <div className="cs_share_post anim_div_ShowDowns">
            <h6 className="m-0">SHARE POST</h6>
            <div>
              <div className="cs_share_btn_g">
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://twitter.com/">
                    Twitter
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://www.facebook.com/">
                    Facebook
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://www.linkedin.com/">
                    Linkedin
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://dribbble.com/">
                    Dribbble
                  </a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target="_blank" href="https://www.instagram.com/">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_70 cs_height_lg_35"></div>
        <div className="cs_hr_design anim_div_ShowDowns"></div>
      </div> */}

      <div className="cs_height_100 cs_height_lg_50"></div>

      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="anim_div_ShowDowns">
                <div>
                  <h4 className="cs_m0">Comment (0)</h4>
                  <div className="cs_height_30 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    No Comment Yet! Vixan post comment box is empty!
                  </p>
                  <div className="cs_height_30 cs_height_lg_30"></div>
                  <h4 className="cs_m0">Post Your Comment</h4>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                </div>
                <form onClick={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                      />
                      <label htmlFor="name" className="cs_input_label">
                        Name
                      </label>
                    </div>
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        id="email"
                      />
                      <label htmlFor="email" className="cs_input_label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="cs_height_50 cs_height_lg_50"></div>
                  <div className="cs_field_group">
                    <input
                      className="cs_input_field"
                      type="text"
                      placeholder="Your Comment"
                      name="comment"
                      id="comment"
                    />
                    <label htmlFor="comment" className="cs_input_label">
                      Your Comment
                    </label>
                  </div>
                  <div className="cs_height_50 cs_height_lg_50"></div>
                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_type_btn"
                  >
                    <span>Post Comment</span>
                    <svg
                      width="19"
                      height="13"
                      viewBox="0 0 19 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="cs_height_150 cs_height_lg_60"></div>

      {/* <BlogHomeOne style_3={true} /> */}
    </>
  );
};

export default BlogDetails;
