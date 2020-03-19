n = int(input())
a = input().split()
ans = 0
count = 1

while count < n - 1:
    if int(a[count - 1]) < int(a[count]):
        if int(a[count + 1]) < int(a[count]):
            ans += 1
    count += 1

print(ans)