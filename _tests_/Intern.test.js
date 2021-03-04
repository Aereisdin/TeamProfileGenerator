const Intern = require('../lib/Intern')

describe("Intern", () => {

    it("Should return the name of Intern", () => {
        const obj = new Intern('Vanessa');
        expect(obj.name).toEqual('Vanessa')
    })
    it("Should get the school name of the intern", () => {
        const gh = new Intern('Tina', 62, 'tina@tina.com', 'University of Tokyo' );
        expect(gh.schoolName).toEqual('University of Tokyo')
    })

})