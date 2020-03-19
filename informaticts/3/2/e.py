n = int(input())
k = 0
x = 1
while True:
    if x >= n:
        print(k)
        break
    else:
        x *= 2
        k += 1