import {
  PlusOneOutlined,
  TroubleshootSharp,
  UploadFile,
} from "@mui/icons-material";
import { Grid, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  Card,
  Col,
  Descriptions,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import inspectionAxios from "../../../../../utils/inspectionnetworkActions";
const Step2 = () => {
  useEffect(() => {}, []);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [isPdf, setIsPdf] = useState("");
  const handleCancel = () => setPreviewOpen(false);
  const getBase64 = async (img, callback = () => {}) => {
    const reader = new FileReader();
    reader.addEventListener("load", async () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
    }
    if (file.type === "application/pdf") {
      setIsPdf(true);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (fileList[0]?.status === "uploading") {
      getBase64(newFileList[0]?.originFileObj, async (url) => {
        console.log("file data", url);
        inspectionAxios.post("/", { params: { url } });
      });
    }
  };
  const uploadButton = (
    <div className="row-content p-5 border center-center w-150 cursor-pointer">
      <UploadFile />
      <div>Upload</div>
    </div>
  );
  return (
    <Grid container spacing={2} className="wp-100">
      <Grid item md={12}>
        <Typography
          variant="h4"
          fontWeight="bold"
          className="text-center mb-30"
        >
          Үзлэгт шаардлагатай мэдээллүүд
        </Typography>
      </Grid>

      <Grid item md={6}>
        <Form.Item label="Эмчийн үзлэг/Амбуляторт/:" name="emchiinUzleg">
          <Select
            label="Сонгоно уу"
            value={0}
            onChange={handleChange}
            fullWidth
            size="small"
          >
            <MenuItem value={10}>Анхан</MenuItem>
            <MenuItem value={20}>Давтан</MenuItem>
          </Select>
        </Form.Item>
        <Form.Item label="Үзлэгийн төрөл нэр:" name="uzlegiinTurul">
          <Input />
        </Form.Item>
        <Form.Item label="Үзлэгийн төрөл код:" name="uzlegiinTurul">
          <Input />
        </Form.Item>
        <Form.Item label="Хүчирхийлэлд өртсөн эсэх" name="undsenOnosh">
          <Select
            label="Сонгоно уу"
            value={0}
            onChange={handleChange}
            fullWidth
            size="small"
          >
            <MenuItem value={30}>Тийм</MenuItem>
            <MenuItem value={30}>Үгүй</MenuItem>
          </Select>
        </Form.Item>
        <Form.Item label="Хөдөлмөр алдалтын хоног:" name="pressureRightDood">
          <InputNumber />
        </Form.Item>
      </Grid>
      <Grid item md={6}>
        <Form.Item
          label="Эргэж холбогдох шаардлагатай эсэх"
          name="pressureRightAverage"
        >
          <Select
            label="Сонгоно уу"
            value={0}
            onChange={handleChange}
            fullWidth
            size="small"
          >
            <MenuItem value={30}>Тийм</MenuItem>
            <MenuItem value={30}>Үгүй</MenuItem>
          </Select>
        </Form.Item>
        <Form.Item label="Шалтгаан:" name="pressureRightAdditional">
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Шинжилгээний бичиг болон бусад:"
          name="shinjilgeeniibichig"
        >
          <Upload
            listType="picture"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </Form.Item>
      </Grid>
    </Grid>
  );
};

export default Step2;
