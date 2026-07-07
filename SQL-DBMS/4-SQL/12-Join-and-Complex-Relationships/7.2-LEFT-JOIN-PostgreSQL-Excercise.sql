SELECT e.id, s.name AS students, c.class_name, c.teacher FROM students s 
LEFT JOIN enrollments e ON s.id = e.student_id 
LEFT JOIN classes c ON e.class_id = c.id
ORDER BY e.id;