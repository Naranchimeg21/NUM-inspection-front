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
import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import inspectionAxios from "../../../../../utils/inspectionnetworkActions";

export default function InspectionData({ id, color }) {
  const [uzleg, setUzleg] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    inspectionAxios
      .get("/all", { params: { userId: id } })
      .then((res) => {
        setUzleg(res.data.data);
        setTotal(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TableContainer component={Paper} sx={{ background: color }}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          <Pagination
            count={total / 10 + 1}
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
            <TableCell className="fw-600">Эмчийн үзлэг</TableCell>
            <TableCell className="fw-600">Үзлэгийн төрөл</TableCell>
            <TableCell className="fw-600">Онош</TableCell>
            <TableCell className="fw-600">Хийгдсэн ажилбар</TableCell>
            <TableCell className="fw-600">Үйлдлүүд</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uzleg.map((item, idx) => (
            <TableRow key={item.createdAt}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell>
                {dayjs(item.createdAt).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell>{item.emchiinUzleg}</TableCell>
              <TableCell>{item.uzlegiinTurul}</TableCell>
              {item.isDiagnosis ? (
                <TableCell>
                  {item.undsenOnosh.value} - {item.undsenOnosh.name}
                </TableCell>
              ) : (
                <TableCell>Оношлогдоогүй</TableCell>
              )}

              <TableCell>{item.hiigdsenAjilbar}</TableCell>
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
