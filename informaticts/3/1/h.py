import math
a = int(input())

x = 1

while x <= a:
    if a % x == 0:
        print(x)
    x = x + 1