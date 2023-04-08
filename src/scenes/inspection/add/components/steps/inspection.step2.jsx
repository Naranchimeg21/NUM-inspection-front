import { TroubleshootSharp } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { Card, Col, Descriptions, Image, Row } from "antd";
// import { Card } from "antd";
import { useState } from "react";
import Header from "../../../../../components/Header";
import ContactTable from "../../../components/contactTable";
import DataTable from "../../../components/dataTable";
import InspectionModal from "../modal/inspectionModal";
import MedicModal from "../modal/medicModal";
import VitalModal from "../modal/vitalModal";

const Step2 = () => {
  const [state, setState] = useState();
  const [value, setValue] = useState(0);
  const [vitalOpen, setVitalOpen] = useState(false);
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [medicOpen, setMedicOpen] = useState(false);
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
  return <>test2</>;
};

export default Step2;
