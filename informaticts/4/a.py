n = int(input())
a = input().split()
count = 0
for i in a:
    if count % 2 == 0:
        print(i)
    count += 1