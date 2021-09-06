import GeneralAppliance from "./GeneralAppliance.js";

export class Fridge extends GeneralAppliance{
    constructor(consumption, optionProcedense, capacity ){
        super(consumption, optionProcedense);
        this.capacity = capacity;
    }
    

    calculateCapacity(){
        if(this.capacity > 120){
            this.percentageCapacity = (((this.capacity - 120)* 5)/1000)
        }else{
            this.percentageCapacity = 0;
        }
    }

    calculateCapacity(){
        this.calculateCapacity();
        this.capacity = this.price*this.percentageCapacity;
        return this.capacity;
    }

    calculatePriceBase(){
        super.priceBase();
        return this.price+this.percentageCapacity();
    }

}