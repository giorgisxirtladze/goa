def check_lowercase(user_str):
    if all('a' <= char <= 'z' for char in user_str):
        print(f'"{user_str}" არის მთლიანად lowercase-ში.')
    else:
        print(f'"{user_str}" არ არის მთლიანად lowercase-ში.')

check_lowercase("hello")
check_lowercase("Hello")
check_lowercase("hello123")
