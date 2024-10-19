"use client";

import Link from "next/link";
import React, { useState } from "react";

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[];
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "https://www.flowhashtagmedia.com/",
    has_dropdown: false,
    // sub_menu: [
    //   {
    //     id: 1,
    //     title: "Digital Agency",
    //     link: "/",
    //   },
    //   {
    //     id: 2,
    //     title: "Startup Agency",
    //     link: "/startup-agency",
    //   },
    //   {
    //     id: 3,
    //     title: "Design Studio",
    //     link: "/design-studio",
    //   },
    //   {
    //     id: 4,
    //     title: "Creative Protfolio",
    //     link: "/creative-protfolio",
    //   },
    //   {
    //     id: 5,
    //     title: "Marketing Agency",
    //     link: "/marketing-agency",
    //   },
    // ],
  },
  {
    id: 2,
    title: "About",
    link: "https://www.flowhashtagmedia.com/about",
    has_dropdown: false,
  },

  {
    id: 4,
    title: "Services",
    link: "https://www.flowhashtagmedia.com/service",
    has_dropdown: false,
    // sub_menu: [
    //   {
    //     id: 1,
    //     title: "Services",
    //     link: "/services",
    //   },
    //   {
    //     id: 2,
    //     title: "Services Details",
    //     link: "/service-details",
    //   },
    // ],
  },
  // {
  //   id: 5,
  //   title: "Portfolio",
  //   link: "/portfolio",
  //   has_dropdown: false,
  //   sub_menu: [
  //     {
  //       id: 1,
  //       title: "Portfolio",
  //       link: "/portfolio",
  //     },
  //     {
  //       id: 2,
  //       title: "Portfolio Details",
  //       link: "/portfolio-details",
  //     },
  //   ],
  // },
  {
    id: 6,
    title: "Portfolio",
    link: "https://www.flowhashtagmedia.com/portfolio",
    has_dropdown: false,
    // sub_menu: [
    //   {
    //     id: 1,
    //     title: "Blog",
    //     link: "/blog",
    //   },
    //   {
    //     id: 2,
    //     title: "Blog Details",
    //     link: "/blog-details",
    //   },
    // ],
  },
  // {
  //   id: 7,
  //   title: "Contact",
  //   link: "/contact",
  //   has_dropdown: false,
  // },
];

const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {
  return (
    <>
      <ul
        className="cs_nav_list"
        style={{ display: active ? "block" : "none" }}
      >
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${
              navTitle === menu.title ? "active" : ""
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
                <ul
                  className="cs_mega_wrapper"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
                <span
                  onClick={() => openMobileMenu(menu.title)}
                  className={`cs_munu_dropdown_toggle ${
                    navTitle === menu.title ? "active" : ""
                  }`}
                ></span>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
