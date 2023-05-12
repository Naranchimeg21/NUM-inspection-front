import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, DialogContent, Divider, useTheme } from "@mui/material";
import { tokens } from "../../../../../theme";
import { useState } from "react";
import { Form } from "antd";
import InspectionStepper from "../stepper";
import Step2 from "../steps/inspection.step2";
import Step3 from "../steps/inspection.step3";
import Step1 from "../steps/inspection.step1";
import inspectionAxios from "../../../../../utils/inspectionnetworkActions";
import { useEffect } from "react";
import { SuccessAlert } from "../utils/successAlert";
import { ErrorAlert } from "../utils/errorAlert";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ id, isOpen, setIsOpen = () => {} }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClose = () => {
    setIsOpen(false);
    setSelected(0);
    form.setFieldsValue("");
    setQuestionsList([]);
  };

  const [selected, setSelected] = useState(0);
  const [isPop, setIsPop] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  const [data, setData] = useState({});
  const [undsenOnosh, setUndsenOnosh] = useState({ name: "", value: "" });
  const { useForm } = Form;
  const [form] = useForm();
  const [alerts, setAlerts] = useState(false);
  const [alerte, setAlerte] = useState(false);
  const dialogClose = (alert) => {
    setAlerts(alert);
    setAlerte(alert);
  };
  const onSubmit = (value) => {
    setData((data) => ({
      ...data,
      ...value,
    }));
    console.log(data);
  };
  const onClose = () => {
    setIsPop(false);
  };
  useEffect(() => {
    if (selected > 2) {
      inspectionAxios
        .post("/", {
          data,
          undsenOnosh,
          questions: questionsList,
          userId: id,
        })
        .then((res) => {
          handleClose();
          setAlerts(true);
        })
        .catch((error) => {
          setSelected(selected - 1);
          setAlerte(true);
        });
    }
  }, [data]);
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      sx={{ background: colors.primary[400] }}
    >
      <AppBar
        sx={{
          position: "relative",
          background: colors.primary[400],
          color: colors.grey[100],
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Үзлэг бүртгэл
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Гарах
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent
        sx={{ background: colors.primary[500], color: colors.grey[100] }}
      >
        <InspectionStepper selected={selected} />
        <Box
          className="nch-60 m-20 p-20"
          sx={{ background: colors.primary[400] }}
          display="flex"
        >
          <Form
            form={form}
            onFinish={onSubmit}
            labelCol={{ md: 8, sx: 24 }}
            wrapperCol={{ md: 16, sx: 24 }}
            className="wp-100 pl-20 pr-20"
          >
            {selected === 0 && (
              <Step1
                questionsList={questionsList}
                setQuestionsList={setQuestionsList}
              />
            )}
            {selected === 1 && <Step2 />}
            {selected === 2 && <Step3 setUndsenOnosh={setUndsenOnosh} />}
          </Form>
        </Box>
        <div>
          <Box sx={{ pb: 2, height: "10%" }}>
            <Divider />
          </Box>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              disabled={selected === 0 && true}
              onClick={() => {
                setSelected(selected - 1);
              }}
            >
              Буцах
            </Button>
            {selected < 2 ? (
              <Button
                variant="contained"
                onClick={() => {
                  if (selected === 1) form.submit();
                  setSelected(selected + 1);
                }}
              >
                Дараах
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  setSelected(selected + 1);
                  form.submit();
                }}
              >
                Хадгалах
              </Button>
            )}
          </Box>
        </div>
      </DialogContent>
      <SuccessAlert
        text="Үйлчлүүлэгчийн үзлэгийн мэдээллийг амжилттай бүртгэлээ."
        open={alerts}
        setOpen={dialogClose}
      />
      <ErrorAlert
        text="Үйлчлүүлэгчийн үзлэгийн мэдээлэл бүртгэхэд алдаа гарлаа."
        open={alerte}
        setOpen={dialogClose}
      />
    </Dialog>
  );
}
