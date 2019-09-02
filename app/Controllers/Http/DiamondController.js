'use strict'
const Diamond = use('App/Models/Diamond')

class DiamondController {
    async index({request, response}) {
        let diamonds = await Diamond.all();
        return response.json(diamonds);
    }

}

module.exports = DiamondController
