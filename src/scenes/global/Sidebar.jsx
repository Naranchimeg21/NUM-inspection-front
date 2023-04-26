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
import PeopleIcon from "@mui/icons-material/People";
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

const Sidebar = ({ isCollapsed, setIsCollapsed = () => {} }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(() => {
    const path = window.location.pathname;
    if (path === "/") return "Хянах самбар";
    if (path === "/inspection" || path === "/inspection/add")
      return "Үзлэг, оношилгоо";
    if (path === "/user") return "Үйлчлүүлэгчид";
    if (path === "/report") return "Тайлан";
  });

  return (
    <Box
      className="card-shadow"
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
          color: "#1B4588 !important",
        },
        "& .pro-menu-item.active": {
          color: "#1B4588 !important",
        },
        borderRight: `1px solid ${colors.grey[700]}`,
        position: "fixed",
        minHeight: "100vh",
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
              title="Үйлчлүүлэгчид"
              to="/user"
              icon={<PeopleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Тайлан"
              to="/report"
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
              background: colors.primary[900],
              paddingLeft: isCollapsed ? "20px" : 0,
            }}
          >
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <ArrowForwardIcon /> : <ArrowBackIcon />}
              style={{
                color: colors.primary[400],
              }}
              sx={{
                transition: "margin-right 2s",
                "& .active": {
                  marginRig: "#1B4588 !important",
                },
              }}
            ></MenuItem>
          </div>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
