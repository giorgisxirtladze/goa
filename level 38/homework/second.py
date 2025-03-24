def is_all_uppercase(s):
    return s.isupper()

user_input = input("Enter a string: ")

if is_all_uppercase(user_input):
    print("The string contains only uppercase letters.")
else:
    print("The string contains other characters or lowercase letters.")
