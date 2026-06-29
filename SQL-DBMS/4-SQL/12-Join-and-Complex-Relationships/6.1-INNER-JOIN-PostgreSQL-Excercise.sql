-- • CREATING CUSTOMERS AND ORDERS TABLE =>
-- CREATE TABLE customers(
-- 	customer_id SERIAL PRIMARY KEY,
-- 	customer_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE orders(
-- 	order_id SERIAL PRIMARY KEY,
-- 	customer_id INT NOT NULL,
-- 	amount DECIMAL(10, 2) NOT NULL,
-- 	FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
-- );

-- • MODIFY THE COLUMN NAME IN CUSTOMERS TABLE =>
-- ALTER TABLE customers RENAME COLUMN customer_name TO name;

-- • INSERTING DATA INTO BOTH TABLES =>
-- INSERT INTO customers (name)
-- VALUES ('Alice'), ('Bob'), ('Charlie');

-- INSERT INTO orders (customer_id, amount)
-- VALUES (1, 1200), (2, 60.54), (1, 24.75);

-- • APPLYING INNER JOIN QUERY ON BOTH TABLES =>
SELECT customers.customer_id, name, orders.amount FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id
ORDER BY customer_id;