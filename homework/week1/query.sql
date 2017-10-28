-- Find out how many todo items are on the list
SELECT COUNT(*) FROM task;

-- Find out how many todo items on the list do not have a valid due date
SELECT COUNT(*) FROM task WHERE due_date IS NULL;

-- Find all the todo items that are marked as done
SELECT id, title FROM task WHERE status_id = 3; -- OR
SELECT task.id, task.title, status.name FROM task JOIN status ON task.status_id = status.id WHERE status_id = 3;

-- Find all the todo items that are not marked as done
SELECT id, title FROM task WHERE status_id != 3; -- OR
SELECT task.id, task.title, status.name FROM task JOIN status ON task.status_id = status.id WHERE status_id != 3;

-- Get all the todo items, sorted with the most recent first
SELECT id, title, created FROM task ORDER BY created DESC;

-- Get the single most recently added todo item
SELECT title, created FROM task ORDER BY created DESC LIMIT 1;

-- Get the name and due date of all todo items about 'databases'
SELECT title, due_date FROM task where title LIKE '%databases%';

-- Get the name and status (as a string) of all todos
SELECT task.title, status.name FROM task JOIN status ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many todos have that status
SELECT status.name, COUNT(task.status_id) FROM task JOIN status ON task.status_id = status.id GROUP BY status.name;

-- Get the names of all statuses, sorted by most todos with that status to least
SELECT status.name, COUNT(task.status_id) FROM task JOIN status ON task.status_id = status.id GROUP BY status.name ORDER BY COUNT(task.status_id) DESC;