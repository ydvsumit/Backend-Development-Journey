-- SELF JOIN:	A Self Join in SQL is a regular join where a table is joined with itself. 
-- 				It is used to compare rows within the same table or query hierarchical relationships, such as finding out who reports to whom.

-- Step 1:
-- Create a single table for both employees and managers

-- CREATE TABLE employees (
-- 	emp_id INT PRIMARY KEY,
--     emp_name VARCHAR(50),
--     manager_id INT
-- );

-- -- Insert sample data

-- INSERT INTO employees (emp_id, emp_name, manager_id) VALUES
-- (1, 'John', NULL),	 -- John is the CEO (has no manager)
-- (2, 'Alice', 1),	 -- Alice reports to John (1)
-- (3, 'Steve', 1)		-- Steve reports to John (1)


-- SELECT * FROM employees;


-- Step 2: 	• Implement the Self Join QueryTo display each employee next to the name of their manager, 
-- 			• we treat the employees table as two virtual tables: e (the employee list) and m (the manager lookup list). 
-- 			• We match the employee's manager_id to the manager's emp_id

SELECT 
	e.emp_name AS "Employee",
	m.emp_name AS "Manager"
FROM employees e

LEFT JOIN employees m ON e.manager_id = m.emp_id;