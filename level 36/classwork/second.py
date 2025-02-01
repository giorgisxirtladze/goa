def lower_or_upper(user_str, choice):
    if choice == "upper":
        print(user_str.upper())
    elif choice == "lower":
        print(user_str.lower())
    else:
        print("wrong choice")

lower_or_upper("Hello World", "upper")
lower_or_upper("Python Programming", "lower")
lower_or_upper("Good Morning", "capitalize")