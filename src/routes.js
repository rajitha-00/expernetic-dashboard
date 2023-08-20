import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Courses from "views/admin/faculties";
import Complients from "views/admin/complients";
import Documents from "views/admin/documents";



import {
  MdCardTravel,
  MdFileCopy,
  MdLaptopMac,
  MdWarningAmber,

} from "react-icons/md";

const routes = [
  {
    name: "Overview",
    layout: "/admin",
    path: "overview",
    icon: <MdCardTravel className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Documents",
    layout: "/admin",
    icon: <MdLaptopMac className="h-6 w-6" />,
    path: "documents",
    component: <Documents />,
  },
  {
    name: "Courses",
    layout: "/admin",
    path: "courses",
    icon: <MdFileCopy className="h-6 w-6" />,
    component: <Courses />,
    secondary: true,
  },
  
  {
    name: "Complients",
    layout: "/admin",
    path: "complients",
    icon: <MdWarningAmber className="h-6 w-6" />,
    component: <Complients />,
  },



];


export default routes;
