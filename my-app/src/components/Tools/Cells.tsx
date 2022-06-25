import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {  IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
import { celProps, editableCellProps } from "./Types";
import TableCell from "@mui/material/TableCell";
import Input from "@mui/material/Input";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {cellAlign} from './Utils'

export const EditableCell = ({
  row,
  onToggleEditMode,
  onRevert,ondeleteAccount
}: editableCellProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{ alignItems: "center", justifyContent: "center", width: "100%" }}
    >
      {row.isEditMode ? (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            display: "flex",
          }}
        >
          <IconButton
            aria-label="done"
            onClick={() => onToggleEditMode(row.id)}
          >
            <DoneIcon />
          </IconButton>
          <IconButton aria-label="revert" onClick={() => onRevert(row.id)}>
            <UndoIcon />
          </IconButton>
        </div>
      ) : (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            display: "flex",
          }}
        >
          <IconButton
            aria-label="delete"
            onClick={() => onToggleEditMode(row.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleOpen}aria-label="revert"><DeleteOutlineIcon/></IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Deleting this account
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to delete this wallet ? {row.walletAddress}
              </Typography>
              
              <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            display: "flex",
            gap:'1rem'
          }}
        >
                    <Button variant="outlined" onClick={()=>{
                        ondeleteAccount(row.id);
                        handleClose()
                    }}>Yes</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>No</Button>

                </div>
             
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export const CustomTableCell = ({ row, name, onChange ,type="string"}: celProps) => {
    const { isEditMode } = row;
    return (
      <TableCell align={cellAlign}>
        {isEditMode ? (
          <Input
            value={row[name]}
            name={name}
            onChange={(e) => onChange(e, row)}
            className={""}
            sx={{width:"100%",wordBreak:'wrap'}}
            type={type}
          />
        ) : (
          row[name]
        )}
      </TableCell>
    );
  };
  