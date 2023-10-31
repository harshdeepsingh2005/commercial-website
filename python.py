def day(d,m,y,d1,m1,y1):
    days=0
    c=0
    n=[31,28,31,30,31,30,31,31,30,31,30,31]
    if y!=y1:
        for i in range(y+1,y1):
            c=leap_year(i)
            if c==1:
                days+=366
            else:
                days+=365
    
        days+=month(1,m,leap_year(y))
        days+=month(m1,12,leap_year(y1))
    
    days+=d1
    if leap_year(y)==1 and m==2:
        days+=(d-29)
    else:
        days+= (d-n[m-1])
    return days
      
def leap_year(y):
    if y%4==0:
        return 1
    else:
        return 0

def month( x, y ,c):
    day=0
    month=[31,28,31,30,31,30,31,31,30,31,30,31]
    for i in range(x,y):
        if i==2 and c==1:
            day+=29
        else:
            day+=month[i-1]
    return day

d= int(input("Enter birth date"))
m= int(input("Enter birth month"))
y= int(input("Enter birth year"))


d1= int ( input ("Enter current date"))
m1= int ( input ("Enter current month"))
y1= int ( input ("Enter current year"))

x=day(d=d,m=m,y=y,d1=d1,m1=m1,y1=y1)
print("days =", x)
