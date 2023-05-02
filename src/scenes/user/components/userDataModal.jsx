import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

const UDataModal = ({ data, open, setOpen = () => {} }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        disableEscapeKeyDown
        open={open}
        onClose={() => setOpen(true)}
      >
        <DialogTitle>Үйлчлүүлэгчийн хувийн мэдээлэл</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} className="mt-20  mb-20">
            <Grid item xs={3}>
              Овог:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.lastName}
            </Grid>
            <Grid item xs={3}>
              Нэр:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.firstName}
            </Grid>
            <Grid item xs={3}>
              Регистерийн дугаар:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.register}
            </Grid>
            <Grid item xs={3}>
              Төрөл:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.isStudent ? "Оюутан" : "Ажилчин"}
            </Grid>
            <Grid item xs={3}>
              Салбар сургууль:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.branchSchool}
            </Grid>
            <Grid item xs={3}>
              Мэргэжил:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.major}
            </Grid>
            {data.isStudent && (
              <>
                <Grid item xs={3}>
                  Түвшин:
                </Grid>
                <Grid item xs={3} className="fw-600">
                  {data.grade}
                </Grid>
                <Grid item xs={3}>
                  Зэрэг:
                </Grid>
                <Grid item xs={3} className="fw-600">
                  {data.degree}
                </Grid>
              </>
            )}
            <Grid item xs={3}>
              Нас:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.age}
            </Grid>
            <Grid item xs={3}>
              Хүйс:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.gender}
            </Grid>
            <Grid item xs={3}>
              Утас:
            </Grid>
            <Grid item xs={3} className="fw-600">
              {data.phone}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Гарах</Button>
        </DialogActions>
        {/* <SuccessAlert
          text="Үйлчлүүлэгчийн эмийн жор амжилттай бүртгэлээ."
          open={alerts}
          setOpen={handleClose}
        />
        <ErrorAlert
          text="Үйлчлүүлэгчийн эмийн жорыг бүртгэхэд алдаа гарлаа."
          open={alerte}
          setOpen={handleClose}
        /> */}
      </Dialog>
    </>
  );
};

export default UDataModal;
