import { Alert, Snackbar } from "@mui/material";

export const ErrorAlert = ({ text, open, setOpen = () => {} }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};
