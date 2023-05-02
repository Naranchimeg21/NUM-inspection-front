import * as React from "react";
import { Col, Form, Input, InputNumber, Row } from "antd";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import userAxios from "../../../../../utils/userAxios";
import { SuccessAlert } from "../utils/successAlert";
import { ErrorAlert } from "../utils/errorAlert";
import { useState } from "react";
import { branch } from "../../../../../constants";
import { useEffect } from "react";

const UserModal = ({
  open,
  setOpen = () => {},
  getUser = () => {},
  data = { id: "" },
}) => {
  const [form] = Form.useForm();
  const [alerts, setAlerts] = useState(false);
  const [alerte, setAlerte] = useState(false);
  const [type, setType] = useState(false);
  const handleClose = (alert) => {
    setAlerts(alert);
    setAlerte(alert);
  };
  const onSubmit = (value) => {
    userAxios
      .post("/", {
        ...value,
        id: data?.id,
      })
      .then((res) => {
        form.resetFields();
        setAlerts(true);
        setOpen(false);
        getUser();
      })
      .catch((error) => {
        setAlerte(true);
      });
  };
  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
    console.log("usereditdata", data);
  }, [data]);
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        disableEscapeKeyDown
        className="p-20"
        open={open}
        onClose={() => {
          setOpen(true);
          form.resetFields();
        }}
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
                  name="age"
                  label="Нас"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <InputNumber className="wp-100" />
                </Form.Item>
                <Form.Item
                  name="register"
                  label="РД"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="branchSchool"
                  label=" Салбар"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Select
                    label
                    onSelect={(value) => setType(value)}
                    fullWidth
                    size="small"
                  >
                    {branch.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {item.value}
                      </MenuItem>
                    ))}
                  </Select>
                </Form.Item>
                {type && (
                  <Form.Item
                    name="grade"
                    label="Түвшин"
                    rules={[
                      {
                        required: true,
                        message: "Заавал оруулах шаардлагатай.",
                      },
                    ]}
                  >
                    <Input className="wp-100" />
                  </Form.Item>
                )}

                <Form.Item
                  name="phone"
                  label="Утас"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Input className="wp-100" />
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
                <Form.Item name="gender" label="Хүйс" required>
                  <Select label defaultValue="Эмэгтэй" fullWidth size="small">
                    <MenuItem value="Эрэгтэй">Эрэгтэй</MenuItem>
                    <MenuItem value="Эмэгтэй">Эмэгтэй</MenuItem>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="isStudent"
                  label="Төрөл"
                  rules={[
                    { required: true, message: "Заавал оруулах шаардлагатай." },
                  ]}
                >
                  <Select
                    label
                    defaultValue={false}
                    value={false}
                    onChange={(e) => setType(e.target.value)}
                    fullWidth
                    size="small"
                  >
                    <MenuItem value={false}>Багш, ажилчин</MenuItem>
                    <MenuItem value={true}>Оюутан</MenuItem>
                  </Select>
                </Form.Item>
                <Form.Item name="major" label="Мэргэжил">
                  <Input />
                </Form.Item>
                {type && (
                  <Form.Item
                    name="degree"
                    label="Зэрэг"
                    rules={[
                      {
                        required: true,
                        message: "Заавал оруулах шаардлагатай.",
                      },
                    ]}
                  >
                    <Select
                      label
                      defaultValue="Бакалавр"
                      value="Бакалавр"
                      onSelect={(value) => setType(value)}
                      fullWidth
                      size="small"
                    >
                      <MenuItem value="Бакалавр">Бакалавр</MenuItem>
                      <MenuItem value="Магистр">Магистр</MenuItem>
                    </Select>
                  </Form.Item>
                )}
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
          setClose={handleClose}
        />
        <ErrorAlert
          text="Үйлчлүүлэгчийн мэдээллийг бүртгэхэд алдаа гарлаа."
          open={alerte}
          setClose={handleClose}
        />
      </Dialog>
    </>
  );
};

export default UserModal;
