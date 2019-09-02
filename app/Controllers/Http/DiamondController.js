'use strict'
const Diamond = use('App/Models/Diamond')
const Database = use('Database')

class DiamondController {
    async index({request, response}) {
        const params = request.only(['carat','cut','color','clarity','soldFor']);
        let carat = Number.parseFloat(params.carat).toFixed(1);
        if(carat < 0.5 || carat > 1.5){
            return "Sorry, our records don't show any past transactions of this sort"
        }
        let result = ( await Database
        .table('diamonds')
        .where('caratWeight', carat)
        .where('clarity', params.clarity)
        .where('color', params.color)
        .where('cut', params.cut)
        );
        const avg = (arr) => {
            if (arr.length === 0) return "Sorry, our records don't show any past transactions of this sort"
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                const obj = arr[i];
                sum += obj.soldFor
            }
            if(sum/arr.length === NaN) {
                console.log("error")
                return "Sorry, our records don't show any past transactions of this sort"
            } else {
                return `$${Number(sum/arr.length).toFixed(2)}`;
            }
        }
        return avg(result);
    }

    async price({request, response}) {
      return response.json(request);
    }

}

module.exports = DiamondController
