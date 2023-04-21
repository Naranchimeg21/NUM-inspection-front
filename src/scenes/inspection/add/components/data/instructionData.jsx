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
import instructionAxios from "../../../../../utils/instructionNetwork";
import { useState } from "react";
import dayjs from "dayjs";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function InstructionData({ id }) {
  const [instructions, setInstructions] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    instructionAxios
      .get("/", { params: { userId: id } })
      .then((res) => {
        setInstructions(res.data.data);
        setTotal(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DownloadPDF = (id) => {
    instructionAxios({
      url: "/download",
      method: "GET",
      params: { id },
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `jor.pdf`);
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          <Pagination
            count={total / 5 === 1 ? total / 5 : total / 5 + 1}
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
            <TableCell>Жор олгосон өдөр</TableCell>
            <TableCell>Жорын нэр</TableCell>
            <TableCell>Үйлдлүүд</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instructions.map((item, idx) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell>
                {dayjs(item.createdAt).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell>{item.name || "Нэргүй жор"}</TableCell>
              <TableCell>
                <Tooltip title="Урьчилсан байдлаар харах">
                  <IconButton
                    // onClick={DownloadPDF}
                    sx={{ background: "#3076cb", color: "#ffff" }}
                    className="mr-10"
                  >
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="PDF татах">
                  <IconButton
                    onClick={() => DownloadPDF(item.id)}
                    sx={{ background: "#0140a0", color: "#ffff" }}
                  >
                    <CloudDownloadIcon />
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
