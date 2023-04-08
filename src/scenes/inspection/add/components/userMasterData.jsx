import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, ListItemAvatar, ListItemButton, Tab, Tabs } from "@mui/material";
import { Avatar, Card, Image } from "antd";
import Face3Icon from "@mui/icons-material/Face3";
import Grid from "@mui/material/Grid";
import Header from "../../../../components/Header";
import VitalModal from "./modal/vitalModal";
import InspectionModal from "./modal/inspectionModal";
import MedicModal from "./modal/medicModal";
import { useState } from "react";
import DataTable from "../../components/dataTable";

export default function UserMasterData() {
  const [vitalOpen, setIsVital] = useState(false);
  const [inspecOpen, setInspecOpen] = useState(false);
  const [medicOpen, setMedicOpen] = useState(false);
  const [value, setValue] = useState(0);
  const closeInpecModal = () => {
    setInspecOpen(false);
  };
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
    <Box>
      <Header title="Үйлчлүүлэгчийн үндсэн мэдээлэл" />
      <Grid container spacing={2} className="mt-20">
        <Grid item xs={3}>
          Овог:
        </Grid>
        <Grid item xs={3} className="fw-600">
          Нямжав
        </Grid>
        <Grid item xs={3}>
          Нэр:
        </Grid>
        <Grid item xs={3} className="fw-600">
          Наранчимэг
        </Grid>
        <Grid item xs={3}>
          Регистерийн дугаар:
        </Grid>
        <Grid item xs={3} className="fw-600">
          ТА01232020
        </Grid>
        <Grid item xs={3}>
          Төрөл:
        </Grid>
        <Grid item xs={3} className="fw-600">
          Оюутан
        </Grid>
        <Grid item xs={3}>
          Салбар сургууль:
        </Grid>
        <Grid item xs={3} className="fw-600">
          ХШУИС
        </Grid>
        <Grid item xs={3}>
          Мэргэжил:
        </Grid>
        <Grid item xs={3} className="fw-600">
          Программ хангамж
        </Grid>
        <Grid item xs={3}>
          Нас:
        </Grid>
        <Grid item xs={3} className="fw-600">
          22
        </Grid>
        <Grid item xs={3}>
          Хүйс:
        </Grid>
        <Grid item xs={3} className="fw-600">
          Эмэгтэй
        </Grid>
      </Grid>

      <Grid container spacing={2} className="mt-20">
        <Grid item xs={6} md={3}>
          <Card
            className="maxnw-400 col-content center-center"
            hoverable
            onClick={() => setIsVital(true)}
          >
            <div className="col-content center-center">
              <Image
                preview={false}
                className="minw-70 h-70 wp-40 "
                src="/assets/amin.png"
              />
              <div>
                <h4 className="m-5">Амин үзүүлэлт</h4>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            className="maxnw-400"
            hoverable
            onClick={() => setInspecOpen(true)}
          >
            <div className="col-content center-center">
              <Image
                preview={false}
                className="minw-70 h-70 wp-40 "
                src="/assets/uzleg.png"
              />
              <div>
                <h4 className="m-5">Үзлэг, оношилгоо</h4>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            className="maxnw-400"
            hoverable
            onClick={() => setMedicOpen(true)}
          >
            <div className="col-content center-center">
              <Image
                preview={false}
                className="minw-70 h-70 wp-40 "
                src="/assets/em.png"
              />
              <div>
                <h4 className="m-5"> Эмчилгээний заавар</h4>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Үзлэгийн мэдээлэл" />
            <Tab label="Амин үзүүлэлтийн мэдээлэлүүд" />
            <Tab label="Эмчилгээний зааврууд" />
          </Tabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <DataTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            amin uzuulelm
          </TabPanel>
          <TabPanel value={value} index={2}>
            emchilgee
          </TabPanel>
        </Box>
      </Box>
      <VitalModal open={vitalOpen} setOpen={setIsVital} className="nch-80" />
      <InspectionModal
        open={inspecOpen}
        setOpen={setInspecOpen}
        className="nch-80"
      />
      <MedicModal open={medicOpen} setOpen={setMedicOpen} />
    </Box>
  );
}
