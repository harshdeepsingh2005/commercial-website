def day(d,m,y,d1,m1,y1):
    days=0
    c=0
    n=[31,28,31,30,31,30,31,31,30,31,30,31]
    
    if m!=m1:
        if y!=y1:
            for i in range(y+1,y1):
                c=leap_year(i)
                if c==1:
                    days+=366
                else:
                    days+=365
        
            days+=month(1,m,leap_year(y))
            days+=month(m1,12,leap_year(y1))
        if d!=d1  :
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
date1=input("input birth date seperated by spaces")
l=list(map(int,date1.split()))
d= l[0]
m= l[1]
y= l[2]

date2=input("input date seperated by spaces")
l=list(map(int,date2.split()))
d1= l[0]
m1= l[1]
y1= l[2]

x=day(d=d,m=m,y=y,d1=d1,m1=m1,y1=y1)
print("days =", x)
