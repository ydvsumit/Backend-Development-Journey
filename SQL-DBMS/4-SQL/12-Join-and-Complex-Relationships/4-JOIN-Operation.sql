-- AS <table_column_heading> (e.g. students.name replaced by students)
-- Identifier (FROM <table_name> identifier): we can use a sort name instead of using a long name everywhere. for e.g students s, enrollments e -> here s and e are identifiers of students and enrollments that means we can directly take fetch from s and e.
-- In SQL, a JOIN operation is used to combine rows from two or more tables based on a related column between them. This allows you to retrieve data distributed across multiple tables as a single, unified result set.
-- In SQL, the ORDER BY clause is used to sort the result-set of a query in either ascending or descending order. It is typically the final clause in an SQL statement, appearing after WHERE, GROUP BY, and HAVING.
-- ORDER BY column_name [ASC | DESC];

SELECT e.id, s.name AS students, c.class_name, c.teacher FROM students s 
JOIN enrollments e ON s.id = e.student_id 
JOIN classes c ON e.class_id = c.id
ORDER BY e.id;