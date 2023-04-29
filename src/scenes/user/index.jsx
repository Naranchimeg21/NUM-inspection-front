import { Box, useTheme } from "@mui/system";
import Topbar from "../global/Topbar";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Divider, TextField } from "@mui/material";
import UserDataTable from "./components/userDataTable";
import { useEffect } from "react";
import inspectionAxios from "../../utils/inspectionnetworkActions";
import { tokens } from "../../theme";
import userAxios from "../../utils/userAxios";

const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //nahh just for test
  useEffect(() => {
    userAxios
      .get("/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Topbar
        title="Үйлчлүүлэгчдийн мэдээлэл"
        subtitle="Эрүүл биед саруул ухаан"
        children={
          <>
            <h3> Үр дүн: {user.length || 0}</h3>
            <Divider orientation="vertical" className="mr-10 ml-10" />
            <TextField
              id="outlined-textarea"
              label="Хэрэглэгч хайх"
              placeholder="РД, нэр, утасны дугаараар хайна уу."
              size="small"
            />
            <div>
              <Button
                sx={{ background: colors.primary[10] }}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                startIcon={<FilterAltIcon />}
              >
                Шүүлтүүр
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>
              </Popover>
            </div>
          </>
        }
      />
      <Box m="20px">
        <UserDataTable color={colors.primary[400]} data={user} />
      </Box>
    </>
  );
};

export default User;
