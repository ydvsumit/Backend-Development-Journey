-- CROSS JOIN: 	• A SQL CROSS JOIN (or Cartesian Join) matches every row from one table with every row from another table. 
-- 				• It does not require a matching condition.
-- 				• If Table A has \(n\) rows and Table B has \(m\) rows, the CROSS JOIN returns \(n \times m\) rows (every possible combination).

-- Creating menu items table:

-- CREATE TABLE menu_items (
-- 	item_id INT AUTO_INCREMENT PRIMARY KEY,
-- 	item_name VARCHAR(50)
-- );


-- Inserting sample data into menu items table:

-- INSERT INTO menu_items (item_name) 
-- VALUES ("Burger"), ("Pizza");

-- SELECT * FROM menu_items;


-- Creating Sizes Table:

-- CREATE TABLE sizes (
-- 	size_id INT AUTO_INCREMENT PRIMARY KEY,
--  	size_name VARCHAR(20)
-- );


-- Inserting sample data into Sizes table:

-- INSERT INTO sizes (size_name) 
-- VALUES ("Small"), ("Medium"), ("Large");

-- SELECT * FROM sizes;

SELECT m.item_name, s.size_name
FROM menu_items m
CROSS JOIN sizes s
ORDER BY m.item_name ASC;

