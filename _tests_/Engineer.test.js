const Engineer = require('../lib/Engineer')

describe("Engineer", () => {

    it("Should return the name of Engineer", () => {
        const obj = new Engineer('Carl');
        expect(obj.name).toEqual('Carl')
    })
    it("Should get the email of the employee", () => {
        const gh = new Engineer('Tina', 62, 'tina@tina.com', 'TinkerBell' );
        expect(gh.Githubname).toEqual('TinkerBell')
    })

})