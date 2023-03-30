import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {
    fname = '';
    lname = '';
    @track name = {
        fN:"Nadeem",
        lN:"Khan"
    }

    handleChange(event){
        if(event.target.name === 'firstName'){
            this.fname = event.target.value;
        }
        else if(event.target.name === 'lastName'){
            this.lname = event.target.value;
        }
    }

    handleChangeObj(event){
        if(event.target.name === 'firstNameObj'){
            this.name.fN = event.target.value;
            console.log(this.name.fN);
        }
        else if(event.target.name === 'lastNameObj'){
            this.name.lN = event.target.value;
            console.log(this.name.lN);
        }
    }

    get upperCase(){
        return `${this.fname} ${this.lname}`.toUpperCase();
    }
    get upperCaseObj(){
        return `${this.name.fN} ${this.name.lN}`.toUpperCase();
    }
}