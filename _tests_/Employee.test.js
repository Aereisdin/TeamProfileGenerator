const Employee = require('../lib/Employee')

describe("Employee", () => {

    it("Should return the name of the employee", () => {
        const obj = new Employee('Carl');
        expect(obj.name).toEqual('Carl')
    })
    it("Should get the email of the employee", () => {
        const email = new Employee('Carl', 25, 'carl@email.com');
        expect(email.email).toEqual('carl@email.com')
    })
    it("Should return the role of Employee", () => {
        const role = new Employee('Bob', 77, 'none@none.com')
        expect(role.getRole()).toEqual('Employee')
    })

})