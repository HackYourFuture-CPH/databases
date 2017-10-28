let queries = [
  {
    queryString: "Find out how many todo items are on the list",
    querySQL: "SELECT COUNT(*) FROM TASK"
  },
  {
    queryString:
      "Find out how many todo items on the list do not have a valid due date",
    querySQL: "SELECT COUNT(*) FROM task WHERE due_date IS NULL"
  },
  {
    queryString: "Find all the todo items that are marked as done",
    querySQL: "SELECT id, title FROM task WHERE status_id = 3"
  },
  {
    queryString: "Find all the todo items that are not marked as done",
    querySQL: "SELECT id, title FROM task WHERE status_id != 3"
  },
  {
    queryString: "Get all the todo items, sorted with the most recent first",
    querySQL: "SELECT id, title, created FROM task ORDER BY created DESC"
  },
  {
    queryString: "Get the single most recently added todo item",
    querySQL: "SELECT title, created FROM task ORDER BY created DESC LIMIT 1"
  },
  {
    queryString:
      "Get the name and due date of all todo items about 'databases'",
    querySQL: "SELECT title, due_date FROM task where title LIKE '%databases%'"
  },
  {
    queryString: "Get the name and status (as a string) of all todos",
    querySQL:
      "SELECT task.title, status.name FROM task JOIN status ON task.status_id = status.id"
  },
  {
    queryString:
      "Get the name of each status, along with a count of how many todos have that status",
    querySQL:
      "SELECT status.name, COUNT(task.status_id) FROM task JOIN status ON task.status_id = status.id GROUP BY status.name"
  },
  {
    queryString:
      "Get the names of all statuses, sorted by most todos with that status to least",
    querySQL:
      "SELECT status.name, COUNT(task.status_id) FROM task JOIN status ON task.status_id = status.id GROUP BY status.name ORDER BY COUNT(task.status_id) DESC"
  }
];

module.exports = queries;
