import React,{useContext} from 'react'
import CustomSelect from '../utils/CustomSelect'
import {ElClass} from '../utils/Data'
import {ElemonContext} from '../ElemonContext'

function ClassCard() {
    const myContext = useContext(ElemonContext)
    const [elclass,setelclass] = myContext.elclass
  return (
    <CustomSelect
    id="Class"
    Label="Class"
    HelperText="Select Elemon Class"
    items={ElClass}
    itemID="id"
    itemName="name"
    useValues={[elclass,setelclass]}
  />
  )
}

export default ClassCard