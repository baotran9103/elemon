
import * as info from "./Data";
import {BaseCard}from "./BaseCard";
export class myPet{
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
        this.rareFactor = this.getRareFactor()
        this.elemonInfo = this.getElemon()
        this.body=[]
        this.elcoinCost = 0
        this.elmonCost = 0
    }
   
    cleanString(data){
        if(typeof data==='string') return parseInt(data)
        return data
    }
    getRareFactor(){
        if(!this.rare) return 0;
        
        if(typeof parseInt(this.rare) ==='number'){
            return info.Rare[this.rare-1].rate
        }
        return 0;
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
   
    getElemon(){
        if(this.petId){
            return BaseCard[this.petId]
        }
        return []
    }
    getStartIndex(initial){
        let r = 9;
        let i = initial*r;
        let a = i;
        // let o = i+r;
        return a>=162?0:a;
    }
    runLoop(items,input){
        let c = 0;
        let start = this.getStartIndex(input)
        for(let i =0;i<9;i++){
            c+= items[start+i]
            this.body[i] = this.body[i] +items[start+i] || items[start+i]
        }
        return c
        
    }


    getClassPoints(){
        var temp_class = this.elclass-1;
        var items = this.elemonInfo.initPoint
        if(!items) return 0   

        return this.runLoop(items,temp_class)
       
    }
    getauraPoints(){
        var temp_aura = this.aura-1;              
        var items = this.elemonInfo.qualityPoint         
        if(!items) return 0   
        
        return this.runLoop(items,temp_aura)
    }
    getstarPoints(){
        var temp_star = this.star;       
        
        var items = this.elemonInfo.starPoint
        if(!items && temp_star ===0) return 0
        return this.runLoop(items,temp_star)
    }
    getBodyPartPoints(){
        this.body[0] = this.body[0]+ info.BodyQuality[this.body1-1].point   
        this.body[1] = this.body[1]+ info.BodyQuality[this.body2-1].point   
        this.body[2] = this.body[2]+ info.BodyQuality[this.body3-1].point   
        this.body[3] = this.body[3]+ info.BodyQuality[this.body4-1].point  
        this.body[4] = this.body[4]+ info.BodyQuality[this.body5-1].point   
        this.body[5] = this.body[5]+ info.BodyQuality[this.body6-1].point  
      
        
        
    }
    getNumPoints(){
        var temp_level = this.elemonInfo.levelType;       
        let temp_num = temp_level -1
        var numPoints = info.LevelStats[this.level].pointNumber
        var pointPercent  = info.LevelStats[this.level].pointPercent
        
        let start = this.getStartIndex(temp_num)
        if(!numPoints || !pointPercent) return 
        for(let i =0;i<9;i++){
            this.body[i] = this.body[i]*(1+pointPercent[i]) + numPoints[start+i]
        }
        
    }

    getPower(){
        console.log(this.elemonInfo )
        let temp = 0
        this.getClassPoints()
        this.getauraPoints()
        this.getstarPoints()
        this.getBodyPartPoints()
        this.getNumPoints()
        for(let i =0;i<9;i++){
            this.body[i] = Math.floor(this.body[i]+0.5)
            temp +=this.body[i]
        }
        console.log(this.body)
        console.log(temp)
        temp*= this.rareFactor
        temp*= (10+this.TotalSkill)
        let pure = this.elclass === this.elemonInfo.class[0] ?1.5:1
        temp *= pure
        temp *= (2*this.level+10)/3000
        this.power = Math.round(temp)
        this.getCost()
    }
    getCost(){
        this.elcoinCost = 0
        this.elmonCost = 0
        if(this.level >0){
            this.elcoinCost += info.LevelCost[this.level]
        }
        if(this.star >0){
            this.elmonCost += info.StartCost[this.star]
        }
        if(this.skill1 >0){
            this.elcoinCost += info.SkillCost[this.skill1]
        }
        if(this.skill2 >0){
            this.elcoinCost +=  info.SkillCost[this.skill2]
        }
        if(this.skill3 >0){
            this.elcoinCost += info.SkillCost[this.skill3]
        }
        if(this.skill4 >0){
            this.elcoinCost += info.SkillCost[this.skill4]
        }
    }
}