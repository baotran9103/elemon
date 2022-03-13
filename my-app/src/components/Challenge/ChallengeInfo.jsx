import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ElClass} from '../utils/Data'
function ChallengeInfo({rows}) {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
 <TableContainer >
      <Table sx={{ width:'100%'}} size="small" aria-label="a dense table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align="right">Pet</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Power</TableCell>
            <TableCell align="right">HP</TableCell>
            <TableCell align="right">P.atk</TableCell>
            <TableCell align="right">M.atk</TableCell>
            <TableCell align="right">P.def</TableCell>
            <TableCell align="right">M.def</TableCell>
            <TableCell align="right">Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,id) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.team}
              </TableCell>
              <TableCell align="right">{row.pet}</TableCell>
              <TableCell align="right">{row.tokenId}</TableCell>
              <TableCell align="right">{!isNaN(row.tokenId) ? ElClass[row.class-1].name:''}</TableCell>
            <TableCell align="right">{row.level}</TableCell>
            <TableCell align="right">{row.power}</TableCell>
            <TableCell align="right">{row.HP}</TableCell>
            <TableCell align="right">{row['P.atk']}</TableCell>
            <TableCell align="right">{row['M.atk']}</TableCell>
            <TableCell align="right">{row['P.def']}</TableCell>
            <TableCell align="right">{row['M.def']}</TableCell>
            <TableCell align="right">{row.Speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  )
}

export default ChallengeInfo