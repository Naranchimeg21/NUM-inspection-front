import Topbar from "../../global/Topbar";
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Button, Card, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import DataTable from "../components/dataTable";

const InspectionAdd = () => {
  const steps = ["Хэрэглэгчийн бүртгэл", "Үзлэг бүртгэх", "Баталгаажуулах"];
  const [selected, setSelected] = React.useState(0);
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <PersonSearchIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  return (
    <>
      <Topbar title="Шинэ үзлэг бүртгэх" subtitle="Эрүүл биед саруул ухаан" />
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={selected}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <Card style={{ margin: 20 }}>
        <Box m="20px" height="90%" display="flex" flexDirection="column">
          {selected === 0 && (
            <>
              <TextField
                id="outlined-textarea"
                label="Хэрэглэгч хайх"
                placeholder="РД, нэр, утасны дугаараар хайна уу."
                multiline
                size="small"
              />
              <Button color="success" variant="contained" size="small">
                Буцах
              </Button>

              <Box sx={{ py: 3 }}>
                <DataTable />
              </Box>
            </>
          )}
          {selected === 1 && <div>22222222222222</div>}
          {selected === 2 && <div>33333333333333</div>}
          <Box sx={{ pb: 2 }}>
            <Divider />
          </Box>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Button
              color="success"
              variant="contained"
              // onClick={handlepen}
              onClick={() => {
                setSelected(selected - 1);
              }}
            >
              Буцах
            </Button>
            <Button
              color="success"
              variant="contained"
              // onClick={handlepen}
              onClick={() => {
                setSelected(selected + 1);
              }}
            >
              Дараах
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default InspectionAdd;
