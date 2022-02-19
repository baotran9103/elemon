import {Aura,Rare,Elemons,ElClass,Pure,BodyQuality,LevelStats} from '../utils/Data.js'
import {BaseCard}from "../utils/BaseCard";

export class myPet{
    constructor(props){
        if(!props) return
        this.id = props.tokenId
        this.pet = props.baseCardId
        this.classno = props.class
        this.pure = props.purity
        this.rare = props.rarity
        this.price = this.getPrice(props.lastPrice)
        this.bodyPart1 = props.bodyPart1
        this.bodyPart2 = props.bodyPart2
        this.bodyPart3 = props.bodyPart3
        this.bodyPart4 = props.bodyPart4
        this.bodyPart5 = props.bodyPart5
        this.class =props.class ?  this.getClass(props.class) :""
        this.bodyPart6 = props.bodyPart6
        this.purity = props.purity === 0 ?  Pure[0].name : Pure[1].name
        this.purityLogo = props.purity === 0 ?  Pure[0].logo : Pure[1].logo
        this.quality = props.quality
        this.qualityLogo = props.quality === undefined? Aura.filter(item =>item.id ===props.quality)[0].logo:""
        this.rarity = props.rarity
        this.rarityLogo = props.rarity ? this.getRareLogo(props.rarity) :""
        this.name = props.baseCardId? this.getName(props.baseCardId):""
        this.petAvatar = this.getAvatar(props.baseCardId)
        this.level = 0;
        this.point = 0;
        this.star = 0;
        this.link = `https://app.elemon.io/elemon/${props.tokenId}`
        this.skills=[]
        this.rate = this.point >0 ? this.price/this.point:-1;
        this.rareFactor = this.getRareFactor()
        this.elemonInfo = this.getElemon()
        this.body=[]
        this.TotalSkill = this.getSkills();
        this.HP = 0
        this.pAtk = 0
        this.mAtk = 0
        this.pDef = 0
        this.mDef = 0
        this.spd = 0
        this.bodyPart1Point = this.getBodyQualityPoint(props.bodyPart1)
        this.bodyPart2Point = this.getBodyQualityPoint(props.bodyPart2)
        this.bodyPart3Point = this.getBodyQualityPoint(props.bodyPart3)
        this.bodyPart4Point = this.getBodyQualityPoint(props.bodyPart4)
        this.bodyPart5Point = this.getBodyQualityPoint(props.bodyPart5)
        this.bodyPart6Point = this.getBodyQualityPoint(props.bodyPart6)
    }

    getBodyQualityPoint(id){
        if(!id) return 0
        return BodyQuality[id-1].point
    }

    getPrice(lastPrice){
        return lastPrice / (10**18)
    }
    getAura(quality){
        return Aura[quality-1].name
    }
    getRare(rarity){
        return Rare[rarity-1].name
    }
    getName(baseCardId){
        return Elemons.filter(elemon => elemon.id ===baseCardId)[0].name
    }
    getClass(pclass){
        return ElClass[pclass-1].name
    }
    getRareLogo(rarity){
        return `https://app.elemon.io/assets/images/rarity_${Rare[rarity-1].name}.png`
    }
    getAvatar(baseCardId){
        let t = baseCardId
        t += `_${this.bodyPart1}`
        t += `_${this.bodyPart2}`
        t += `_${this.bodyPart3}`
        t += `_${this.bodyPart4}`
        t += `_${this.bodyPart5}`
        t += `_${this.bodyPart6}`


        return `https://statics.elemon.io/avatar/${baseCardId}/${t}.png`
    }
    updateLevel(level){
       
        this.level = level
        return
    }
    updateBody(arr){
        if(arr.length<6) return
        this.bodyPart1 = arr[0]
        this.bodyPart2 = arr[1]
        this.bodyPart3 = arr[2]
        this.bodyPart4 = arr[3]
        this.bodyPart5 = arr[4]
        this.bodyPart6 = arr[5]


        return
    }
    updatePoint(point){
        this.point = point
        return
    }
    updateStar(star){
        this.star = star
        return
    }
    updateSkills(skills){
        this.skills=skills
        return
    }

    getRareFactor(){
        if(!this.rare) return 0;
        
        if(typeof parseInt(this.rare) ==='number'){
            return Rare[this.rare-1].rate
        }
        return 0;
    }
    getSkills(skills){

        let sum = 0
        let c  = 5 
        
        c += this.skills.length
        for(let item of this.skills){
            sum+= item
        }
        // c += this.skill1> 0 
        // c += this.skill2> 0 
        // c += this.skill3> 0 
        // c += this.skill4> 0 
        // console.log(c,sum)
        return sum*c;
    }
    getElemon(){
        if(this.pet){
            return BaseCard[this.pet]
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
        var temp_class = this.classno-1;
        var items = this.elemonInfo.initPoint
        if(!items) return 0   

        return this.runLoop(items,temp_class)
       
    }
    getauraPoints(){
        var temp_aura = this.quality-1;              
        var items = this.elemonInfo.qualityPoint         
        if(!items) return 0   
        
        return this.runLoop(items,temp_aura)
    }
    getstarPoints(){
        var temp_star = this.star;       
      
        var items = this.elemonInfo.starPoint
        if(!items) return 0
        return this.runLoop(items,temp_star)
    }
    getBodyPartPoints(){
        
        this.body[0] = this.body[0]+ BodyQuality[this.bodyPart1-1].point   
        this.body[1] = this.body[1]+ BodyQuality[this.bodyPart2-1].point   
        this.body[2] = this.body[2]+ BodyQuality[this.bodyPart3-1].point   
        this.body[3] = this.body[3]+ BodyQuality[this.bodyPart4-1].point  
        this.body[4] = this.body[4]+ BodyQuality[this.bodyPart5-1].point   
        this.body[5] = this.body[5]+ BodyQuality[this.bodyPart6-1].point  
      
        
        
    }
    getNumPoints(){
        var temp_level = this.elemonInfo.levelType;       
        let temp_num = temp_level -1
        var numPoints = LevelStats[this.level].pointNumber
        var pointPercent  = LevelStats[this.level].pointPercent
        
        let start = this.getStartIndex(temp_num)
        if(!numPoints || !pointPercent) return 
        for(let i =0;i<9;i++){
            this.body[i] = this.body[i]*(1+pointPercent[i]) + numPoints[start+i]
        }
        
    }
    UpdateStats(data){
        if(data.level)  this.updateLevel(data.level)
        if(data.points)   this.updateBody(data.points)
        if(data.point)  this.updatePoint(data.point)
        if(data.star)  this.updateStar(data.star)
        if(data.skills) this.updateSkills(data.skills)
       this.rate =  this.point >0 ? Math.floor(this.price/this.point * 1000000):-1
       this.getClassPoints()
       this.getauraPoints()
       this.getstarPoints()
       this.getBodyPartPoints()
       this.getNumPoints()
       for(let i =0;i<9;i++){
           this.body[i] = Math.floor(this.body[i]+0.5)
       }
       this.HP = this.body[0]
       this.pAtk = this.body[1]
       this.mAtk = this.body[2]
       this.pDef = this.body[3]
       this.mDef = this.body[4]
       this.spd = this.body[5]
      }
}