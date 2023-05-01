import { Box } from "@mui/system";
import Topbar from "../global/Topbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AgeChart from "./components/ageChart";
import AppointmentInfo from "./components/appointmentInfo";
import InspectionTime from "./components/inspectionsChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Topbar
        title="МУИС-ын эмнэлгийн веб хуудсанд тавтай морил!"
        subtitle="Өдрийн мэнд, Эмчээ?"
      />
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          <InspectionTime color={colors.primary[400]} />
          <AgeChart color={colors.primary[400]} />
        </Box>
        <Box>
          <Card
            sx={{
              minWidth: 650,
              padding: 2,
              marginTop: 5,
              background: colors.primary[400],
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Цаг захиалсан үйлчлүүлэгчид
            </Typography>
            <CardContent>
              <div className="row-content center-center">
                <img src="assets/coming.svg" />
                <Typography
                  variant="h1"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "5px" }}
                >
                  Тун удахгүй...
                </Typography>
              </div>
              {/* <AppointmentInfo color={colors.primary[400]} /> */}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
