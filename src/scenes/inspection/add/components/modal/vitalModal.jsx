import * as React from "react";
import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import vitalAxios from "../../../../../utils/vitalnetworkActions";
import { useState } from "react";
import { SuccessAlert } from "../utils/successAlert";
import { ErrorAlert } from "../utils/errorAlert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const VitalModal = ({ open, setOpen = () => {}, id }) => {
  const { useForm } = Form;
  const [form] = useForm();
  const [alerts, setAlerts] = useState(false);
  const [alerte, setAlerte] = useState(false);
  const onSubmit = (value) => {
    vitalAxios
      .post("/", { ...value, patientId: id })
      .then((res) => {
        setOpen(false);
        setAlerts(true);
        form.resetFields();
      })
      .catch((error) => {
        setAlerte(true);
      });
  };

  const handleClose = (alert) => {
    setAlerts(alert);
    setAlerte(alert);
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
        <DialogTitle>Амин үзүүлэлт бүртгэх</DialogTitle>
        <DialogContent>
          <Form
            wrapperCol={{ span: 12 }}
            labelCol={{ span: 12 }}
            labelAlign="left"
            form={form}
            onFinish={onSubmit}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Ухаан санаа" name="uhaanSanaa">
                  <Input />
                </Form.Item>
                <Form.Item label="Пульс" name="pulse">
                  <InputNumber placeholder="" className="wp-100" />
                </Form.Item>
                <Form.Item label="Амьсгалын тоо" name="breath">
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item label="Сатураци" name="saturation">
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item label="Биеийн температур" name="temperature">
                  <InputNumber className="wp-100" addonAfter="°C" />
                </Form.Item>
                <Form.Item label="Өндөр" name="bodyHeight">
                  <InputNumber className="wp-100" addonAfter="cm" />
                </Form.Item>
                <Form.Item label="Жин" name="bodyWeight">
                  <InputNumber className="wp-100" addonAfter="kg" />
                </Form.Item>
                <Form.Item label="БЖИ" name="BJI">
                  <InputNumber className="wp-100" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Баруун даралт /Дээд/"
                  name="pressureRightDeed"
                >
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item
                  label="Баруун даралт /Доод/"
                  name="pressureRightDood"
                >
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item
                  label="Баруун даралт /Дундаж/"
                  name="pressureRightAverage"
                >
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item
                  label="Баруун даралт /Нэмэлт/"
                  name="pressureRightAdditional"
                >
                  <Input className="wp-100" />
                </Form.Item>
                <Form.Item label="Зүүн даралт /Дээд/" name="pressureLeftDeed">
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item label="Зүүн даралт /Доод/" name="pressureLeftDood">
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item
                  label="Зүүн даралт /Дундаж/"
                  name="pressureLeftAverage"
                >
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item
                  label="Зүүн даралт /Нэмэлт/"
                  name="pressureLeftAdditional"
                >
                  <Input className="wp-100" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={() => form.submit()}>
            Хадгалах
          </Button>

          <Button onClick={() => setOpen(false)}>Болих</Button>
        </DialogActions>
      </Dialog>
      <SuccessAlert
        text="Үйлчлүүлэгчийн амин үзүүлэлтийг амжилттай бүртгэлээ."
        open={alerts}
        setOpen={handleClose}
      />
      <ErrorAlert
        text="Үйлчлүүлэгчийн амин үзүүлэлтийг бүртгэхэд алдаа гарлаа."
        open={alerte}
        setOpen={handleClose}
      />
    </>
  );
};

export default VitalModal;
