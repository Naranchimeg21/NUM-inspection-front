import {
  Button,
  Divider,
  Pagination,
  PaginationItem,
  Tab,
  Tabs,
  TextField,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import { useState } from "react";
import Topbar from "../global/Topbar";
import DataTable from "./components/dataTable";
import ContactTable from "./components/contactTable";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const Inspection = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
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
                color="success"
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
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>
              </Popover>
            </div>
          </>
        }
      />
      <Box m="20px" sx={{ background: colors.primary[400] }}>
        <Box display="flex" justifyContent="space-between">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Нийт үзлэгийн мэдээлэл" />
            <Tab label="Эргэж холбогдох үзлэгийн мэдээлэл" />
          </Tabs>
          <Button
            color="success"
            variant="contained"
            size="large"
            onClick={() => router("/inspection/add")}
          >
            Шинэ үзлэг
          </Button>
        </Box>
        <TabPanel value={value} index={0}>
          <DataTable color={colors.primary[400]} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ContactTable color={colors.primary[400]} />
        </TabPanel>
      </Box>
    </>
  );
};

export default Inspection;
