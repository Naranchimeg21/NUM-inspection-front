import * as React from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import vitalAxios from "../../../../../utils/vitalnetworkActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import CompareDialog from "../modal/compareVitalModal";
import { ErrorAlert } from "../utils/errorAlert";
export default function VitalData({ id }) {
  const [vitals, setVitals] = useState([]);
  const [compare, setCompare] = useState([]);
  const [title, setTitle] = useState("");
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = (close) => {
    setOpen(close);
    setError(close);
  };
  useEffect(() => {
    vitalAxios
      .get("/all", { params: { patientId: id } })
      .then((res) => {
        setVitals(res.data.data);
        setTotal(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    vitalAxios
      .get("/compare", { params: { patientId: id, compare: value } })
      .then((res) => {
        setCompare(res.data.data);
        setTitle(res.data.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value]);
  return (
    <div>
      <div className="row-content center-a mb-20">
        <Typography gutterBottom variant="h5" component="div">
          Амин үзүүлэлтийн харьцуулалт хийх
        </Typography>
        <FormControl className="minw-230 ml-10 " size="medium">
          <InputLabel>Харьцуулалт хийх үзүүлэлт</InputLabel>
          <Select
            value={value}
            label="Харьцуулалт хийх үзүүлэлт"
            onChange={(e) => setValue(e.target.value)}
            className=" maxnh-40 "
          >
            <MenuItem value={10}>Даралт</MenuItem>
            <MenuItem value={20}>Пульс</MenuItem>
            <MenuItem value={30}>Сатураци</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            if (value == 0) {
              setError(true);
            } else setOpen(true);
          }}
        >
          Харах
        </Button>
      </div>
      <Typography gutterBottom variant="h5" component="div">
        Нийт амин үзүүлэлт : {total || 0}
      </Typography>
      <div className="row-content  w-100 content-x">
        {vitals.map((item) => (
          <Card
            sx={{ minWidth: 220, width: "25%", maxWidth: 345, margin: "5px" }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                className="text-center"
              >
                {dayjs(item.createdAt).format("YYYY-MM-DD")}
              </Typography>
              <Divider />
              <div className="row-content center-a m-5">
                <img
                  alt="pulse"
                  height="40"
                  width="40"
                  src="/assets/heartRect.png"
                />
                <div>
                  <Typography variant="h6" className="ml-10" color="black">
                    Зүрхний пульс:
                  </Typography>
                  <Typography variant="h5" className="ml-20" color="black">
                    {item.pulse}
                  </Typography>
                </div>
              </div>

              <div className="row-content center-a m-5">
                <img
                  alt="breath"
                  height="40"
                  width="40"
                  src="/assets/breathRect.png"
                />
                <div>
                  <Typography variant="h6" className="ml-10" color="black">
                    Амьсгалын тоо:
                  </Typography>
                  <Typography variant="h5" className="ml-20" color="black">
                    {item.breath}
                  </Typography>
                </div>
              </div>

              <div className="row-content center-a  m-5">
                <img
                  alt="temperature"
                  height="40"
                  width="40"
                  src="/assets/tempRect.png"
                />
                <div>
                  <Typography variant="h6" className="ml-10" color="black">
                    Биеийн дулаан:
                  </Typography>
                  <Typography variant="h5" className="ml-20" color="black">
                    {item.temperature}
                  </Typography>
                </div>
              </div>

              <div className="row-content center-a m-5">
                <img
                  alt="daralt"
                  height="40"
                  width="40"
                  src="/assets/pulseRect.png"
                />
                <div>
                  <Typography variant="h6" className="ml-10" color="black">
                    Цусны даралт:
                  </Typography>
                  <Typography variant="h5" className="ml-20" color="black">
                    {item.pressureRightDood} / {item.pressureRightDeed}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <Divider />
            <CardActions className="text-center">
              <Button size="small">Дэлгэрэнгүй</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <CompareDialog
        data={compare}
        title={title}
        open={open}
        handleClose={handleClose}
      />
      <ErrorAlert
        text="Харьцуулах амин үзүүлэлтийг сонгоогүй байна!"
        open={error}
        setOpen={handleClose}
      />
    </div>
  );
}
