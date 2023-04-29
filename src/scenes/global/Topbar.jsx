import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Header from "../../components/Header";

const Topbar = ({ title, subtitle, children }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      className="card-shadow"
    >
      <Header title={title} subtitle={subtitle} filter />
      <Box display="flex" alignItems="center">
        {children}
        <IconButton
          className="ml-20"
          aria-label="mode"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton aria-label="notification">
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton aria-label="log">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
