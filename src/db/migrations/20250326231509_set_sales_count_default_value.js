/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(
        `
            ALTER TABLE employees
            ALTER COLUMN salesCount SET DEFAULT 0
        `
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw(
        `
            ALTER TABLE employees ALTER COLUMN salesCount DROP DEFAULT
        `
    )
};
