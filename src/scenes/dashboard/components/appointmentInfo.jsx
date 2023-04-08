import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function createData(name, time, type) {
  return { name, time, type };
}

const rows = [
  createData("Нямжав Наранчимэг", "2023-03-20 12:00", "Үзлэг"),
  createData("Раднаа Анар", "2023-03-20 17:00", "Үзлэг"),
  createData("Энхболд Мягмарсүрэн", "2023-03-21 11:00", "Эмчилгээ"),
];

export default function AppointmentInfo() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Овог нэр</TableCell>
            <TableCell align="right">Захиалсан цаг</TableCell>
            <TableCell align="right">Цаг захиалгийн төрөл</TableCell>
            <TableCell align="right">Үйлдлүүд</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete">
                  <CheckCircleOutlineIcon color="success" />
                </IconButton>
                <IconButton aria-label="delete" color="warning">
                  <HighlightOffIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
