import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Topbar = ({ title, subtitle, children }) => {
  const theme = useTheme();
  const { user, logout } = useAuth();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      className="card-shadow"
      sx={{ background: colors.primary[400] }}
    >
      <Header title={title} subtitle={subtitle} filter />
      <Box display="flex" alignItems="center">
        {children}
        {user ? (
          <>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>

            <IconButton onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
