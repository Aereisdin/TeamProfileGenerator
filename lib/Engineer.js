const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, Id, email, Githubname){
        super(name, Id, email);
        this.Githubname = Githubname;
    }
    getGithub(){
        return `https://www.github.com/${this.Githubname}`
    }
    getRole(){
        return `Engineer`
    }
}
module.exports = Engineer;