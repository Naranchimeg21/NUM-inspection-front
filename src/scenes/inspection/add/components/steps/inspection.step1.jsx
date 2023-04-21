import {
  Avatar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import inspectionAxios from "../../../../../utils/inspectionnetworkActions";
import HelpIcon from "@mui/icons-material/Help";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <div className="flex-1 hp-80">
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
        </Grid>
      </Form>{" "}
      <List className="wp-10 content  border">
        {questionsList.map((question, idx) => (
          <ListItem
            className="wp-100"
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{idx + 1}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${question.question} ?`}
              secondary={question.answer}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Step1;
