import * as React from "react";
import { Col, Form, Input, Row, Select } from "antd";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import userAxios from "../../../../../utils/userAxios";
import { SuccessAlert } from "../utils/successAlert";
import { ErrorAlert } from "../utils/errorAlert";
import { useState } from "react";

const { Option } = Select;
const UserModal = ({ open, setOpen = () => {} }) => {
  const [form] = Form.useForm();
  const [alerts, setAlerts] = useState(false);
  const [alerte, setAlerte] = useState(false);
  const handleClose = (alert) => {
    setAlerts(alert);
    setAlerte(alert);
  };
  const onSubmit = (value) => {
    userAxios
      .post("/auth/register", {
        ...value,
      })
      .then((res) => {
        form.resetFields();
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
        <DialogTitle>Үйлчлүүлэгч бүртгэх</DialogTitle>

        <DialogContent>
          <Form
            form={form}
            onFinish={onSubmit}
            wrapperCol={{ span: 16 }}
            labelCol={{ span: 8 }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="lastName"
                  label="Овог"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="registerNumber"
                  label="РД"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label=" Салбар"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="age"
                  label="Нас"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Утас"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  label="Нэр"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="isStudent"
                  label="Төрөл"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Select
                    defaultValue={false}
                    rules={[
                      {
                        required: true,
                        message: "Заавал оруулах шаардлагатай.",
                      },
                    ]}
                  >
                    <Option value={false}>Багш, ажилчин</Option>
                    <Option value={true}>Оюутан</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="jobName" label="Мэргэжил">
                  <Input />
                </Form.Item>
                <Form.Item name="gender" label="Хүйс" required>
                  <Select defaultValue="Эмэгтэй">
                    <Option value="Эмэгтэй">Эмэгтэй</Option>
                    <Option value="Эрэгтэй">Эрэгтэй</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="degree"
                  label="Боловсрол"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
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
        <SuccessAlert
          text="Үйлчлүүлэгчийн мэдээллийг амжилттай бүртгэлээ."
          open={alerts}
          setOpen={handleClose}
        />
        <ErrorAlert
          text="Үйлчлүүлэгчийн мэдээллийг бүртгэхэд алдаа гарлаа."
          open={alerte}
          setOpen={handleClose}
        />
      </Dialog>
    </>
  );
};

export default UserModal;
