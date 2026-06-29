USE university;
-- • Creating Table of customers and orders :=>
-- CREATE TABLE customers (
-- 	customer_id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE orders (
-- 	order_id INT AUTO_INCREMENT PRIMARY KEY,
--     customer_id INT NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
-- 	FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
-- );

-- • To view both created customers and orders table:=>
-- SELECT * FROM customers;
-- SELECT * FROM orders;

-- • INSERT THE SAMPLE DATA INTO BOTH TABLES:=>
-- INSERT INTO customers (name) 
-- VALUES ("Alice"), ("Bob"), ("Charlie");

-- INSERT INTO orders (customer_id, amount)
-- VALUES (1, 1200), (2, 699.50), (1, 28.75);


-- • INNER JOIN QUERY FOR THESE TABLES:=>
SELECT customers.customer_id, customers.name, orders.amount 
FROM customers 
INNER JOIN orders ON customers.customer_id = orders.customer_id
ORDER BY customers.customer_id;