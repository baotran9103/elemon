import React,{useContext} from 'react'
import {Rare} from '../utils/Data'
import CustomRadios from '../utils/CustomRadios'
import {ElemonContext} from '../ElemonContext'
function RarityCard() {
  const myContext = useContext(ElemonContext)
 
  const [rare, setrare] = myContext.rare;
  return (
    <CustomRadios
                id="Rare"
                label="Rarity"
                HelperText="Select Elemon Rarity"
                items={Rare}
                itemID="id"
                itemName="name"
                useValues={[rare, setrare]}
              />
  )
}

export default RarityCard