import * as React from "react";
import { Col, Form, Input, Modal, Popconfirm, Row, Select } from "antd";
import { Box, Button, Divider, Stepper } from "@mui/material";
import InspectionStepper from "../stepper";
import Step2 from "../steps/inspection.step2";
import Step3 from "../steps/inspection.step3";
import Step1 from "../steps/inspection.step1";
import { useState } from "react";
import { useEffect } from "react";
import inspectionAxios from "../../../../../utils/inspectionnetworkActions";

const { Option } = Select;
const InspectionModal = ({ open, setOpen = () => {} }) => {
  const [selected, setSelected] = useState(0);
  const [isPop, setIsPop] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  const { useForm } = Form;
  const [form] = useForm();
  const onSubmit = (value) => {
    inspectionAxios
      .post("/inspection", value)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClose = () => {
    setOpen(false);
    setIsPop(false);
  };
  useEffect(() => {
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
        onCancel={() => setIsPop(true)}
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
        <Box display="flex" justifyContent="center">
          <Popconfirm
            title="Анхааруулга"
            description="Үзлэг бүртгэлээс гарвал өмнөх оруулсан мэдээлэлүүд хадгалагдахгүй
            болохыг анхааруулж байна."
            open={isPop === true && open === true}
            placement="top"
            onConfirm={onClose}
            onCancel={() => setIsPop(false)}
          ></Popconfirm>
        </Box>

        <InspectionStepper selected={selected} />
        <Box m="20px" height="95%">
          <Form form={form} onFinish={onSubmit}>
            {selected === 0 && (
              <Step1
                questionsList={questionsList}
                setQuestionsList={setQuestionsList}
              />
            )}
            {selected === 1 && <Step2 />}
            {selected === 2 && <Step3 />}
          </Form>
        </Box>
      </Modal>
    </>
  );
};

export default InspectionModal;
