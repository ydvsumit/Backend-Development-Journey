CREATE TABLE courses (
	id SERIAL PRIMARY KEY, -- Primary Key, -- instead of AUTO_INCREMENT (MySQL used only), use SERIAL in PostgreSQL
    course_name VARCHAR(100) NOT NULL UNIQUE, -- Unique + Not Null
    description TEXT,
    duration INT CHECK (duration > 0), -- Constraint: duration must be positive
    start_date DATE NOT NULL,
    end_date DATE,
    CONSTRAINT chk_dates CHECK (end_date IS NULL OR end_date > start_date), -- Custom constraint
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
