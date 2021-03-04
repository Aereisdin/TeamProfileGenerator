const Manager = require('../lib/Manager')

describe("Manager", () => {

    it("Should return the name of Manager", () => {
        const obj = new Manager('Tom');
        expect(obj.name).toEqual('Tom')
    })
    it("Should get the office number of the manager", () => {
        const gh = new Manager('Tina', 62, 'tina@tina.com', 'Office 345' );
        expect(gh.officeNumber).toEqual('Office 345')
    })

})