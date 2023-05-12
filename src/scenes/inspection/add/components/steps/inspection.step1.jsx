import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Form, Input } from "antd";

import DeleteIcon from "@mui/icons-material/Delete";

const Step1 = ({ questionsList, setQuestionsList = () => {} }) => {
  const { useForm } = Form;
  const [form] = useForm();
  const onFinish = (value) => {
    setQuestionsList((questionsList) => [...questionsList, value]);
    form.resetFields();
    console.log("first", questionsList.length);
  };

  return (
    <Grid container spacing={1} sx={{ width: "90vw" }}>
      <Grid item xs={12} md={6}>
        <Box>
          {" "}
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            style={{
              height: "55vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Grid container spacing={2}>
              <Grid item> */}
            <Form.Item
              name="question"
              label="Асуулт:"
              className="minw-450 minh-60 "
              rules={[
                { required: true, message: "Асуулт оруулах шаардлагатай." },
              ]}
            >
              <Input placeholder="Хэзээнээс зовиур илэрсэн бэ?" />
            </Form.Item>
            <Form.Item
              name="answer"
              label="Хариулт:"
              className="minw-450 minh-60"
              rules={[
                { required: true, message: "Хариулт оруулах шаардлагатай." },
              ]}
            >
              <Input placeholder="Өчигдөр оройноос" />
            </Form.Item>
            {/* </Grid> */}
            <Button
              variant="contained"
              className="minw-450 mt-50"
              onClick={() => form.submit()}
            >
              Нэмэх
            </Button>
          </Form>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <List className="nch-50 content-y  border">
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
      </Grid>
    </Grid>
  );
};

export default Step1;
