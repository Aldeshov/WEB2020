n = int(input())
a = input().split()
count = 1
while count < n:
    if int(a[count]) > 0:
        if int(a[count - 1]) > 0:
            print("YES")
            break
    elif int(a[count]) < 0:
        if int(a[count - 1]) < 0:
            print("YES")
            break
    count += 1

if count >= n:
    print("NO")
