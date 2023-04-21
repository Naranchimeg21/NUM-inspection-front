import { TroubleshootSharp } from "@mui/icons-material";
import { Grid, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { Card, Col, Descriptions, Form, Image, Row } from "antd";
// import { Card } from "antd";
import { useEffect, useState } from "react";
import Header from "../../../../../components/Header";
import ContactTable from "../../../components/contactTable";
import DataTable from "../../../components/dataTable";
import InspectionModal from "../modal/inspectionModal";
import MedicModal from "../modal/medicModal";
import VitalModal from "../modal/vitalModal";

const Step2 = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <Form.Item label="Эмчийн үзлэг" name="emchiinUzleg">
            option
          </Form.Item>
          <Form.Item label="Үзлэгийн төрөл" name="uzlegiinTurul">
            z00-z40
          </Form.Item>
          <Form.Item label="Үндсэн онош" name="undsenOnosh">
            onosh
          </Form.Item>
          <Form.Item label="Сатураци" name="uvchniiShaltgaan">
            uvchniiShaltgaan
          </Form.Item>
          <Form.Item label="Биеийн температур" name="uvchlul">
            option
          </Form.Item>
          <Form.Item label="Өндөр" name="deedShatlaldIlgeesenEseh">
            deedShatlaldIlgeesenEseh
          </Form.Item>
        </Grid>
        <Grid item>
          <Form.Item label="Баруун даралт /Доод/" name="pressureRightDood">
            shinjilgeeniiBichig
          </Form.Item>
          <Form.Item label="Баруун даралт /Дундаж/" name="pressureRightAverage">
            ergejHolbogdohEseh
          </Form.Item>
          <Form.Item
            label="Баруун даралт /Нэмэлт/"
            name="pressureRightAdditional"
          >
            shaltgaan
          </Form.Item>
          <Form.Item label="БЖИ" name="HuchirhiileldUrtsunEseh">
            HuchirhiileldUrtsunEseh
          </Form.Item>
          <Form.Item label="Жин" name="hiigdsenAjilbar">
            hiigdsenAjilbar
          </Form.Item>
          <Form.Item label="Хөдөлмөр алдалт" name="hudulmurAldaltiinHonog">
            hudulmurAldaltiinHonog
          </Form.Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Step2;
