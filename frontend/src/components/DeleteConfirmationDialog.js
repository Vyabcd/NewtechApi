import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function DeleteConfirmationDialog({
  isOpen,
  onClose,
  onDelete,
  itemToDelete,
  dataLabel,
  itemName,
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">
        Verify to Delete {dataLabel}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description">
          Do you want to Delete  {dataLabel} "{itemName}"  ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => onDelete(itemToDelete?.id)}
          color="error"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmationDialog;
