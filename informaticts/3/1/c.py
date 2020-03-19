import math
a = int(input())
b = int(input())

# for x in range(a, b + 1):
#     if int(math.sqrt(x)) ** 2 == x:
#         print(x)

x = int(math.sqrt(a))
while x ** 2 <= b:
    if x ** 2 >= a:
        print(x ** 2)
    x = x + 1