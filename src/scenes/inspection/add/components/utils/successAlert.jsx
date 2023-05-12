import { Alert, Snackbar } from "@mui/material";

export const SuccessAlert = ({ text, open, setClose = () => {} }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={() => setClose(false)}
    >
      <Alert
        severity="success"
        onClose={() => setClose(false)}
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};
