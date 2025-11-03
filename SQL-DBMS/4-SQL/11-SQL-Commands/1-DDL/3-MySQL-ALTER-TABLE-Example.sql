USE university;
ALTER TABLE courses
-- ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
-- ADD COLUMN admission_date DATE NOT NULL;
-- DROP COLUMN duration;
ADD COLUMN course_duration INT CHECK (course_duration > 0);

