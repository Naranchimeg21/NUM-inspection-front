import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton, Pagination, PaginationItem } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function createData(date, lname, name, type, diagnosis, ajilbar) {
  return { date, lname, name, type, diagnosis, ajilbar };
}

const rows = [
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
  createData(
    "2023-03-20",
    "Нямжав ",
    "Хяналтаар",
    "Наранчимэг",
    "A01.9",
    "Эмчилгээ"
  ),
];

export default function VitalData() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Үзлэгийн өдөр</TableCell>
            <TableCell>Овог</TableCell>
            <TableCell>Нэр</TableCell>
            <TableCell>Үзлэгийн төрөл</TableCell>
            <TableCell>Онош</TableCell>
            <TableCell>Хийгдсэн ажилбар</TableCell>
            <TableCell>Үйлдлүүд</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.lname}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.diagnosis}</TableCell>
              <TableCell>{row.ajilbar}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" color="warning">
                  <RemoveRedEyeIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
