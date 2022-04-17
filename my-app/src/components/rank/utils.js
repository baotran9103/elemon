const getValues = (values,type,field,checkValue,numberCheck = 'smaller') =>{
    let temp = values
    if(type==='number' && isNaN(checkValue)) return values;
    // if((typeof checkValue) !== type ) return values
    let tempValue
    const numerCompare  = (item,field,checkValue) =>{
      if(numberCheck==='smaller'){
        return item[field] <= checkValue
      }
      return item[field] >= checkValue
    }
    switch(type){
      case 'string':
      
        temp = values.filter(item=>item[field].toLowerCase().includes(checkValue.toLowerCase()))
        break;
      case 'number':
        tempValue = parseFloat(checkValue)
        temp =  values.filter(item=>numerCompare(item,field,tempValue))
        break;

      default:
        temp = values
    }

    return temp
  }


export const FilterValues = (data,searchType,searchValue) =>{
    let temp 
    switch(searchType){
        case 'Name':
          temp =  getValues(data,'string','name',searchValue)
          break;
        case 'GuildName':
          temp =  getValues(data,'string','guildName',searchValue)
          break;
        case 'Rank':
          if(isNaN(searchValue)) break;
          console.log(isNaN(searchValue))
          temp =  getValues(data,'number','rank',searchValue)
          break;
        case 'Point':
          if(isNaN(searchValue)) break;
          temp =  getValues(data,'number','seasonPoint',searchValue,'bigger')  
          break
        default:
          temp =  data;
      }
      return temp;
}