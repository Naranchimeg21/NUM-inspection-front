import { Button, Divider, Tab, Tabs, TextField, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Topbar from "../global/Topbar";
import DataTable from "./components/dataTable";
import ContactTable from "./components/contactTable";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";
import inspectionAxios from "../../utils/inspectionnetworkActions";
import { useEffect } from "react";

const Inspection = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
    const fetchTreatments = async () => {
      const [inspectionResponse, userResponse] = await Promise.all([
        inspectionAxios.get("/all"),
        inspectionAxios.get("/user"),
      ]);

      const inspections = await inspectionResponse.data.data;
      const users = await userResponse.data.data;

      const result = inspections.map((inspection) => {
        const user = users.find((p) => p.id === inspection.userId);
        return {
          inspection,
          user,
        };
      });
      console.log(result);
      setData(result);
    };
    fetchTreatments();
  }, []);
  return (
    <>
      <Topbar
        title="Үзлэг оношилгоо"
        subtitle="Эрүүл биед саруул ухаан"
        children={
          <>
            <h3> Үр дүн: {data.length || 0}</h3>
            <Divider orientation="vertical" className="mr-10 ml-10" />
            <TextField
              id="outlined-textarea"
              label="Хэрэглэгч хайх"
              placeholder="РД, нэр, утасны дугаараар хайна уу."
              size="small"
            />
            <div>
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                startIcon={<FilterAltIcon />}
              >
                Шүүлтүүр
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box p="10px">
                  <img src="assets/csicon.png" width="100px" height="100px" />
                </Box>
              </Popover>
            </div>
          </>
        }
      />
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Нийт үзлэгийн мэдээлэл" />
            <Tab label="Эргэж холбогдох үзлэгийн мэдээлэл" />
          </Tabs>
          <Button
            variant="contained"
            size="small"
            onClick={() => router("/inspection/add")}
          >
            Шинэ үзлэг
          </Button>
        </Box>
        <TabPanel value={value} index={0}>
          <DataTable data={data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ContactTable />
        </TabPanel>
      </Box>
    </>
  );
};

export default Inspection;
