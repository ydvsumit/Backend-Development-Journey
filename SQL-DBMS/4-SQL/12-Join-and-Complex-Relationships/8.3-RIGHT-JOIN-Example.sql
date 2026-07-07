USE university;

SELECT o.order_id, o.amount, c.customer_id, c.name FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.order_id
ORDER BY customer_id;