import {Aura,Rare,Elemons,ElClass,Pure} from '../utils/Data.js'

export class myPet{
    constructor(props){
        this.id = props.tokenId
        this.price = this.getPrice(props.lastPrice)
        this.bodyPart1 = props.bodyPart1
        this.bodyPart2 = props.bodyPart2
        this.bodyPart3 = props.bodyPart3
        this.bodyPart4 = props.bodyPart4
        this.bodyPart5 = props.bodyPart5
        this.class = this.getClass(props.class)
        this.bodyPart6 = props.bodyPart6
        this.purity = props.purity?  Pure[0].name:Pure[1].name
        this.purityLogo = props.purity? Pure[0].logo:Pure[1].logo
        this.quality = props.quality
        this.qualityLogo = props.quality === undefined? Aura.filter(item =>item.id ===props.quality)[0].logo:""
        this.rarity = props.rarity
        this.rarityLogo = this.getRareLogo(props.rarity)
        this.name = this.getName(props.baseCardId)
        this.petAvatar = this.getAvatar(props.baseCardId)
        this.level = 0;
        this.point = 0;
        this.star = 0;
        this.link = `https://app.elemon.io/elemon/${props.tokenId}`
        this.skills=[]
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
    UpdateStats(props){
      if(props.level)  this.updateLevel(props.level)
      if(props.points)   this.updateBody(props.points)
      if(props.point)  this.updatePoint(props.point)
      if(props.star)  this.updateStar(props.star)
      if(props.skills) this.updateSkills(props.skills)
    }
    
}