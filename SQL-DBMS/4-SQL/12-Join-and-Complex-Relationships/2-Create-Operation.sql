-- Classes Table (with teacher included)
CREATE TABLE classes (
	id INT PRIMARY KEY,
	class_name VARCHAR(50),
	teacher VARCHAR(50)
);

-- Enrollments Table (Mapping Students -- Classes)
CREATE TABLE enrollments(
	id INT PRIMARY KEY,
    student_id INT,
    class_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);