import * as React from "react";
import { Col, Form, Input, InputNumber, Modal, Row, Select } from "antd";
import vitalAxios from "../../../../../utils/vitalnetworkActions";

const { Option } = Select;
const VitalModal = ({ open, setOpen = () => {}, id }) => {
  const { useForm } = Form;
  const [form] = useForm();

  const onSubmit = (value) => {
    vitalAxios
      .post("/", { ...value, patientId: id })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Modal
        title="Амин үзүүлэлт бүртгэл"
        width="50%"
        open={open}
        maskClosable={false}
        onCancel={() => setOpen(false)}
        okText="Хадгалах"
        cancelText="Болих"
        okButtonProps={{ style: { backgroundColor: "green" } }}
        bodyStyle={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onOk={() => {
          form.submit();
        }}
      >
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
              <Form.Item label="Баруун даралт /Дээд/" name="pressureRightDeed">
                <InputNumber className="wp-100" />
              </Form.Item>
              <Form.Item label="Баруун даралт /Доод/" name="pressureRightDood">
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
      </Modal>
    </>
  );
};

export default VitalModal;
