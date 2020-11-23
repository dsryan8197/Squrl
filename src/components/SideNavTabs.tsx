import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as Vscicons from "react-icons/vsc";
//GiAcorn

//array that holds the icons in sidebar
export const SideNavTabs = [
  {
    title: "Home",
    path: "/",
    icon: <Vscicons.VscSquirrel />,
    cName: "nav-text",
  },
  {
    title: "Data Generation",
    path: "/DataGeneration",
    icon: <GiIcons.GiAcorn />,
    cName: "nav-text",
  },
  {
    title: "Data Visualization",
    path: "/DataVisualization",
    icon: <AiIcons.AiOutlinePieChart />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/About",
    icon: <GiIcons.GiLeafSwirl />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/Settings",
    icon: <GiIcons.GiSettingsKnobs />,
    cName: "nav-text settings-icon",
  },
];
