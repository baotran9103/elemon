import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { rowProps, Props, previousProps } from "./Types";
import { updateAccount ,deleteAccount} from "./Functions";
import Button from "@mui/material/Button";
import { EditableCell, CustomTableCell } from "./Cells";
import {cellAlign,highlighted,columns} from './Utils'


function TableComponent({ rows, setRows }: Props) {
  const [previous, setPrevious] = React.useState<previousProps | null>({});
  const onToggleEditMode = (id: string) => {
    let t: rowProps | undefined = rows.find((item) => item.isEditMode == true);
    if (t) {
      console.log(t);
      updateAccount(t.id, t);
    }
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };
  const onChange = (e: any, row: rowProps) => {
    if (previous != null && !previous[row.id]) {
      setPrevious((state: any) => ({ ...state, [row.id]: row }));
    }
    let value = e.target.value;
    // console.log(value,isNaN(value))
    if(isNaN(value)==false) value = parseInt(value)
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };
  const onRevert = (id: string) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        if (previous == null) return row;
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state: any) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };
  const ondeleteAccount = (id:string) =>{
    deleteAccount(id,setRows)
  }
  const changeStatus = (row: rowProps) => {
    console.log(row.status, row.id);
    let t = "";
    switch (row.status) {
      case "stop":
        t = "start";
        break;
      case "start":
        t = "stop";
        console.log("switch to ", t);
        break;
      default:
        t = "stop";
        break;
    }
    row.status = t;
    const { id } = row;
    updateAccount(row.id, row);
    console.log(row);
    const newRows = rows.map((item) => {
      if (item.id === id) {
        return { ...item, status: t };
      }
      return item;
    });
    setRows(newRows);
  };
  return (
    <div style={{ display: "block", overflowX: "auto" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align={cellAlign}>Action</TableCell>
              {columns.map((item) => (
                <TableCell align={cellAlign}>{item.title}</TableCell>
              ))}
              <TableCell align={cellAlign}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background: row.isEditMode ? highlighted : "",
                }}
              >
                <EditableCell
                  row={row}
                  onToggleEditMode={onToggleEditMode}
                  onRevert={onRevert}
                  ondeleteAccount={ondeleteAccount}
                />
                {columns.map((item) => (
                  <CustomTableCell {...{ row, name: item.name, onChange ,type:item.type?item.type:"string"}} />
                ))}
                <TableCell align={cellAlign}>
                  <Button onClick={() => changeStatus(row)}>
                    {row.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;


