n = int(input())
a = input().split()
ans = 0
count = 1
while count < n:
    if int(a[count]) > int(a[count - 1]):
        ans += 1
    count += 1
print(ans)
