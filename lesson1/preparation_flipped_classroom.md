# Preparation for (semi) flipped classroom

This is the preparation for the (semi) flipped classroom (vs. "old style" presential classes). 

We say (semi) flipped classroom, because part of the teaching is still done on the Sunday class.

## Setting up MySQL with Docker

We will use Docker to run MySQL in the class, so please start by reading a little about Docker:
- [here](https://medium.com/@SaadAAkash/docker-for-dummies-literally-ab3fc6362d5f) until "Let’s Write a Simple docker file" for the basics;
- [on freecodecamp](https://www.freecodecamp.org/news/docker-simplified-96639a35ff36/) for more details.


Once you know what Docker is:
1. install Docker by following the instructions [here](https://drive.google.com/file/d/1YE7kIx6NxNHi72VSwh3sN5qMLCAisvJJ/view?usp=sharing);
2. start MySQL, and install the MySQL VScode plugin by follwing the instructions [here](https://drive.google.com/file/d/1sxLcPXPN_USOFwDKIESN3Cem2377iGWB/view?usp=sharing), this part should work the same way in Windows, MacOS, and Linux;
3. set up the database that we will use in the class by follwing the instructions [here](https://drive.google.com/file/d/1nUAsFbGgh64W8NrqD4gNXBLsCwXqDe-o/view?usp=sharing).


## Class videos

Since this is a semi flipped classroom, where you prepare the class during the week and then the teaching on Sunday will build on what you prepared, it is ***extremely important*** that you watch the following videos:

 - [introduction to databases, part 1](https://drive.google.com/file/d/1vrIOqad0fMVpbFgp1-9g1rvd7peMeu-e/view?usp=sharing);
 - [introduction to databases, part 2](https://drive.google.com/file/d/17wvdTUgLB3KakjeKfr6rJn1T6KzpX9Uf/view?usp=sharing) ;
 - [introduction to SELECT queries and small exercise](https://drive.google.com/file/d/1Km2knoXiZrR9TOwZZ2M7V_FLyb-X_FBA/view?usp=sharing).


## Exercise before class

Before Sunday also please do the following exercise, so that we can discuss it in the class:
 - write a `SELECT` query where you select the row in the  `user` table, where the user `name` is `Pablo Kisbee`.


## Checklist

You are ready for Sunday's class if you:
 - you have installed Docker;
 - got MySQL running on Docker;
 - installed the MySQL plugin on VScode;
 - have created the `hyf_lesson1` database on your computer (the data is [here](https://github.com/HackYourFuture-CPH/databases/blob/master/lesson1/lesson-data.sql));
 - have watched the `Class videos`;
 - have done the `SELECT` exercise.

If you run into trouble completing any of the above, please ask for help in the class channel :)