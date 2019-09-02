'use strict'

/*
|--------------------------------------------------------------------------
| DiamondSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Diamond = use('App/Models/Diamond')

class DiamondSeeder {
  async run () {
    const diamonds = await Database.table('diamonds')
    for (let i = 0; i < 10000; i++) {
      const randomize = (arr) => {return arr[Math.floor(Math.random()*arr.length)];};
      let caratWeight = randomize([0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5]);
      let cut = randomize(['Round', 'Princess', 'Cushion', 'Marquise', 'Emerald']);
      let color = randomize(['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'MTZ', 'Fancy']);
      let clarity = randomize(['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1', 'I2', 'I3']);
      let sum = 0;
      let caratWeightPrice = {
        0.5: 2000, 0.6: 4000, 0.7: 6000, 0.8: 8000, 0.9: 10000, 1.0: 12000, 1.1: 14000, 1.2: 16000, 1.3: 18000, 1.4: 20000, 1.5: 22000
      };
      let cutPrice = {
        'Round' : 1000, 'Princess' : 900, 'Cushion' : 800, 'Marquise' : 700, 'Emerald' : 600,
      };
      let colorPrice = {
        'D' : 1100, 'E' : 1000, 'F' : 900, 'G' : 800, 'H' : 700, 'I' : 600, 'J' : 500, 'K' : 400, 'L' : 300, 'MTZ' : 200, 'Fancy' : 100
      };
      let clarityPrice = {
        'FL':1200, 'IF':1100, 'VVS1':100, 'VVS2':900, 'VS1':800, 'VS2':700, 'SI1':600, 'SI2':500, 'I1':400, 'I2':300, 'I3':200,
      };
      let soldFor = (Math.random()*385) + sum + caratWeightPrice[caratWeight] + cutPrice[cut] + colorPrice[color] + clarityPrice[clarity];
      const diamond = new Diamond();
      diamond.caratWeight = caratWeight;
      diamond.cut = cut;
      diamond.color = color;
      diamond.clarity = clarity;
      diamond.soldFor = soldFor;

      await diamond.save();
    }
  }
}

module.exports = DiamondSeeder
