import { LightningElement } from 'lwc';

export default class LwcLooping extends LightningElement {
    names = ["a", "b", "c"];
    contacts = [
        { Id: '001', Name: 'John Doe', Email: 'john.doe@example.com', Phone: '(123) 456-7890' },
        { Id: '002', Name: 'Jane Smith', Email: 'jane.smith@example.com', Phone: '(234) 567-8901' },
        { Id: '003', Name: 'Bob Johnson', Email: 'bob.johnson@example.com', Phone: '(345) 678-9012' }
    ];
}