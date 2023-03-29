import { Button, Pagination, PaginationItem, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import { useState } from "react";
import Topbar from "../global/Topbar";
import DataTable from "./components/dataTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactTable from "./components/contactTable";
import { useNavigate } from "react-router-dom";

const Inspection = () => {
  const [value, setValue] = useState(0);
  const router = useNavigate();

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
      <Topbar title="Үзлэг оношилгоо" subtitle="Эрүүл биед саруул ухаан" />
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Нийт үзлэгийн мэдээлэл" />
            <Tab label="Эргэж холбогдох шаардлагатай үзлэгийн мэдээлэл" />
          </Tabs>
          <Button
            color="success"
            variant="contained"
            // onClick={handlepen}
            onClick={() => {
              router("/inspection/add");
            }}
          >
            Шинэ үзлэг
          </Button>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <Card>
              <DataTable />
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ContactTable />
          </TabPanel>
          <Pagination
            count={data.length}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Box>
      </Box>
    </>
  );
};

export default Inspection;
