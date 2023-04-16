import { Box, Grid } from "@mui/material";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import inspectionAxios from "../../../../../utils/inspectionnetworkActions";

const Step1 = ({ questionsList, setQuestionsList = () => {} }) => {
  const [state, setState] = useState();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { useForm } = Form;
  const [form] = useForm();
  const onFinish = (value) => {
    setQuestionsList((questionsList) => [...questionsList, value]);
    form.resetFields();
    console.log("first", questionsList.length);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={5}>
          <Form.Item
            name="question"
            label="Асуулт"
            rules={[
              { required: true, message: "Асуулт оруулах шаардлагатай." },
            ]}
          >
            <Input placeholder="Хэзээнээс зовиур илэрсэн бэ?" />
          </Form.Item>
        </Grid>
        <Grid item xs={6} md={5}>
          <Form.Item
            name="answer"
            label="Хариулт"
            rules={[
              { required: true, message: "Хариулт оруулах шаардлагатай." },
            ]}
          >
            <Input placeholder="Өчигдөр оройноос" />
          </Form.Item>
        </Grid>
        <Grid item xs={6} md={2}>
          <Button onClick={() => form.submit()}>Нэмэх</Button>
        </Grid>
        {questionsList.map((question, idx) => (
          <div key={idx}>Asuult:{idx}</div>
        ))}
      </Grid>
    </Form>
  );
};

export default Step1;
