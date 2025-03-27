/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(
        `
        ALTER TABLE employees RENAME COLUMN salesCount TO sales_count;
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
            ALTER TABLE employees RENAME COLUMN sales_count to salesCount;
        `
    )
};
