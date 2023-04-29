import * as React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import userAxios from "../../../../../utils/userAxios";

const { Option } = Select;
const UserModal = ({ open, setOpen = () => {} }) => {
  const [form] = Form.useForm();

  const onSubmit = (value) => {
    userAxios.post("/auth/register", {
      ...value,
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
                <Form.Item name="lastName" label="Овог">
                  <Input placeholder="its my testtt" />
                </Form.Item>
                <Form.Item name="registerNumber" label="РД">
                  <Input placeholder="its my testtt" />
                </Form.Item>
                <Form.Item name="password" label="Салбар">
                  <Input placeholder="its my testtt" />
                </Form.Item>
                <Form.Item name="age" label="Нас">
                  <Input placeholder="its my testtt" />
                </Form.Item>
                <Form.Item label="Утас">
                  <Input placeholder="its my testtt" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="firstName" label="Нэр">
                  <Input placeholder="its my testtt" />
                </Form.Item>
                <Form.Item name="isStudent" label="Төрөл">
                  <Select defaultValue="1">
                    <Option value="1">Багш, ажилчин</Option>
                    <Option value="2">Оюутан</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="lastName" label="Мэргэжил">
                  <Input placeholder="its my testtt" />
                </Form.Item>
                <Form.Item label="Хүйс">
                  <Input placeholder="its my testtt" />
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
        {/* <SuccessAlert
          text="Үйлчлүүлэгчийн эмийн жор амжилттай бүртгэлээ."
          open={alerts}
          setOpen={handleClose}
        />
        <ErrorAlert
          text="Үйлчлүүлэгчийн эмийн жорыг бүртгэхэд алдаа гарлаа."
          open={alerte}
          setOpen={handleClose}
        /> */}
      </Dialog>
    </>
  );
};

export default UserModal;
