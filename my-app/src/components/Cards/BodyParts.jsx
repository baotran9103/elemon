import React,{useContext} from 'react'
import CustomSelect from '../utils/CustomSelect'
import {Elemons} from '../utils/Data'
import {ElemonContext} from '../ElemonContext'

function BodyParts() {
    const myContext = useContext(ElemonContext)
    const [pet,setpet] = myContext.pet
  return (
    <CustomSelect
    id="petName"
    Label="Name"
    HelperText="Select Elemon Name"
    items={Elemons}
    itemID="id"
    itemName="name"
    useValues={[pet,setpet]}
  />
  )
}

export default BodyParts