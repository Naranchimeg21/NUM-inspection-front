import { Box } from "@mui/system";
import Topbar from "../global/Topbar";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Report = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <Box>
      <Topbar title="Үзлэгийн тайлан" subtitle="hghg" />
      <Box
        display="flex"
        m="20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <h4>Эхлэх хугацаа:</h4>
            <DatePicker
              defaultValue={dayjs()}
              onChange={(newValue) => setValue(newValue)}
            />
            <h4>Дуусах хугацаа:</h4>
            <DatePicker
              defaultValue={dayjs()}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Button variant="contained" size="large" start={<CloudDownloadIcon />}>
          Татах
        </Button>
      </Box>
    </Box>
  );
};

export default Report;
