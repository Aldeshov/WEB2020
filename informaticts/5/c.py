def func(a,b):
    if a == 0:
        if b == 0:
            return 0
    if a == 1:
        if b == 1:
            return 0
    return 1
a = input().split()
print(func(int(a[0]),int(a[1])))