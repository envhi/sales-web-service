/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.raw(
        `
            CREATE TABLE employees (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            birth_date DATE,
            base_salary NUMERIC(15,2),
            salesCount INT,
            email VARCHAR(50) UNIQUE NOT NULL,
            password_hash TEXT  NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TYPE product_type as ENUM ('hardware', 'tv', 'games', 'smartphone', 'home', 'other');

        CREATE TABLE products (
            id SERIAL PRIMARY KEY,
            name TEXT,
            price NUMERIC(15,2),
            stock INT DEFAULT(0),
            product_type product_type,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            employee_id INT,
            CONSTRAINT fk_employee
            FOREIGN KEY(employee_id)
            REFERENCES employees(id)
            ON DELETE CASCADE
        );

        CREATE TYPE sale_status as enum ('SUCCESS', 'PENDING', 'CANCELED');

        CREATE TABLE sales (
            id SERIAL PRIMARY KEY,
            employee_id INT,
            product_id INT,
            price NUMERIC(15,2) NOT NULL,
            sale_status sale_status,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_employee
            FOREIGN KEY(employee_id)
            REFERENCES employees(id)
            ON DELETE CASCADE,
            CONSTRAINT fk_product
            FOREIGN KEY(product_id)
            REFERENCES products(id)
            ON DELETE CASCADE
        );
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
        DROP TABLE IF EXISTS employees CASCADE;
        DROP TABLE IF EXISTS products CASCADE;
        DROP TABLE IF EXISTS sales CASCADE;
        DROP TYPE IF EXISTS sale_status CASCADE;
        DROP TYPE IF EXISTS product_type CASCADE;
        `
    )
};
