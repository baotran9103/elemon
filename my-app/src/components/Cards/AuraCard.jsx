import React,{useContext} from 'react'
import {Aura} from '../utils/Data'
import CustomRadios from '../utils/CustomRadios'
import {ElemonContext} from '../ElemonContext'

function AuraCard() {
  const myContext = useContext(ElemonContext)
 
  const [aura, setaura] = myContext.aura;
  return (

    <CustomRadios
                id="Aura"
                label="Aura"
                HelperText="Select Elemon Aura"
                items={Aura}
                itemID="id"
                itemName="name"
                useValues={[aura, setaura]}
              />
  )
}

export default AuraCard