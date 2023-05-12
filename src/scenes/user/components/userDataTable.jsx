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
import EditIcon from "@mui/icons-material/Edit";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";
import { Empty, Spin } from "antd";
import UserModal from "../../inspection/add/components/modal/userModal";
import { useState } from "react";
import UDataModal from "./userDataModal";

export default function UserDataTable({ color, data, loading, getUser = {} }) {
  const router = useNavigate();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [dt, setDt] = useState({});
  return (
    <TableContainer component={Paper} sx={{ background: color }}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          <Pagination
            count={data.length / 10 + 1}
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
            <TableCell className="fw-600">Нэр</TableCell>
            <TableCell className="fw-600">Регистрийн дугаар</TableCell>
            <TableCell className="fw-600">Төрөл</TableCell>
            <TableCell className="fw-600">Салбар</TableCell>
            <TableCell className="fw-600">Мэргэжил</TableCell>
            <TableCell className="fw-600">Үйлдлүүд</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.register}</TableCell>
              <TableCell>{item.isStudent ? "Оюутан" : "Ажилтан"}</TableCell>
              <TableCell>{item.branchSchool}</TableCell>
              <TableCell>{item.major}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  color="warning"
                  xs={{ background: "green" }}
                  onClick={() => {
                    setIsOpen(true);
                    setDt(item);
                  }}
                >
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setOpen(true);
                    setDt(item);
                  }}
                  aria-label="delete"
                  color="warning"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  color="warning"
                  onClick={() => router(`/inspection/add?id=${item.id}`)}
                >
                  <AssignmentIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {loading && (
            <TableRow key="id">
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Spin />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          )}
          {!loading && data.length < 1 && (
            <TableRow key="id">
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Empty />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          )}
        </TableBody>
        <UserModal open={open} setOpen={setOpen} getUser={getUser} data={dt} />
        <UDataModal data={dt} open={isOpen} setOpen={setIsOpen} />
      </Table>
    </TableContainer>
  );
}
