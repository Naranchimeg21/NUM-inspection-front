import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { Card, Col, Descriptions, Image, Row } from "antd";
// import { Card } from "antd";
import { useState } from "react";
import Header from "../../../../../components/Header";

const Step2 = () => {
  const [state, setState] = useState();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
      </div>
    );
  }
  return (
    <>
      <Box>
        <Header title="Үйлчлүүлэгчийн үндсэн мэдээлэл" />
        <Descriptions column={2}>
          <Descriptions.Item label="Овог">yy</Descriptions.Item>
          <Descriptions.Item label="Нэр">aa</Descriptions.Item>
          <Descriptions.Item label="Регистрийн дугаар">aaa</Descriptions.Item>
          <Descriptions.Item label="Төрөл">aa</Descriptions.Item>
          <Descriptions.Item label="Ажлын байр">gg</Descriptions.Item>
          <Descriptions.Item label="Мэргэжил">yy</Descriptions.Item>
          <Descriptions.Item label="Нас">gg</Descriptions.Item>
          <Descriptions.Item label="Хүйс">yy</Descriptions.Item>
        </Descriptions>
      </Box>
      <Box display="flex">
        <Card
          className="m-10 col-content center-center  w-200"
          onClick={() => {
            alert("wtf");
          }}
          hoverable
        >
          <div className=" col-content center-center">
            <Image src="/assets/amin.png" preview={false} alt="" height={60} />
          </div>
          <div className="fs-16 fw-600"> Амин үзүүлэлт</div>
        </Card>
        <Card className="m-10 col-content center-center w-200" hoverable>
          <div className=" col-content center-center">
            <Image src="/assets/uzleg.png" preview={false} alt="" height={60} />
          </div>
          <div className="fs-16 fw-600">Үзлэг, оношилгоо</div>
        </Card>
        <Card
          className="m-10 col-content center-center w-200 "
          style={{ padding: "5px" }}
          hoverable
        >
          <div className=" col-content center-center">
            <Image src="/assets/em.png" preview={false} alt="" height={60} />
          </div>

          <div className="fs-16 fw-600 text-center"> Эмчилгээний заавар</div>
        </Card>
      </Box>
      <Box>
        <Header title="Үйлчлүүлэгчийн үзлэгийн түүх" />
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Үзлэгийн түүх" />
          <Tab label="Амин үзүүлэлт" />
          <Tab label="Эмчилгээний зааврууд" />
        </Tabs>
      </Box>
    </>
  );
};

export default Step2;
