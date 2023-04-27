import { TroubleshootSharp } from "@mui/icons-material";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Card, Col, Descriptions, Form, Image, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import DiagnosisModal from "../modal/diagnosisModal";
import { useRef } from "react";
const Step3 = ({ setUndsenOnosh = () => {} }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [form] = Form.useForm();
  const [isDiagnosis, setIsDiagnosis] = useState(false);
  useEffect(() => {
    if (isDiagnosis) form.setFieldsValue({ onoshNer: name, onoshCode: code });
    else form.setFieldsValue({ onoshNer: "", onoshCode: "" });
    setUndsenOnosh({ name: name, value: code });
  }, [name, code, isDiagnosis]);
  return (
    <Grid container spacing={2} className="wp-100">
      <Grid item md={12}>
        <Typography
          variant="h4"
          fontWeight="bold"
          className="text-center mb-30"
        >
          Үзлэгийн дүгнэлт
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Form.Item label="Оношлох боломжтой эсэх" name="isDiagnosis">
          <Select
            label="Сонгоно уу"
            value={false}
            onChange={(e) => setIsDiagnosis(e.target.value)}
            fullWidth
            size="small"
          >
            <MenuItem value={true}>Тийм</MenuItem>
            <MenuItem value={false}>Үгүй</MenuItem>
          </Select>
        </Form.Item>
        {isDiagnosis && (
          <>
            <Form
              form={form}
              labelCol={{ md: 8, sx: 24 }}
              wrapperCol={{ md: 16, sx: 24 }}
            >
              <Form.Item label="Оношийн нэршил" name="onoshNer">
                <Input onChange={(e) => setName(e.target.value)} />
              </Form.Item>
              <Form.Item label="Оношийн код" name="onoshCode">
                <Input onChange={(e) => setName(e.target.value)} />
              </Form.Item>
            </Form>
            <Form.Item label="Оношийн мэдээлэл:">
              <Button
                color="success"
                variant="contained"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Онош хайх
              </Button>
            </Form.Item>
          </>
        )}
      </Grid>
      <Grid item md={6}>
        <Form.Item
          label="Дээд шатлалд илгээх эсэх"
          name="deedShatlaldIlgeesenEseh"
        >
          <Select
            label="Сонгоно уу"
            value={false}
            // onChange={handleChange}
            fullWidth
            size="small"
          >
            <MenuItem value={true}>Тийм</MenuItem>
            <MenuItem value={false}>Үгүй</MenuItem>
          </Select>
        </Form.Item>
        {isDiagnosis && (
          <>
            <Form.Item label="Өвчлөл" name="uvchlul">
              <Input />
            </Form.Item>
            <Form.Item label="Хийгдсэн ажилбар:" name="hiigdsenAjilbar">
              <Input />
            </Form.Item>
            <Form.Item label="Өвчний шалтгаан" name="uvchniiShaltgaan">
              <TextArea />
            </Form.Item>
          </>
        )}
      </Grid>
      <DiagnosisModal
        open={open}
        setOpen={setOpen}
        setName={setName}
        setCode={setCode}
      />
    </Grid>
  );
};

export default Step3;
