import * as React from "react";
import { Col, Form, Input, Modal, Row, Select } from "antd";

const { Option } = Select;
const UserModal = ({ open, setOpen = () => {} }) => {
  return (
    <>
      <Modal
        title="Хэрэглэгч бүртгэл"
        width="50%"
        open={open}
        maskClosable={false}
        onCancel={() => setOpen(false)}
      >
        <Form wrapperCol={{ span: 16 }} labelCol={{ span: 8 }}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Овог">
                <Input placeholder="its my testtt" />
              </Form.Item>
              <Form.Item label="РД">
                <Input placeholder="its my testtt" />
              </Form.Item>
              <Form.Item label="Ner bj boliishd">
                <Input placeholder="its my testtt" />
              </Form.Item>
              <Form.Item label="Ner bj boliishd">
                <Input placeholder="its my testtt" />
              </Form.Item>
              <Form.Item label="Ner bj boliishd">
                <Input placeholder="its my testtt" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Нэр">
                <Input placeholder="its my testtt" />
              </Form.Item>
              <Form.Item label="Төрөл">
                <Select defaultValue="1">
                  <Option value="1">Багш, ажилчин</Option>
                  <Option value="2">Оюутан</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Ner bj boliishd">
                <Input placeholder="its my testtt" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
