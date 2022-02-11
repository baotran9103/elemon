
import * as info from "./Data";
import {BaseCard}from "./BaseCard";
export function getPower(data){
    let pet = new myPet(data)
    console.log(pet)
}

class myPet{
    constructor(props){
        this.petId=props.pet
        this.elclass = props.elclass
        this.rare = props.rare
        this.aura = props.aura
        this.level=props.level
        this.star = props.star
        this.skill1 = this.cleanString(props.skill1) >0? this.cleanString(props.skill1):0
        this.skill2 = this.cleanString(props.skill2) >0 && props.star>=3? this.cleanString(props.skill2):0
        this.skill3 = this.cleanString(props.skill3) >0 && props.star>=6? this.cleanString(props.skill3):0
        this.skill4 = this.cleanString(props.skill4) >0 && props.star>=9? this.cleanString(props.skill4):0
        this.TotalSkill = this.getSkills();
        this.power = props.power? props.power :0;
        this.body1 = props.body1;
        this.body2 = props.body2;
        this.body3 = props.body3;
        this.body4 = props.body4;
        this.body5 = props.body5;
        this.body6 = props.body6;
    }

    cleanString(data){
        if(typeof data==='string') return parseInt(data)
        return data
    }

    getSkills(){

        let sum = this.skill1 + this.skill2+ this.skill3 + this.skill4
        let c  = 5 
        c += this.skill1> 0 
        c += this.skill2> 0 
        c += this.skill3> 0 
        c += this.skill4> 0 
        console.log(c,sum)
        return sum*c;
    }


}