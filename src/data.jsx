import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGlobe,
  FaFeatherAlt,
  FaBity,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { SiMysql } from "react-icons/si";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },

  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Mysql",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Power BI",
    icon: <SiPowerbi className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Microsoft EXCEL",
    icon: <PiMicrosoftExcelLogoBold className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Github",
    icon: <FaGithub className="h-16 w-16 text-emerald-500" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "",
    title: "Hotel Booking Analysis",
    text: "	Imported data from various csv files  such as booking information , property information and established  relationship between the tables.	Transformed data to remove duplicates, handle missing values, and date formats using PowerQuery.	Created dashboard with key performance indicators (KPIs) such as occupancy rate, average daily rate (ADR), revenue per available room (RevPAR) and cancellation rate using DAX measures",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "",
    title: "Sales Order Analysis ",
    text: "Extracted data from api, transformed data and loaded to Mysql using pandas.	Analysed data for getting insights about the products using sql queries",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "",
    title: "Customer Data Analysis",
    text: "Analysed orders information to understand the customer purchasing behaviour based on gender, age group and demographics to identify the potential customers.",
  },
];
