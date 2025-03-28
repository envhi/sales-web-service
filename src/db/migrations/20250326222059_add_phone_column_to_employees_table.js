exports.up = function (knex) {
    return knex.raw(
        `
        ALTER TABLE employees
        ADD COLUMN phone VARCHAR(15)
    `
    )
};

exports.down = function (knex) {
    return knex.raw(`
        ALTER TABLE employees
        DROP COLUMN phone
    `)
};
