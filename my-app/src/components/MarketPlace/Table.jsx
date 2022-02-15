import React,{useState,useEffect,useMemo,useContext} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

import {columns} from './Utils'
import { MarketContext } from './MyContext';

function MyTable() {


  const myContext = useContext(MarketContext)
  const [data, setdata] = myContext.data
  const [isLoaded, setisLoaded] = myContext.isLoaded
  const [pageSize, setPageSize] = useState(20);

 
  return (
    <div>
      <div style={{ height: 800, width: '100%' }}>
        {
          data?.length && isLoaded && <DataGrid
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[20,30,40,50]}
          pagination
          // checkboxSelection
        />
        }
     
    </div>
    </div>
  )
}

export default MyTable