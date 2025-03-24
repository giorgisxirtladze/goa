def welcome_message(name, age):
    return f"Welcome, {name}! You are {age} years old."

user_name = input("Enter your name: ")
user_age = input("Enter your age: ")

print(welcome_message(user_name, user_age))
