const Andes = {
    randomBetween: function (min, max, exclude){
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        let repeat = false;
        if(exclude instanceof Array){
            repeat = exclude.includes(rndNum);
        }else if(rndNum === exclude){
            repeat = true;
        }

        if(repeat){
            return this.randomBetween(min,max,exclude);
        }else{
            return rndNum;
        }
    }
}

export default Andes;




