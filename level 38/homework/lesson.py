def is_all_lowercase(s):
    return s.islower()

user_input = input("Enter a string: ")

if is_all_lowercase(user_input):
    print("The string contains only lowercase letters.")
else:
    print("The string contains other characters or uppercase letters.")
