import * as React from "react";
import { Form, Input, Modal, Select } from "antd";
import { Button, Grid, Stepper } from "@mui/material";
import { useState } from "react";

const { Option } = Select;

const MedicModal = ({ open, setOpen = () => {} }) => {
  const [type, setType] = useState();
  return (
    <>
      <Modal
        title="Эмчилгээний заавар бүртгэл"
        width="50%"
        open={open}
        maskClosable={false}
        okText="Хадгалах"
        cancelText="Болих"
        okButtonProps={{ style: { backgroundColor: "green" } }}
        onCancel={() => setOpen(false)}
        bodyStyle={{ height: "70vh" }}
      >
        <Form wrapperCol={{ span: 16 }} labelCol={{ span: 8 }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Form.Item label="Оношийн нэр">
                <Input placeholder="its my testtt" />
              </Form.Item>
              <Form.Item label="Төрөл">
                <Select defaultValue="" onSelect={(value) => setType(value)}>
                  <Option value="1">Сэргээн засах эмчилгээ</Option>
                  <Option value="2">Энгийн</Option>
                </Select>
              </Form.Item>

              {type && (
                <>
                  <Form.Item label="Хийгдэх эмчилгээ">
                    <Input placeholder="its my testtt" />
                  </Form.Item>
                  <Form.Item label="Хэдэн удаа">
                    <Input placeholder="its my testtt" />
                  </Form.Item>
                  {type == 1 && (
                    <Form.Item label="Талбай">
                      <Input placeholder="its my testtt" />
                    </Form.Item>
                  )}
                </>
              )}
            </Grid>
            <Grid item xs={6}>
              <Form.Item label="Оношийн код">
                <Input placeholder="its my testtt" />
              </Form.Item>
              <Form.Item label="Эмчилгээний нэр">
                {type == 1 ? (
                  <Select defaultValue="">
                    <Option value="1">Сэргээн засах эмчилгээ 1</Option>
                    <Option value="2">Сэргээн засах эмчилгээ 2</Option>
                  </Select>
                ) : (
                  <Select defaultValue="">
                    <Option value="1">Энгийн эмчилгээ 1</Option>
                    <Option value="2">Энгийн эмчилгээ 2</Option>
                  </Select>
                )}
              </Form.Item>
              {type && (
                <>
                  <Form.Item label="Эрхтэн">
                    <Input placeholder="its my testtt" />
                  </Form.Item>
                  {type == 2 ? (
                    <Form.Item label="Тун">
                      <Input placeholder="its my testtt" />
                    </Form.Item>
                  ) : (
                    <Form.Item label="Хугацаа">
                      <Input placeholder="its my testtt" />
                    </Form.Item>
                  )}
                  {type == 1 && (
                    <Form.Item label="Давтамж">
                      <Input placeholder="its my testtt" />
                    </Form.Item>
                  )}
                </>
              )}
            </Grid>
            {type && (
              <Grid item sx={12}>
                <Button
                  color="success"
                  variant="contained"
                  size="medium"
                  className="w-100"
                  // onClick={() => form.submit()}
                >
                  Эмчилгээний заавар нэмэх
                </Button>
              </Grid>
            )}
          </Grid>
        </Form>
      </Modal>
    </>
  );
};

export default MedicModal;
