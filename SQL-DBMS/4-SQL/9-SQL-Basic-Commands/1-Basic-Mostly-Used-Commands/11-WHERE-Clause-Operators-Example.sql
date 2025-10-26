-- 1. Comparison Operators (>, >=, <, <=, =, !=)-------------------------------------------------------
SELECT * FROM public.students WHERE marks > 85;
SELECT * FROM public.students WHERE marks >= 85;

SELECT * FROM public.students WHERE marks < 85;
SELECT * FROM public.students WHERE marks <= 85;

SELECT * FROM public.students WHERE marks = 85;
SELECT * FROM public.students WHERE marks != 85;
SELECT * FROM public.students WHERE city != 'Patna';

-- 2. Logical Operators (AND, OR, NOT) ----------------------------------------------------------------
SELECT name, marks, city FROM public.students WHERE marks > 80 AND city = 'Patna';
SELECT name, marks, city FROM public.students WHERE marks > 80 AND city = 'Patna' AND marks < 95;
SELECT name, marks, city FROM public.students WHERE marks > 80 AND city = 'Patna' AND marks <= 95;


SELECT name, marks, city FROM public.students WHERE marks > 90 OR city = 'Patna';
SELECT name, marks, city FROM public.students WHERE (marks > 80 AND marks < 95) OR city = 'Patna';

SELECT * FROM public.students WHERE NOT city = 'Patna';

-- 3. Range Checking (BETWEEN... AND...) ----------------------------------------------------------------
SELECT name, marks, city FROM public.students WHERE marks BETWEEN 80 AND 95;

-- 4. Set Matching (IN & NOT IN) ------------------------------------------------------------------------
SELECT name, city FROM public.students WHERE city IN ('Patna', 'Rohtak');
-- Exclude students from given city using NOT IN
SELECT name, city FROM public.students WHERE city NOT IN ('Patna', 'Rohtak');

-- 5. Pattern Matching (LIKE & ILIKE) - Search for Patterns in Text -------------------------------------
-- LIKE -> Case-sensitive
-- ILIKE -> Case-insensitive (Used in PostgreSQL Only)

-- Names starting with 'S'
SELECT name FROM public.students WHERE name LIKE 'S%';

-- Names ending with 't'
SELECT name FROM public.students WHERE name LIKE '%t';

-- Names containing 'e'
SELECT name FROM public.students WHERE name LIKE '%e%';

-- Names ending with 't' using ILIKE (Case-insensitive)
SELECT name FROM public.students WHERE name ILIKE '%T';


-- 5. Null Checking (IS NULL / IS NOT NULL) - Find Missing or Available Data
SELECT name, city FROM public.students WHERE city IS NULL;

-- students with a known city
SELECT name, city FROM public.students WHERE city IS NOT NULL;


