class Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email = email;
    }
    getName(){
        return this.name
    }
    getID(){
        return this.Id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return `Employee`
    }
}
module.exports = Employee;
