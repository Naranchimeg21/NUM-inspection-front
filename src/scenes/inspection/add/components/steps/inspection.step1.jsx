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
  useTheme,
} from "@mui/material";
import { Form, Input } from "antd";
import { useState } from "react";
import * as yup from "yup";
import inspectionAxios from "../../../../../utils/inspectionnetworkActions";
import HelpIcon from "@mui/icons-material/Help";
import DeleteIcon from "@mui/icons-material/Delete";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { tokens } from "../../../../../theme";

const Step1 = ({ questionsList, setQuestionsList = () => {} }) => {
  const [state, setState] = useState();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
            {/* </Grid>
            </Grid>
            <Grid item> */}
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
              color="success"
              variant="contained"
              className="minw-450 mt-50"
              onClick={() => form.submit()}
            >
              Нэмэх
            </Button>
          </Form>
        </Box>

        {/* <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
          <FormControl sx={{ display: "flex", gap: "10px", width: "500px" }}>
            <Controller
              name="question"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  color="secondary"
                  autoComplete="off"
                  autoFocus
                  label="Асуулт"
                  placeholder="Хэзээнээс зовиур илэрсэн бэ?"
                  variant="standard"
                  error={!!errors.question}
                  helperText={errors.question?.message}
                />
              )}
            />
            <Controller
              name="answer"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  color="secondary"
                  autoComplete="off"
                  label="Хариулт"
                  type="text"
                  variant="standard"
                  placeholder="Өчигдөр оройноос"
                  error={!!errors.answer}
                  helperText={errors.answer?.message}
                />
              )}
            />
            {error && <Box sx={{ color: colors.redAccent[500] }}>{error}</Box>}

            <Divider />
            <Button variant="outlined" color="secondary" type="submit">
              Нэмэх
            </Button>
          </FormControl>
        </form> */}
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
