
import {myPet} from './myPet'
export function getPower(data){
    let pet = new myPet(data)
    // console.log(pet)
    pet.getPower()
    return pet
}

