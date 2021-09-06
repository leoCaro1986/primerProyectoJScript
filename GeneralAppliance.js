export default class GeneralAppliance{

    constructor(optionProcedense, consumo){
        this.optionProcedense = optionProcedense;
        this.consumption = this.getConsumption;
        this.price = 0;
    }
    get getPriceProcedense(){
        let result = this.optionProcedense === 'Nacional' ? 250_000 : 350_000;
        return result;
    }
    get getConsumption(){
        switch(this.consumption){
            case "A":
                this.price += 450_000;
                break;
            case "B":
                this.price += 350_000;
                break;
            case "C":
                this.price += 250_000;
                default:
                console.log("Consumo no definido");
        }
        
    }
    priceBase(){
           return this.price =this.getConsumption()+this.getPriceProcedense(); 
    }
}