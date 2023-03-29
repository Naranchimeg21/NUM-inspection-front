import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Image } from "antd";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(() => {
    const path = window.location.pathname;
    if (path === "/") return "Хянах самбар";
    if (path === "/inspection" || path === "/inspection/add")
      return "Үзлэг, оношилгоо";
    if (path === "/report") return "Тайлан";
  });

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <img
            alt=""
            preview={false}
            height="60"
            style={{ margin: 15, marginTop: 5 }}
            src="/assets/logo.png"
          />

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Хянах самбар"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Typography></Typography> */}
            <Item
              title="Үзлэг, оношилгоо"
              to="/inspection"
              icon={<MedicalInformationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Тайлан"
              to="/schedule"
              icon={<ContentPasteIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          <div
            style={{
              width: isCollapsed ? "80px" : "270px",
              display: "flex",
              justifyContent: "center",
              position: "fixed",
              bottom: 0,
              left: 0,
              background: "#445476",
              paddingLeft: isCollapsed ? "20px" : 0,
            }}
          >
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <ArrowForwardIcon /> : <ArrowBackIcon />}
              style={{
                color: colors.grey[100],
              }}
            ></MenuItem>
          </div>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
