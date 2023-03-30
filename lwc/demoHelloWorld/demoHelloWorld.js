import { LightningElement, api } from "lwc";

export default class DemoHelloWorld extends LightningElement {
  name = "Nadeem Khan";
  company = "SFDC";
  designation = "STC";
  city = "GGN";
  @api recordId;

  constructor() {
    super();
    console.log("I am in constructor");
    console.log(this.recordId);
  }

  connectedCallback() {
    console.log(this.recordId);
    console.log("I am in connected callback");
  }

  renderedCallback() {
    console.log("I am in rendered callback");
  }

  handleNameChange(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.name);
    this.name = event.target.value;
  }
}