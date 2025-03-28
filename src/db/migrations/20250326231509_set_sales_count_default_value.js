exports.up = function (knex) {
    return knex.raw(
        `
            ALTER TABLE employees
            ALTER COLUMN salesCount SET DEFAULT 0
        `
    )
};

exports.down = function (knex) {
    return knex.raw(
        `
            ALTER TABLE employees ALTER COLUMN salesCount DROP DEFAULT
        `
    )
};
