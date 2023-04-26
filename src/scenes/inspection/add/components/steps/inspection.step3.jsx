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
const Step3 = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);
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
        <Form.Item label="Оношлох боломжтой эсэх" name="emchiinUzleg">
          <Select
            label="Сонгоно уу"
            value={0}
            // onChange={handleChange}
            fullWidth
            size="small"
          >
            <MenuItem value={30}>Тийм</MenuItem>
            <MenuItem value={30}>Үгүй</MenuItem>
          </Select>
        </Form.Item>
        <Form.Item label="Оношийн нэршил" name="uzlegiinTurul">
          <Input />
        </Form.Item>
        <Form.Item label="Оношийн код" name="uzlegiinTurul">
          <Input />
        </Form.Item>
        <Form.Item label="">
          <Button
            color="success"
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Оношийн мэдээлэл хайх
          </Button>
        </Form.Item>
      </Grid>
      <Grid item md={6}>
        <Form.Item label="Дээд шатлалд илгээх эсэх" name="pressureRightAverage">
          <Select
            label="Сонгоно уу"
            value={0}
            // onChange={handleChange}
            fullWidth
            size="small"
          >
            <MenuItem value={30}>Тийм</MenuItem>
            <MenuItem value={30}>Үгүй</MenuItem>
          </Select>
        </Form.Item>
        <Form.Item label="Өвчлөл" name="uvchlul">
          <Input />
        </Form.Item>
        <Form.Item label="Хийгдсэн ажилбар:" name="pressureRightDood">
          <Input />
        </Form.Item>
        <Form.Item label="Өвчний шалтгаан" name="uvchniiShaltgaan">
          <TextArea />
        </Form.Item>
      </Grid>
      <DiagnosisModal open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default Step3;
