import { Box } from "@mui/system";
import Topbar from "../global/Topbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AgeChart from "./components/ageChart";
import AppointmentInfo from "./components/appointmentInfo";
import InspectionTime from "./components/inspectionsChart";
const Dashboard = () => {
  return (
    <>
      <Topbar
        title="МУИС-ын эмнэлгийн веб хуудсанд тавтай морил!"
        subtitle="Өдрийн мэнд, Эмчээ?"
      />
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          <InspectionTime />
          <AgeChart />
        </Box>
        <Box>
          <Card sx={{ minWidth: 650, padding: 2, marginTop: 5 }}>
            <Typography gutterBottom variant="h5" component="div">
              Цаг захиалсан үйлчлүүлэгчид
            </Typography>
            <CardContent>
              <AppointmentInfo />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
