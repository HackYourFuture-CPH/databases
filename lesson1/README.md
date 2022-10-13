# Lesson 1: Retrieving Data

In this class, students will be introduced to relational data terminology (row, column), the function of a primary key, and retrieving data from a MySQL database using SELECT queries.

Objective: Students should be able to retrieve data from a database table using SELECT statements that include WHERE, GROUP BY, and ORDER BY.

## Pre-Class Preparation

Before the class you should Docker and MySQL VScode plugin on your computer.

### Installing Docker and the MySQL VScode plugin:

- Install docker by following the instructions here: https://drive.google.com/file/d/1YE7kIx6NxNHi72VSwh3sN5qMLCAisvJJ/view
- Install the MySQL VSCode plugin by following the instructions here: https://drive.google.com/file/d/1sxLcPXPN_USOFwDKIESN3Cem2377iGWB/view

### To learn what Docker is, you can read these articles:

- https://medium.com/@SaadAAkash/docker-for-dummies-literally-ab3fc6362d5f
- https://www.freecodecamp.org/news/docker-simplified-96639a35ff36/

Docker is widely used by software developers these days, i’d say it’s been a
game changer, so it’s good for you if you at least know what it is :slightly_smiling_face:

## Main Topics

- The relational model of data
- A 'database' vs. a 'DBMS' (database management system)
- The concept of a schema
- The properties of an 'entity' (or 'row')
- Basic entity relationship diagrams
- A basic SELECT statement
- Constructing more complex SELECT statements
- Pattern matching with LIKE
- Limiting and ordering results with LIMIT and ORDER BY
- Grouping results with GROUP BY
- Aggregate functions like AVG, COUNT, SUM, MIN and MAX
- JOIN
  - Selecting composite data from multiple tables
  - Compare JOIN WHERE with cartesian product
- Naming Conventions: UpperCamelCase/PascalCase, lowerCamelCase, snake_case, hnHungarianNotation/HNHungarianNotation
- Character Sets in Databases (hint: always use UTF-8 encoding, called 'utf8mb4' in MySQL)

## Reference Material

- [TutorialsPoint MySQL Introduction](http://www.tutorialspoint.com/mysql/mysql-introduction.htm)
- [w3schools tutorial (easy to find how specific commands work)](https://www.w3schools.com/sql/default.asp)
- [Official MySQL Documentation](https://dev.mysql.com/doc/refman/8.0/en/)
- [Official MySQL Tutorial (pretty dense)](https://dev.mysql.com/doc/refman/8.0/en/tutorial.html)
- [Joel Spolsky - Character Sets and Unicode](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)

## Get git ready to work on homework

Using the `hyf-homework` repo. In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes

- Should they be committed to another branch?
- Should they be committed to `master`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

### Creating the branch

Using the `hyf-homework` repo write this command

`git checkout master` - You are now on the `master` branch

`git checkout -b databases-week1`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=XYlgh9hSWtw) can help. On slack use the #git-support channel to ask questions about git

## Homework

Design queries that retrieve the following data sets. Compare with classmates to see if your answers are correct.

1. Find out how many tasks are in the task table
2. Find out how many tasks in the task table do not have a valid due date
3. Find all the tasks that are marked as done
4. Find all the tasks that are not marked as done
5. Get all the tasks, sorted with the most recently created first
6. Get the single most recently created task
7. Get the title and due date of all tasks where the title or description contains **database**
8. Get the title and status (as text) of all tasks
9. Get the name of each status, along with a count of how many tasks have that status
10. Get the names of all statuses, sorted by the status with most tasks first

Watch the previous session recorded on video here:

Part 1 : https://www.youtube.com/watch?v=gAeww1z5774

Part 2 : https://www.youtube.com/watch?v=u77w6Lw2gOY

Part 3 : https://www.youtube.com/watch?v=Mag9n6olmRU

<br/>

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) to remember how to hand in the homework correctly!
