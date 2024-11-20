from turtle import *


#we want to paint a house

#step 1: draw squarl
speed(10)
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)


forward(70)        #now start drawing door

color("yellow")
begin_fill()
left(90)

forward(120)
right(90)

forward(60)
right(90)


forward(120)
end_fill()
penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()     #now start drawing window 1
goto(55, 120)
pendown()
begin_fill()
color("brown")
left(210)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
end_fill()

penup()        #now start drawing window 2   
goto(145, 120)
pendown()
begin_fill()
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
end_fill()
exitonclick()