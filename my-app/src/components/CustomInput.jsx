import React from 'react'
import { TextField } from '@mui/material'
function CustomInput({label,useValues,helperText,type="text",disabled=false}) {
    const [value, setvalue] = useValues
  return (
    <div>
        <TextField
        style={{marginBottom:'0.5rem'}}
        disabled={disabled}
        type={type}
  helperText={helperText}
  id="demo-helper-text-misaligned"
  label={label}
  value={value}
  onChange={e=>setvalue(e.target.value)}
/>
    </div>
  )
}

export default CustomInput