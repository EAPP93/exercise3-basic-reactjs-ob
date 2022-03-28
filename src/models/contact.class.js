export class Contact{
    name = '';
    lastName = '';
    emailAddress = '';
    numberPhone = 0;
    connectionStatus = false;
    constructor(name,lastName,emailAddress,numberPhone,connectionStatus){
        this.name = name;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.numberPhone = numberPhone;
        this.connectionStatus = connectionStatus;
    }
}