import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { IconButton, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function createData(lname, name, date, reason, phone) {
  return { lname, name, date, reason, phone };
}

const rows = [
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
  createData(
    "Нямжав ",
    "Наранчимэг",
    "2023-03-20",
    "Даралт хэт ихэссэн",
    "88998899"
  ),
];

export default function ContactTable({ color }) {
  return (
    <TableContainer component={Paper} sx={{ background: color }}>
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
            <TableCell className="fw-600">№</TableCell>
            <TableCell className="fw-600">Овог</TableCell>
            <TableCell align="right" className="fw-600">
              Нэр
            </TableCell>
            <TableCell align="right" className="fw-600">
              Үзлэгийн өдөр
            </TableCell>
            <TableCell align="right" className="fw-600">
              Шалтгаан
            </TableCell>
            <TableCell align="right" className="fw-600">
              Утас
            </TableCell>
            <TableCell align="right" className="fw-600">
              Үйлдлүүд
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.lname}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.reason}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">
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
