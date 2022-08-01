
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('name', 100).notNullable()
    table.string('email', 100).notNullable().unique()
    table.integer('idade', 3).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
