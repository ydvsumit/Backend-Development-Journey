SELECT e.id, s.id AS student_id, s.name AS students, c.class_name, c.teacher FROM students s 
RIGHT JOIN enrollments e ON s.id = e.student_id 
RIGHT JOIN classes c ON e.class_id = c.id
ORDER BY e.id;