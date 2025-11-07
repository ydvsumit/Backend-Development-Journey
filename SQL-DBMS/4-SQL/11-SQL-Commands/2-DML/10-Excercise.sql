-- CRUD Operation in DB:


-- 1. Insert Values in created table structure:

-- INSERT INTO public.students (id, name, age, marks, city)
-- VALUES 
-- (1, 'John', 27, 87.50, 'Cardiff'),
-- (2, 'Alice', 29, 89.25, 'America'),
-- (3, 'Bob', 30, 95.00, 'London'),
-- (4, 'Tom', 24, 78.28, 'Amsterdam');

-- 2. Update a single field value at single time:
-- UPDATE public.students SET name = 'John Smith' WHERE id = 1;

-- 3. Update multiple fields value at same time:
-- UPDATE public.students SET name = 'Bob Jacky', city = 'England' WHERE id = 3;

-- 4. Delete a specific row:
-- DELETE FROM public.students WHERE id = 1;

-- 5. Truncate - Delete all rows records but not structure:
-- TRUNCATE TABLE public.courses

-- 6. Replace-if user id already exist, it's deleted and replaced with new data: 
-- (This command only works in MySQL):
-- REPLACE INTO public.students (id, name, age, marks, city) VALUES (2, 'Smith', 26, 93.75, 'Germany');

-- 7. For PostgreSQL - REPLACE Command Syntax is below:
-- INSERT INTO your_table (id, column1, column2)
-- VALUES (1, 'valueA', 'valueB')
-- ON CONFLICT (id) DO UPDATE SET
--     column1 = EXCLUDED.column1,
--     column2 = EXCLUDED.column2;

INSERT INTO public.students (id, name, age, marks, city)
VALUES (2, 'Smith', 26, 93.75, 'Germany')
ON CONFLICT (id)
DO UPDATE SET
    name = EXCLUDED.name,
    age = EXCLUDED.age,
    marks = EXCLUDED.marks,
    city = EXCLUDED.city;
