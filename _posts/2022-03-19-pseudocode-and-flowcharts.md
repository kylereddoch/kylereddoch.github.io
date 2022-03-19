---
layout: post
title: "Tutorial: Pseudocode and Flowcharts for Coding"
color: orange # For a colored header
author: kylereddoch
description: Pseudocode and flowcharts help programmers organize the logic of thier programs. Let's take a look how to create both with a real world problem.
#bootstrap: true # To use bootstrap alongside markdown
#feature-img: "/assets/img/feature-img/gridstudio-frames.jpg" # Featured image in post header
#thumbnail: "/assets/img/thumbnails/feature-img/gridstudio-frames.jpg" # Thumbnail for post in blog list
#hide_title: true # Hides post title when using an image with the title in it
tags: [coding, pseudocode, flowcharts, python, tutorials]
date: 2022-03-19 17:20 -0600
#excerpt_separator: <!--more--> # Used if you want to use a custom seperator (put the seperator in the post where you want it)
---

As you work on a coding project, especially one that is more complex, it starts to become important to plan or "design" out your code before actually writing it. Desinging your code helps you organize the logic and keep track of the various possibilities that your project needs to handle. There are two tools that I use (well programmers in general usually do) to help me plan out my code. Those tools are pseudocode and flowcharts.

The following is an assignment I had to do for my Python scripting class that included pseudocode and a flowchart. Let's get into it so you can see an example of both.

## The Problem

A company wants a program that will calculate the weekly paycheck for an employee based on how many hours they worked. For this company, an employee earns $20 an hour for the first 40 hours that they work. The employee earns overtime, $30 an hour, for each hour they work above 40 hours.

So, let's start with the pseudocode first.

### Pseudocode

**What is pseudocode in the first place?**

Pseudocode is an intermediary step between reading a problem statement and writing the code to solve the problem. It serves as a blueprint for your program to guide you through, just like contractors start with a blueprint before building a house. Use your pseudocode as a tool to begin thinking about your program, but keep in mind it might not be the final solution to the problem. Pseudocode is written in a natural language using some programming keywords.

Now back to the problem above. Let's get the pseudocode written as the first step to designing our code.

```{r, tidy=FALSE, eval=FALSE, highlight=FALSE }
INPUT number of hours worked
DECLARE weekly pay, overtime pay, and overtime hours as variables
IF the number of hours worked is <= 40:
	THEN weekly pay = number of hours worked * 20;
ELSE:
	Overtime hours = number of hours worked – 40;
	Overtime pay = overtime hours * 20;
	Weekly pay = (40 * 20) + overtime pay;
PRINT weekly paycheck amount
```

As you can see, we are using some programming words like INPUT, IF, and ELSE but are still using natural language to walk through the steps of the program. There is also proper indention where it would be placed in the code.

Now onto the flowchart...

### Flowcharts

**What is a flowchart?**

A flowchart is a diagram that depicts a process, system or computer algorithm. They are widely used in multiple fields to document, study, plan, improve and communicate often complex processes in clear, easy-to-understand diagrams. Flowcharts use rectangles, ovals, diamonds and potentially numerous other shapes to define the type of step, along with connecting arrows to define flow and sequence. They can range from simple, hand-drawn charts to comprehensive computer-drawn diagrams depicting multiple steps and routes.

Now back to our problem. How are we going to create a flowchart to define the steps and sequences our program needs to take?

Well there are a few different ways you can create a flowchart. One way is you can use Microsoft Word and the add shapes feature. Another option is to use Microsoft Powerpoint and built it out there. You can also use Microsoft's own diagram software called Visio.

I though, use [Lucidchart by Lucid](https://www.lucidchart.com/pages/). It is a simple, drag and drop flowchart creator. You can choose from various different templates or even start from a blank one.

So, let's see how we would flowchart the program. Below is the one that I created using Lucidchart.

![Flowchart for Weekly Pay Program Senario](/assets/img/flowchart-weekly-pay-program.svg)

So there we have it. We have both our pseudocode and flowchart created and now we can start to build out our actual code.

For me, since this is a Python scripting class, I wrote out the program using Python. Let's take a look at how the code would look.

### The Python Code

``` python
"""
Problem: A company wants a program that will calculate the weekly paycheck for an employee based on how many hours
they worked. For this company, an employee earns $20 an hour for the first 40 hours that t60hey work. The employee
earns overtime, $30 an hour, for each hour they work above 40 hours.
"""

hours_worked = int(input('Enter number of hours worked:'))

weekly_pay = 0
overtime_pay = 0
overtime_hours = 0

if hours_worked <= 40:
    weekly_pay = hours_worked * 20
else:
    overtime_hours = hours_worked - 40
    overtime_pay = overtime_hours * 30
    weekly_pay = (40 * 20) + overtime_pay

final_pay = "${:.0f}".format(weekly_pay)

print('Your weekly pay is ', final_pay)
```

Well folks, that's it. You have just accomplished creating pseudocode and a flowchart for a program.

If you enjoyed this and found it useful, I would appreciate it if you share this with your friends!
