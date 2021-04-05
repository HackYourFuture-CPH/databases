# Preparation for (semi) flipped classroom

This is the preparation for the (semi) flipped classroom (vs. "old style" presential classes). 

We say (semi) flipped classroom, because part of the teaching is still done on the Sunday class.


## Class videos

Since this is a semi flipped classroom, where you prepare the class during the week and then the teaching on Sunday will build on what you prepared, it is **extremely important** that you watch the following videos:

 - [Creating and manipulating tables](https://drive.google.com/file/d/1v3p_fE1JqST9sSEOJxhWNRBmZRCN1lEU/view?usp=sharing);
 - [Manipulating table entries](https://drive.google.com/file/d/1wcx16QxuG5mbDHZYLbA88E2zjEsu460t/view?usp=sharing).


## Exercise before class

In lesson 1 we used a database where each user was responsible for many tasks, but each task was only assigned to one user.
This is called a many-to-one relationship, many tasks are assigned to one user (**or** one-to-many, as in, one user can be responsible for many tasks).

Each task also had one status, and one status could be attributed to many tasks. 
So, again we had a one-to-many relationship: one status is assigned to many tasks (**or** many-to-one, as in, many tasks can have the same one status assigned).

In lesson 2 things are going to get more interesting, as different users can be assigned to the same task.
So we'll have a many-to-many relationship, i.e., one task can be assigned to many users and one user can be assigned to many tasks.
For instance:
 - Donald Duck and Wonderwoman will do the task "Fix Donald's bike", and
 - Donald Duck will do the tasks "Fix Donald's bike" and "Cook Dinner".

The exercise for this week is for you (in groups to be defined in the class channel) to find out what needs to change in the database to support this many-to-many relationship.
Maybe we need to add a table(s) or column(s). Who knows?

We'll start the class on Sunday by discussing your proposals :)



## Checklist

You are ready for Sunday's class if:
 - you have watched the `Class videos`;
 - you are ready to present your conclusions about many-to-many relationships.
