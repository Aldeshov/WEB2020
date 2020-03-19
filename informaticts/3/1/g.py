import math
a = int(input())

x = 2

while x <= a:
    if a % x == 0:
        print(x)
        break
    x = x + 1