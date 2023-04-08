import * as React from "react";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { Box, Button, Divider, Stepper } from "@mui/material";
import InspectionStepper from "../stepper";
import Step2 from "../steps/inspection.step2";
import Step3 from "../steps/inspection.step3";
import Step1 from "../steps/inspection.step1";

const { Option } = Select;
const InspectionModal = ({ open, setOpen = () => {} }) => {
  const [selected, setSelected] = React.useState(0);
  React.useEffect(() => {
    if (!open) {
      setSelected(0);
    }
  }, [open]);
  return (
    <>
      <Modal
        title="Үзлэг бүртгэл"
        width="50%"
        open={open}
        maskClosable={false}
        onCancel={() => setOpen(false)}
        bodyStyle={{ height: "70vh" }}
        footer={
          <div>
            <Box sx={{ pb: 2, height: "10%" }}>
              <Divider />
            </Box>
            <Box width="100%" display="flex" justifyContent="space-between">
              <Button
                color="success"
                variant="contained"
                disabled={selected === 0 && true}
                onClick={() => {
                  setSelected(selected - 1);
                }}
              >
                Буцах
              </Button>
              <Button
                color="success"
                variant="contained"
                onClick={() => {
                  if (selected < 2) setSelected(selected + 1);
                  // else
                }}
              >
                Дараах
              </Button>
            </Box>
          </div>
        }
      >
        <InspectionStepper selected={selected} />
        <Box m="20px" height="95%">
          {selected === 0 && <Step1 />}
          {selected === 1 && <Step2 />}
          {selected === 2 && <Step3 />}
        </Box>
      </Modal>
    </>
  );
};

export default InspectionModal;
