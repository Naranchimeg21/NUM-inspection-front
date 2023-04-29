import * as React from "react";
import { Form, Input, Select } from "antd";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useState } from "react";

const { Option } = Select;

const MedicModal = ({ open, setOpen = () => {} }) => {
  const [type, setType] = useState();
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
          <Form wrapperCol={{ span: 16 }} labelCol={{ span: 8 }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Form.Item label="Онош">
                  <Input placeholder="А09.1" />
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
                      <Input placeholder="Дусал тариа" />
                    </Form.Item>
                    <Form.Item label="Хэдэн удаа">
                      <Input placeholder="" />
                    </Form.Item>
                    {type == 1 && (
                      <Form.Item label="Талбай">
                        <Input placeholder="" />
                      </Form.Item>
                    )}
                  </>
                )}
              </Grid>
              <Grid item xs={6}>
                <Form.Item label="Мэдээлэл оруулах">
                  <Button
                    variant="contained"
                    size="medium"
                    // onClick={() => form.submit()}
                  >
                    Үзлэг сонгох
                  </Button>
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
                      <Input />
                    </Form.Item>
                    {type == 2 ? (
                      <Form.Item label="Тун">
                        <Input />
                      </Form.Item>
                    ) : (
                      <Form.Item label="Хугацаа">
                        <Input />
                      </Form.Item>
                    )}
                    {type == 1 && (
                      <Form.Item label="Давтамж">
                        <Input />
                      </Form.Item>
                    )}
                  </>
                )}
              </Grid>
              <Button
                variant="contained"
                size="medium"
                className="mr-50 ml-50 mt-20"
                fullWidth
                // onClick={() => form.submit()}
              >
                Эмчилгээний заавар нэмэх
              </Button>
            </Grid>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained">Хадгалах</Button>

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

export default MedicModal;
