n = int(input("enter no. of students: "))
a = []
i = 0
for i in range(n):
    print("enter the age of student no.", i + 1, ":")
    a[i] = int(input())
big = a[0]
small = a[0]
for i in range(1, n):
    if big > a[i]:
        big = a[i]
    if small < a[i]:
        small = a[i]
print("biggest=", big)
print("smallest=", small)