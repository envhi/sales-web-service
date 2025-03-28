exports.up = function (knex) {
    return knex.raw(
        `
        ALTER TABLE employees RENAME COLUMN salesCount TO sales_count;
    `
    )
};

exports.down = function (knex) {
    return knex.raw(
        `
            ALTER TABLE employees RENAME COLUMN sales_count to salesCount;
        `
    )
};
