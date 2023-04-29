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
import { IconButton, Pagination, PaginationItem, Tooltip } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import dayjs from "dayjs";

export default function DataTable({ data, color }) {
  console.log("data", data);
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
            <TableCell className="fw-600">Үзлэгийн өдөр</TableCell>
            <TableCell className="fw-600">Овог</TableCell>
            <TableCell className="fw-600">Нэр</TableCell>
            <TableCell className="fw-600">Үзлэгийн төрөл</TableCell>
            <TableCell className="fw-600">Онош</TableCell>
            <TableCell className="fw-600">Хийгдсэн ажилбар</TableCell>
            <TableCell className="fw-600">Үйлдлүүд</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={row.inspection.id}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell>
                {dayjs(row.inspection.createdAt).format("YYYY-MM-DD")}
              </TableCell>
              {row.user && (
                <>
                  <TableCell>{row.user.lastName || ""}</TableCell>
                  <TableCell>{row.user.firstName || ""}</TableCell>
                </>
              )}

              <TableCell>{row.inspection.emchiinUzleg}</TableCell>
              {row.inspection.isDiagnosis ? (
                <TableCell>
                  {row?.inspection?.undsenOnosh?.value} -
                  {row?.inspection?.undsenOnosh?.name}
                </TableCell>
              ) : (
                <TableCell>Онош тогтоогдоогүй </TableCell>
              )}

              <TableCell>{row.inspection.hiigdsenAjilbar}</TableCell>
              <TableCell>
                <Tooltip title="Дэлгэрэнгүйг харах">
                  <IconButton
                    sx={{ background: "#3076cb", color: "#ffff" }}
                    className="mr-10"
                  >
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
