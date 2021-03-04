const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, Id, email, schoolName){
        super(name, Id, email);
        this.schoolName = schoolName;
    }
    getSchool(){
        return `${this.schoolName}`
    }
    getRole(){
        return `Intern`
    }
}
module.exports = Intern;