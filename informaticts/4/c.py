n = int(input())
a = input().split()
ans = 0
for i in a:
    if int(i) > 0:
        ans += 1
print(ans)
