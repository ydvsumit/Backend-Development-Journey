-- Step 2: 	• Implement the Self Join QueryTo display each employee next to the name of their manager, 
-- 			• we treat the employees table as two virtual tables: e (the employee list) and m (the manager lookup list). 
-- 			• We match the employee's manager_id to the manager's emp_id


SELECT 
	e.emp_name AS "Employee",
	m.emp_name AS "Manager"
FROM employees e

LEFT JOIN employees m ON e.manager_id = m.emp_id;