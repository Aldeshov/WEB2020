n = int(input())
a = input().split()

count = 0
while count < n:
    a.insert(count, a.pop())
    count += 1

for x in a:
    print(x)