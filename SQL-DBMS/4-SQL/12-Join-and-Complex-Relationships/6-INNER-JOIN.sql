-- INNER JOIN: • An INNER JOIN in SQL is a command used to combine rows from two or more tables based on a related column. 
--               "(INNER JOIN is using by default by using JOIN)"
--             • It only returns the records that have matching values in both tables, completely filtering out any rows that do not have a match.
--             • If a row in the first table cannot find a corresponding matching value in the second table, that row is omitted from the final results.

-- 🔑 3 Golden Rules to Remember:
-- 1. No Match, No Show: If a row doesn't have a partner in the other table, it is completely hidden.
-- 2. It Filters Data: It naturally cleans up your results by removing empty or unrelated information.
-- 3. The "Overlap": It only shows you the exact spot where two different tables overlap.

SELECT e.id, s.name AS students, c.class_name, c.teacher FROM students s 
INNER JOIN enrollments e ON s.id = e.student_id 
INNER JOIN classes c ON e.class_id = c.id
ORDER BY e.id;