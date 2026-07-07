USE university;

SELECT c.customer_id, c.name, o.order_id, o.amount FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id

UNION

SELECT c.customer_id, c.name, o.order_id, o.amount FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id

ORDER BY customer_id