import * as React from "react";
import { Divider, Form, Input, InputNumber } from "antd";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import instructionAxios from "../../../../../utils/instructionNetwork";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { SuccessAlert } from "../utils/successAlert";
import { ErrorAlert } from "../utils/errorAlert";

const MedicineModal = ({ id, open, setOpen = () => {} }) => {
  const { useForm } = Form;
  const [form] = useForm();
  const [name, setName] = useState();
  const [medicine, setMedicine] = useState([]);
  const [alerts, setAlerts] = useState(false);
  const [alerte, setAlerte] = useState(false);
  const handleClose = (alert) => {
    setAlerts(alert);
    setAlerte(alert);
  };
  const onFinish = (value) => {
    setMedicine((medicine) => [...medicine, value]);
    form.resetFields();
    console.log("first", medicine.length);
  };
  const onSubmit = () => {
    instructionAxios
      .post("/", { name, userId: id, instruction: medicine })
      .then((res) => {
        setOpen(false);
        setMedicine([]);
        setName("");
        setAlerts(true);
      })
      .catch((error) => {
        setAlerte(true);
      });
  };
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        disableEscapeKeyDown
        className="p-20"
        open={open}
        onClose={() => setOpen(true)}
      >
        <DialogTitle>Эмийн жор бүртгэх</DialogTitle>

        <DialogContent>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Form.Item label="Жорын нэр">
                  <Input
                    placeholder="Ханиаданд"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Divider />
                <Form.Item name="nameMed" label="Эмийн нэр">
                  <Input placeholder="Тайлал хот" />
                </Form.Item>
                <Form.Item name="perday" label="Өдөрт">
                  <InputNumber placeholder="2" className="w-100" />
                </Form.Item>
                <Form.Item name="dose" label="Тун">
                  <Input placeholder="200мг" />
                </Form.Item>
                <Form.Item name="note" label="Тэмдэглэл">
                  <Input placeholder="Хоолны дараа ууна." />
                </Form.Item>
                <Button
                  variant="contained"
                  size="large"
                  width="100%"
                  onClick={() => form.submit()}
                >
                  Эмийн жор нэмэх
                </Button>
              </Grid>
              <Grid item xs={8} spacing={4}>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={6}>
                    Эмийн жорын нэр:
                  </Grid>
                  <Grid item xs={6} className="fw-600">
                    {name}
                  </Grid>
                </Grid>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={6}>
                    Жор олгосон:
                  </Grid>
                  <Grid item xs={6} className="fw-600">
                    {dayjs().format("YYYY-MM-DD")}
                  </Grid>
                </Grid>

                <Grid container xs={12} spacing={1} className="mt-10 mb-10">
                  <Grid item xs={1} className="fw-600">
                    №
                  </Grid>
                  <Grid item xs={3} className="fw-600">
                    Эмийн нэр
                  </Grid>
                  <Grid item xs={2} className="fw-600">
                    Өдөрт
                  </Grid>
                  <Grid item xs={2} className="fw-600">
                    Тун
                  </Grid>
                  <Grid item xs={4} className="fw-600">
                    Тэмдэглэл
                  </Grid>
                </Grid>
                {medicine.map((item, idx) => (
                  <Grid container xs={12} spacing={2}>
                    <Grid item xs={1}>
                      {idx + 1}
                    </Grid>
                    <Grid item xs={3}>
                      {item.nameMed}
                    </Grid>
                    <Grid item xs={2}>
                      {item.perday}
                    </Grid>
                    <Grid item xs={2}>
                      {item.dose}
                    </Grid>
                    <Grid item xs={4}>
                      {item.note}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onSubmit}>
            Хадгалах
          </Button>

          <Button onClick={() => setOpen(false)}>Болих</Button>
        </DialogActions>
        <SuccessAlert
          text="Үйлчлүүлэгчийн эмийн жор амжилттай бүртгэлээ."
          open={alerts}
          setOpen={handleClose}
        />
        <ErrorAlert
          text="Үйлчлүүлэгчийн эмийн жорыг бүртгэхэд алдаа гарлаа."
          open={alerte}
          setOpen={handleClose}
        />
      </Dialog>
    </>
  );
};

export default MedicineModal;
