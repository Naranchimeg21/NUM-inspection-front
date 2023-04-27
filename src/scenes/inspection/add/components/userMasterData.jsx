import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, ListItemAvatar, ListItemButton, Tab, Tabs } from "@mui/material";
import { Avatar, Card, Empty, Image, Select } from "antd";
import Face3Icon from "@mui/icons-material/Face3";
import Grid from "@mui/material/Grid";
import Header from "../../../../components/Header";
import VitalModal from "./modal/vitalModal";
import InspectionModal from "./modal/inspectionModal";
import MedicModal from "./modal/medicModal";
import { useState } from "react";
import DataTable from "../../components/dataTable";
import VitalData from "./data/vitalData";
import { useEffect } from "react";
import vitalAxios from "../../../../utils/vitalnetworkActions";
import MedicineModal from "./modal/medicineModal";
import InstructionData from "./data/instructionData";
import InspectionData from "./data/inspectionData";
const { Option } = Select;
export default function UserMasterData({ data }) {
  const [vitalOpen, setIsVital] = useState(false);
  const [inspecOpen, setInspecOpen] = useState(false);
  const [medicOpen, setMedicOpen] = useState(false);
  const [medicineOpen, setMedicineOpen] = useState(false);
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

  useEffect(() => {
    vitalAxios
      .get("/all", { params: { patientId: data.id } })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data.id]);
  return (
    <Box>
      {data.id ? (
        <>
          {" "}
          <Header title="Үйлчлүүлэгчийн үндсэн мэдээлэл" />
          <Grid container spacing={2} className="mt-20">
            <Grid item xs={3}>
              Овог:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.lastName}
            </Grid>
            <Grid item xs={3}>
              Нэр:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.firstName}
            </Grid>
            <Grid item xs={3}>
              Регистерийн дугаар:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.register}
            </Grid>
            <Grid item xs={3}>
              Төрөл:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.isStudent ? "Оюутан" : "Ажилчин"}
            </Grid>
            <Grid item xs={3}>
              Салбар сургууль:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.branchSchool}
            </Grid>
            <Grid item xs={3}>
              Мэргэжил:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.major}
            </Grid>
            {data.isStudent && (
              <>
                <Grid item xs={3}>
                  Түвшин:
                </Grid>
                <Grid item xs={3} className="fw-600">
                  {data.grade}
                </Grid>
                <Grid item xs={3}>
                  Зэрэг:
                </Grid>
                <Grid item xs={3} className="fw-600">
                  {data.degree}
                </Grid>
              </>
            )}
            <Grid item xs={3}>
              Нас:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.age}
            </Grid>
            <Grid item xs={3}>
              Хүйс:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.gender}
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
                    src="/assets/emchilgee.png"
                  />
                  <div>
                    <h4 className="m-5"> Эмчилгээний заавар</h4>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card
                className="maxnw-400"
                hoverable
                onClick={() => setMedicineOpen(true)}
              >
                <div className="col-content center-center">
                  <Image
                    preview={false}
                    className="minw-70 h-70 wp-40 "
                    src="/assets/emiinjor.png"
                  />
                  <div>
                    <h4 className="m-5">Эмийн жор</h4>
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
                <Tab label="Эмийн жорууд" />
              </Tabs>
            </Box>
            <Box>
              <TabPanel value={value} index={0}>
                <InspectionData id={data.id} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <VitalData id={data.id} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                emchilgee
              </TabPanel>
              <TabPanel value={value} index={3}>
                <InstructionData id={data.id} />
              </TabPanel>
            </Box>
          </Box>
        </>
      ) : (
        <Empty />
      )}
      <VitalModal
        open={vitalOpen}
        setOpen={setIsVital}
        id={data.id}
        className="nch-80"
      />
      <InspectionModal
        id={data.id}
        isOpen={inspecOpen}
        setIsOpen={setInspecOpen}
        className="nch-80"
      />
      <MedicModal id={data.id} open={medicOpen} setOpen={setMedicOpen} />
      <MedicineModal
        id={data.id}
        open={medicineOpen}
        setOpen={setMedicineOpen}
      />
    </Box>
  );
}
