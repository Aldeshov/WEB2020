n = int(input())
count = 0
ans = 0
while count < n:
    a = int(input())
    if a == 0:
        ans += 1
    count += 1
print(ans)