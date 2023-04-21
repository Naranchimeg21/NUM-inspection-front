import React from "react";
import { Bar } from "@ant-design/plots";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AgeChart = ({color}) => {
  const data = [
    {
      type: `18-22`,
      sales: 20,
    },
    {
      type: `23-28`,
      sales: 15,
    },
    {
      type: `29-34`,
      sales: 12,
    },
    {
      type: `35-40`,
      sales: 21,
    },
    {
      type: `40-45`,
      sales: 7,
    },
  ];
  const config = {
    data,
    xField: "sales",
    yField: "type",
    meta: {
      type: {
        alias: "Нас",
      },
      sales: {
        alias: "Үйлчлүүлэгч",
      },
    },
    barStyle: {
      fill: "l(0) 0:#9582E6 1:#05A6EF )",
      radius: [20, 20, 20, 20],
    },
    minBarWidth: 10,
    maxBarWidth: 10,
  };
  return (
    <Card
      sx={{ minWidth: "48%", padding: 2, marginLeft: 2, background: color }}
    >
      <Typography gutterBottom variant="h5" component="div">
        үйлчлүүлэгчдийн тоо насаар
      </Typography>
      <CardContent>
        <Bar {...config} height={200} />
      </CardContent>
    </Card>
  );
};
export default AgeChart;
