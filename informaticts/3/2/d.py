n = int(input())
while True:
    if n % 2 == 0:
        n = n / 2
    elif n == 1:
        print("YES")
        break
    else:
        print("NO")
        break