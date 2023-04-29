import Topbar from "../../global/Topbar";
import * as React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import UserModal from "./components/modal/userModal";
import Header from "../../../components/Header";
import ListItems from "./components/listItems";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UserMasterData from "./components/userMasterData";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useEffect } from "react";
import inspectionAxios from "../../../utils/inspectionnetworkActions";
import userAxios from "../../../utils/userAxios";

const InspectionAdd = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState("");
  const [userMaster, setUserMaster] = useState({});
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  //nahh just for test
  useEffect(() => {
    userAxios
      .get(`/users/${id}`)
      .then((res) => {
        if (id) setUserMaster(res.data);
        else setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Topbar title="Шинэ үзлэг бүртгэх" subtitle="Эрүүл биед саруул ухаан" />
      <Grid container rowSpacing={2}>
        {!id && (
          <Grid item xs={12} md={4}>
            <Box className="ml-20 mt-20 mb-20 card-shadow">
              <Box
                m="20px"
                height="95%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <div style={{ height: "90%" }}>
                  <Box mx="20px" mt="20px">
                    <Header title="Үйлчлүүлэгчдээс сонгоно уу" />
                    <Box
                      mt="20px"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <TextField
                        id="outlined-textarea"
                        label="Хэрэглэгч хайх"
                        placeholder="РД, нэр, утасны дугаараар хайна уу."
                        size="small"
                      />
                      <Button
                        variant="contained"
                        size="large"
                        startIcon={<AddCircleOutlineIcon />}
                        onClick={() => setOpen(true)}
                      >
                        Бүртгэх
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ py: 3, height: "90%" }}>
                    <ListItems
                      data={user}
                      setUserMaster={setUserMaster}
                      setUserId={setUserId}
                    />
                  </Box>
                </div>
              </Box>
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={id ? 12 : 8}>
          <Box
            className="m-20 card-shadow"
            style={{
              height: "100%",
              padding: "20px",
            }}
          >
            <UserMasterData data={userMaster} />
          </Box>
        </Grid>
      </Grid>
      <UserModal open={open} setOpen={setOpen} />
    </>
  );
};

export default InspectionAdd;
