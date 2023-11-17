import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function RegisterConfirmationDialog({
  isOpen,
  onClose,
  onRegister,
  // itemToRegister,
  dataLabel,
  // itemName,
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="register-dialog-title"
      aria-describedby="register-dialog-description"
    >
      <DialogTitle id="register-dialog-title">
        Verify to register {dataLabel}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="register-dialog-description">
          Do you want to register {dataLabel} ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onRegister}
          color="primary"
          autoFocus
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RegisterConfirmationDialog;
