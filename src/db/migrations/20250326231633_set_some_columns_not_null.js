exports.up = function (knex) {
    return knex.raw(
        `
            ALTER TABLE employees ALTER COLUMN name SET NOT NULL;
            ALTER TABLE employees ALTER COLUMN birth_date SET NOT NULL;
            ALTER TABLE employees ALTER COLUMN base_salary SET NOT NULL;
            ALTER TABLE employees ALTER COLUMN email SET NOT NULL;
            ALTER TABLE employees ALTER COLUMN password_hash SET NOT NULL;
            ALTER TABLE employees ALTER COLUMN phone SET NOT NULL;            
        ` 
    )
};

exports.down = function (knex) {
    return knex.raw(
        `
            ALTER TABLE employees ALTER COLUMN name DROP NOT NULL;
            ALTER TABLE employees ALTER COLUMN birth_date DROP NOT NULL;
            ALTER TABLE employees ALTER COLUMN base_salary DROP NOT NULL;
            ALTER TABLE employees ALTER COLUMN email DROP NOT NULL;
            ALTER TABLE employees ALTER COLUMN password_hash DROP NOT NULL;
            ALTER TABLE employees ALTER COLUMN phone DROP NOT NULL;            
        ` 
    )
};
