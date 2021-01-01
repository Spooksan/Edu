import React from "react";
import { FaSchool, FaBlog } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoSchool } from "react-icons/io5";
import { GiSchoolBag, GiFireworkRocket } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { SiAboutDotMe } from "react-icons/si";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/courses",
    icon: <GiSchoolBag />,
    cName: "nav-text",
  },
  {
    title: "Programs & Degrees",
    path: "/programs",
    icon: <IoSchool />,
    cName: "nav-text",
  },
  {
    title: "School & Partners",
    path: "/schools",
    icon: <FaSchool />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    icon: <SiAboutDotMe />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <RiContactsFill />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/event",
    icon: <GiFireworkRocket />,
    cName: "nav-text",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <FaBlog />,
    cName: "nav-text",
  },
];
