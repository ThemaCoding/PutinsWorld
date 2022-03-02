console.log("Hello World");
var money = 15000000000
var numberofjets = 0
var numberoftanks = 0
var numberofsoldiers = 0
var numberofweapons = 0
console.log("What is your name dictator? ~ Assistant")
name = input()
console.log(name + " we are at war and you will either lead us to great victory and reunite the USSR or an embarrassing defeat! ~ Military Advisor")
console.log("We have 15 billion dollars to spent on the invasion ~ Financially Minister")
console.log("We need to spend the money on Fighter Jets, Tanks, Soldiers and Weapons ~ Military Advisor")
console.log("The fighter jets are 25 million each. How many would you like to buy? You can buy a maximum of 600 jets")
numberofjets = int(input())
if (money - numberofjets * 25000000 > 0)
    money = money - numberofjets * 25000000
console.log("You have $" + str(money) + " left")
else (money - numberofjets * 25000000 < 0)
console.log("You don't have enough money. How many jets would you like to buy? You can buy a maximum of 600 jets")
numberofjets = int(input())
if (money - numberofjets * 25000000 > 0)
    money = money - numberofjets * 25000000
console.log("You have $" + str(money) + " left")
  else
numberofjets = 0
console.log("Are you dumb?")

if (money > 0)
    console.log("The tanks are 3.7 million each. How many would you like to buy? You can buy a maximum of " + str(int(money / 3700000)) + " tanks")
numberoftanks = int(input())
if money - numberoftanks * 3700000 > 0:
    money = money - numberoftanks * 3700000
console.log("You have $" + str(money) + " left")
  elif money - numberoftanks * 3700000 < 0:
console.log("You don't have enough money. How many tanks would you like to buy? You can buy a maximum of " + str(int(money / 3700000)) + " tanks")
numberoftanks = int(input())
if money - numberoftanks * 3700000 > 0:
    money = money - numberoftanks * 3700000
console.log("You have $" + str(money) + " left")
    else:
numberoftanks = 0
console.log("Are you dumb?")

if money > 0:
    console.log("The soldiers are 10 thousand dollars each including food, shelter etc. How many would you like to buy? You can buy a maximum of " + str(int(money / 10000)) + " soldiers")
numberofsoldiers = int(input())
if money - numberofsoldiers * 10000 > 0:
    money = money - numberofsoldiers * 10000
console.log("You have $" + str(money) + " left")
  elif money - numberofsoldiers * 10000 < 0:
console.log("You don't have enough money. How many soldiers would you like to buy? You can buy a maximum of " + str(int(money / 10000)) + " soldiers")
numberofsoldiers = int(input())
if money - numberofsoldiers * 10000 > 0:
    money = money - numberofsoldiers * 10000
console.log("You have $" + str(money) + " left")
    else:
numberofsoldiers = 0
console.log("Are you dumb?")

if money > 0:
    console.log("We will hand weapons to volunteering civilians. Each weapon costs a thousand dollars. How many would you like to buy? You can buy a maximum of " + str(int(money / 1000)) + " weapons")
numberofweapons = int(input())
if money - numberofweapons * 1000 > 0:
    money = money - numberofweapons * 1000
console.log("You have $" + str(money) + " left")
  elif money - numberofweapons * 1000 < 0:
console.log("You don't have enough money. How many weapons would you like to buy? You can buy a maximum of " + str(int(money / 1000)) + " weapons")
numberofweapons = int(input())
if money - numberofweapons * 1000 > 0:
    money = money - numberofweapons * 1000
console.log("You have $" + str(money) + " left")
    else:
numberofweapons = 0
console.log("Are you dumb?")

console.log("Day 1")
console.log("Do want to attack the capital Kyiv or Kharkiv. Or do you want to continue invading through Crimea or Donbas")
console.log("Type Kyiv to attack Kyiv. Type Kharkiv to attack Kharkiv. Type Crimea to continue invading through Crimea. Type Donbas to continue invading through Donbas")
firstcity = input()
if numberofweapons > 0:
    console.log("How many volunteers out of your " + str(numberofweapons) + " volunteers would you like to move to " + firstcity)
if numberofsoldiers > 0:
    console.log("How many troops out of your " + str(numberofsoldiers) + " soldiers would you like to move to " + firstcity)
if numberoftanks > 0:
    console.log("How many tanks out of your " + str(numberoftanks) + " tanks would you like to move to " + firstcity)
if numberofjets > 0:
    console.log("How many fighter jets out of your " + str(numberofjets) + " jets would you like to move to " + firstcity)
