export class EmployeeModel{
    id: number;
    name: string;
    email: string;
    address: string;
    phoneNumber: string;

    constructor (){
        this.address = '';
        this.email = '';
        this.phoneNumber = '';
        this.name = '';
        this.id = 1;
    }
}