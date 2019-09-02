'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiamondsSchema extends Schema {
  up () {
    this.create('diamonds', (table) => {
      table.increments()
      table.integer("caratWeight").notNullable()
      table.string("cut").notNullable()
      table.string("color").notNullable()
      table.string("clarity").notNullable()
      table.integer("soldFor").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('diamonds')
  }
}

module.exports = DiamondsSchema
