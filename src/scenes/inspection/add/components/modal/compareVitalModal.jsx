import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DualAxes } from "@ant-design/plots";
import { Line } from "@ant-design/plots";
import dayjs from "dayjs";

export default function CompareDialog({
  data,
  title,
  open,
  handleClose = () => {},
}) {
  //   const config = {
  //   data,
  //   xField: "createdAt",
  //   yField:"pulse"
  //   xAxis: {
  //     label: {
  //       formatter: (v) => dayjs(v).format("YYYY-MM-DD"),
  //     },
  //   },

  //   seriesField: "pulse",

  //   color: () => {
  //     return title === "Даралт"
  //       ? "#F4664A"
  //       : title === "Зүрхний пульс"
  //       ? "#30BF78"
  //       : "#FAAD14";
  //   },
  // };
  const config = {
    data: [data, data, data],

    xField: "createdAt",
    yField:
      title === "Даралт"
        ? ["pressureRightDeed", "pressureRightDood", "pressureRightAverage"]
        : title === "Зүрхний пульс"
        ? ["pulse"]
        : ["saturation"],
    xAxis: {
      label: {
        formatter: (v) => dayjs(v).format("YYYY-MM-DD"),
      },
    },
    meta: {
      pressureRightDeed: {
        alias: "Дээд даралт",
      },
      pressureRightDood: {
        alias: "Доод даралт",
      },
      pressureRightAverage: {
        alias: "Дундаж даралт",
      },
      pulse: {
        alias: "Зүрхний пульс",
      },
      saturation: {
        alias: "Хучилтөрөгчийн сатураци",
      },
    },
    geometryOptions: [
      {
        geometry: "line",
        color: "#5B8FF9",
      },
      {
        geometry: "line",
        color: "#5AD8A6",
      },
      {
        geometry: "line",
        color: "#ceeeeb",
      },
    ],
  };
  return (
    <Dialog disableEscapeKeyDown open={open} onClose={() => handleClose(false)}>
      <DialogTitle>{title} харьцуулалт</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
          <DualAxes {...config} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
