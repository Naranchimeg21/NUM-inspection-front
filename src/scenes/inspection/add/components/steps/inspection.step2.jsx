import { TroubleshootSharp } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
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
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Ухаан санаа" name="emchiinUzleg">
            option
          </Form.Item>
          <Form.Item label="Пульс" name="uzlegiinTurul">
            z00-z40
          </Form.Item>
          <Form.Item label="Амьсгалын тоо" name="undsenOnosh">
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
          <Form.Item label="Жин" name="hiigdsenAjilbar">
            hiigdsenAjilbar
          </Form.Item>
          <Form.Item label="БЖИ" name="HuchirhiileldUrtsunEseh">
            HuchirhiileldUrtsunEseh
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Баруун даралт /Дээд/" name="hudulmurAldaltiinHonog">
            hudulmurAldaltiinHonog
          </Form.Item>
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
         
        </Col>
      </Row>
    </>
  );
};

export default Step2;
