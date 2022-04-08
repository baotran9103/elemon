import React from 'react'
import { TextField ,Button} from '@mui/material'
function CustomInput({label,useValues,helperText,type="text",disabled=false,max=30}) {
    const [value, setvalue] = useValues
  return (
    <div style={{display:'flex',gap:'0.25rem',justifyContent:'center',alignContent:'center'}}>
        <TextField
        style={{marginBottom:'0.5rem',width:'145px'}}
     
        disabled={disabled}
        type={type}
        helperText={helperText}
        id="demo-helper-text-misaligned"
        label={label}
        value={value}
        onChange={e=>setvalue(e.target.value)}
      />
      <div style={{display:'flex',gap:'0.25rem',justifyContent:'center',alignContent:'center',height:'100%'}}>
      {type="number" && <Button variant='outlined' onClick={()=>setvalue(max)} style={{marginBottom:'0.5rem'}}> Max </Button> }

      </div>
    </div>
  )
}

export default CustomInput