USE university;

SELECT customers.customer_id, customers.name, orders.amount FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id
ORDER BY customer_id;