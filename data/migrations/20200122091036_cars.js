
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('vin');
        tbl.string('make', '255');
        tbl.string('model', '255');
        tbl.integer('mileage');
        tbl.string('transmission', '255');
        tbl.string('title_status', '255');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
