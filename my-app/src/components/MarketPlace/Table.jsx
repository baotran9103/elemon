import React,{useState,useContext} from 'react'

import { DataGrid } from '@mui/x-data-grid';

import {columns} from './Utils'
import { MarketContext } from './MyContext';
import Pagination from '@mui/material/Pagination';
function MyTable() {


  const myContext = useContext(MarketContext)
  const data = myContext.data
  const [isLoaded, setisLoaded] = myContext.isLoaded
  const [pageSize, setPageSize] = useState(20);
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState(  { "HP": false,
  "pAtk": false,
  "mAtk": false,
"pDef": false,
  "mDef": false,
  "spd": false,
});
  
  return (
    <div>
      <div style={{ height: 800, width: '100%' }}>
        {
          data?.length && isLoaded ? <DataGrid
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[20,30,40,50]}
          Pagination ={<Pagination count={10} color="primary" />}
          // checkboxSelection
          autoPageSize
          density="standard"
              columnVisibilityModel= {columnVisibilityModel}
              onColumnVisibilityModelChange={(newModel) =>
                setColumnVisibilityModel(newModel)
              }
            
         
         
        />:""
        }
     
    </div>
    </div>
  )
}

export default MyTable