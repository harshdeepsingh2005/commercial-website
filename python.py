# def days_until_birthday(current_date, birthday):
#     current_year, current_month, current_day = current_date
#     birth_year, birth_month, birth_day = birthday

#     # If the birthday has already occurred this year, calculate for next year
#     if (current_month, current_day) > (birth_month, birth_day):
#         next_birthday_year = current_year + 1
#     else:
#         next_birthday_year = current_year

#     # Calculate the days until the next birthday
#     days_until_birthday = 0

#     while (current_year, current_month, current_day) != (next_birthday_year, birth_month, birth_day):
#         days_until_birthday += 1
#         current_day += 1

#         # Handle the end of the month
#         if current_day > 31 or (current_month in [4, 6, 9, 11] and current_day > 30) or (current_month == 2 and (current_day > 29 or (current_day > 28 and not (current_year % 4 == 0 and (current_year % 100 != 0 or current_year % 400 == 0))))):
#             current_day = 1
#             current_month += 1

#             # Handle the end of the year
#             if current_month > 12:
#                 current_month = 1
#                 current_year += 1

#     return days_until_birthday

# # Example usage:
# current_date = (2023, 11, 24)  # Replace with the current date (year, month, day)
# birthday_date = (2000, 5, 15)  # Replace with your birthday (year, month, day)

# days_until = days_until_birthday(current_date, birthday_date)

# print(f"Days until your next birthday: {days_until} days")





# n=10
# s={ (x,y,z) for x in range(1,n+1) for y in range(x,n+1) for z in range(y,n+1) if z**2 == (x**2 + y**2 )}
# print(sorted(s))




class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    
p1=Person("Raj")
print(p1.name)
print(p1.age)