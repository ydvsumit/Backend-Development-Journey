USE university;
CREATE TABLE courses (
	id INT AUTO_INCREMENT PRIMARY KEY, -- Primary Key
    course_name VARCHAR(100) NOT NULL UNIQUE, -- Unique + Not Null
    description TEXT,
    duration INT CHECK (duration > 0), -- Constraint: duration must be positive
    start_date DATE NOT NULL,
    end_date DATE,
    CONSTRAINT chk_dates CHECK (end_date IS NULL OR end_date > start_date) -- Custom constraint
);
