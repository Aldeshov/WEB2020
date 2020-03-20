#Say "Hello, World!" With Python
print("Hello, World!")
#---------END---------------

#Arithmetic Operators
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(str(a + b))
    print(str(a - b))
    print(str(a * b))
#---------END---------------

#Python: Division
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(str(a // b))
    print(str(a / b))
#---------END---------------

#Write a function
def is_leap(year):
    leap = False
    
    if year % 4 == 0:
        if year % 100 != 0:
            leap = True
        elif year % 400 == 0:
            leap = True
    
    return leap

year = int(input())
print(is_leap(year))
#---------END---------------

#The Minion Game
def minion_game(string):
    sample = ['a','A','e','E','i','I','o','O','u','U']
    a = 0
    b = 0
    count = 0
    while count < len(string):
        if sample.__contains__(string[count]):
            a += (len(string) - count)
        else:
            b += (len(string) - count)
        count += 1

    if a > b:
        print("Kevin " + str(a) + " ")
    elif a < b:
        print("Stuart " + str(b) + " ")
    else:
        print("Draw")

if __name__ == '__main__':
    s = input()
    minion_game(s)
#---------END---------------

#Python If-Else
#!/bin/python3

import math
import os
import random
import re
import sys


if __name__ == '__main__':
    n = int(input().strip())
    if n % 2 != 0:
        print("Weird")
    elif n >= 2 and n <= 5 and n % 2 == 0:
        print("Not Weird")
    elif n % 2 == 0 and n >= 6 and n <= 20:
        print("Weird")
    elif n > 20:
        print("Not Weird")
#---------END---------------

#Loops
if __name__ == '__main__':
    n = int(input())
    for x in range(0,n):
        print(str(x ** 2))
#---------END---------------

#Print Function
def func(n):
    string = ''
    for x in range(1, n + 1):
        string += str(x)
    return string

if __name__ == '__main__':
    n = int(input())
    print(func(n))
#---------END---------------