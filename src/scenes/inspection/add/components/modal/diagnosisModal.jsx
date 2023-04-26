import * as React from "react";
import { Divider, Form, Input } from "antd";
import {
  Alert,
  Avatar,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import instructionAxios from "../../../../../utils/instructionNetwork";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { SuccessAlert } from "../utils/successAlert";
import { ErrorAlert } from "../utils/errorAlert";
import { useEffect } from "react";
import customAxios from "../../../../../utils/customAxios";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

const DiagnosisModal = ({ id, open, setOpen = () => {} }) => {
  const pageSize = 5;
  const [form] = Form.useForm();
  const [pageNum, setPageNum] = useState(0);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalTypes, setGeneralTypes] = useState([]);
  const [types, setTypes] = useState([]);
  const [subtypes, setSubtypes] = useState([]);
  const [generalTypeCode, setGeneralTypeCode] = useState("");
  const [typeCode, setTypeCode] = useState("");
  const [subtypeCode, setSubtypeCode] = useState("");
  const [search, setSearch] = useState("");
  const [typeValue, setValueType] = useState("Сонгох");
  const handleSelectGeneralType = (e) => {
    console.log("handleSelectGeneralType====>", e.target.value);
    setGeneralTypeCode(e.target.value);
    setTypeCode("");
    setSubtypeCode("");
    if (e.target.value.length > 0) {
      customAxios
        .get("/type", { params: { diagnosisGeneralId: e.target.value } })
        .then((res) => {
          setTypes(res.data.data);
          console.log("type", res);
        });
    } else {
      setTypes([]);
      setSubtypes([]);
    }
  };
  const handleSelectType = (e) => {
    console.log("handleSelectType====>", handleSelectType);
    setTypeCode(e.target.value);
    setSubtypeCode("");
    if (e.target.value.length > 0) {
      customAxios
        .get("/subtype", { params: { diagnosisTypeId: e.target.value } })
        .then((res) => {
          console.log("subtype", res);
          setSubtypes(res.data.data);
        });
    } else {
      setSubtypes([]);
    }
  };
  const handleSelectSubtype = (e) => {
    setSubtypeCode(e.target.value);
  };

  useEffect(() => {
    customAxios.get("/general").then((res) => {
      const data = res.data.data;
      setGeneralTypes(data);
    });
  }, []);

  useEffect(() => {
    customAxios
      .get("/all", {
        params: {
          id: generalTypeCode,
          diagnosisTypeId: typeCode,
          diagnosisSubtypeId: subtypeCode,
          search: search,
        },
      })
      .then((res) => {
        console.log("data", res.data);
        setItems(res.data.data);
        setTotal(res.data.total);
      });
  }, [generalTypeCode, typeCode, subtypeCode, search]);
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
        <DialogTitle>Онош хайх</DialogTitle>

        <DialogContent>
          <Form layout="vertical" form={form}>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Form.Item name="generalType" label="Ерөнхий төрөл">
                  <Select
                    placeholder="Cонгох"
                    size="small"
                    label="Сонгоно уу"
                    onChange={handleSelectGeneralType}
                    className="w-120"
                    defaultValue=""
                    fullWidth
                  >
                    <MenuItem value="">Сонгох</MenuItem>
                    {generalTypes &&
                      generalTypes.map((item, idx) => (
                        <MenuItem value={item?.id} key={idx}>
                          {`[${item?.generalCode}] - ${item.generalType}`}
                        </MenuItem>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item name="type" label="Төрөл">
                  <Select
                    placeholder="Cонгох"
                    size="small"
                    label="Сонгоно уу"
                    onChange={handleSelectType}
                    defaultValue=""
                    className="w-120"
                    fullWidth
                  >
                    <MenuItem value="">Сонгох</MenuItem>
                    {types &&
                      types.map((item, idx) => (
                        <MenuItem value={item.id} key={idx}>
                          {`[${item?.code}] - ${item.type}`}
                        </MenuItem>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item name="subtype" label="Дэд төрөл">
                  <Select
                    placeholder="Cонгох"
                    size="small"
                    label="Сонгоно уу"
                    onChange={handleSelectSubtype}
                    className="w-120"
                    defaultValue=""
                    fullWidth
                  >
                    <MenuItem value="">Сонгох</MenuItem>
                    {subtypes &&
                      subtypes.map((item, idx) => (
                        <MenuItem value={item.id} key={idx}>
                          {`[${item?.subtypeCode}] - ${item.subtype}`}
                        </MenuItem>
                      ))}
                  </Select>
                </Form.Item>
                <Divider />
                <Form.Item name="title" label="Оношийн нэр эсвэл код">
                  <Input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Гэдэсний тодорхойгүй вирүст халдвар - гэдэсний"
                  />
                </Form.Item>
                <div>Оношийн нэрийг эсвэл кодыг ойролцоогоор оруулна уу.</div>
                <div>Жишээ нь:</div>
                <div>Гэдэсний тодорхойгүй вирүст халдвар - гэдэсний</div>
                <div>A08.4 - A08</div>
              </Grid>
              <Grid item xs={8} spacing={4}>
                <Typography variant="h6" fontWeight="bold" className="mb-20">
                  Хайлтын илэрц: {total}
                </Typography>
                <List className="content-y  border">
                  {items.map((item, idx) => (
                    <ListItem
                      className="wp-100"
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <AddCircleOutlineOutlined />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>{item.value}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${item.name}`}
                        secondary={item.additional}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Form>
        </DialogContent>
        <DialogActions>
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

export default DiagnosisModal;
