import { Box } from "@mui/system";

import Typography from "@mui/material/Typography";
import { Form } from "antd";
import { Button, TextField, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Topbar from "../global/Topbar";
import { tokens } from "../../theme";
import { useAuth } from "../../hooks/useAuth";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import userAxios from "../../utils/userAxios";
import { useNavigate } from "react-router-dom";
import { set } from "lodash";
import { ErrorAlert } from "../inspection/add/components/utils/errorAlert";
import { SuccessAlert } from "../inspection/add/components/utils/successAlert";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { login } = useAuth();
  const { useForm } = Form;
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState(false);
  const [alerte, setAlerte] = useState(false);
  const onSubmit = (value) => {
    console.log("login", value);
    setLoading(true);
    userAxios
      .post("/login", { ...value })
      .then((res) => {
        if (res.data.role === "Doctor") {
          login(res.data);
          setLoading(false);
          setAlerts(true);
          navigate("/");
        } else {
          setAlerte(true);
        }
      })
      .catch((err) => {
        setAlerte(true);
      });
  };
  const handleClose = (alert) => {
    setAlerts(alert);
    setAlerte(alert);
  };
  return (
    <>
      <Topbar
        title="МУИС-ийн эмнэлгийн веб хуудсанд тавтай морил"
        subtitle="Ямар нэг үйлдэл хийхийн тулд нэвтрэх шаардлагатай!"
      />
      <Box
        sx={{ width: "100%", height: "100%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className="card-shadow minw-500 maxnw-500 maxnh-500"
          p="50px"
          display="flex"
          justifyItems="center"
          alignContent="center"
          flexDirection="column"
          sx={{ background: colors.primary[400] }}
        >
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ mb: "20px" }}
          >
            Нэвтрэх
          </Typography>

          <Form form={form} onFinish={onSubmit}>
            <Form.Item name="username">
              <TextField
                id="outlined-basic"
                label="Нэвтрэх нэр"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Form.Item>
            <Form.Item name="password">
              <TextField
                id="outlined-basic"
                label="Нууц үг"
                variant="outlined"
                type="password"
                fullWidth
                size="small"
              />
            </Form.Item>
            <LoadingButton
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              loading={loading}
              onClick={() => form.submit()}
            >
              НЭВТРЭХ
            </LoadingButton>
          </Form>
        </Box>
        <ErrorAlert
          text="Нэвтрэх нэр нууц үг алдаатай!"
          open={alerte}
          setOpen={handleClose}
        />
        <SuccessAlert
          text="Амжилттай нэвтэрлээ."
          open={alerts}
          setOpen={handleClose}
        />
      </Box>
    </>
  );
};

export default Login;
