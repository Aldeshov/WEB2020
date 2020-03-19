a = int(input())
x = 2

ans = 1
while x <= a:
    if a % x == 0:
        ans = ans + 1
    x = x + 1
print(ans)