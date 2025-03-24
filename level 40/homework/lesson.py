def hello_world():
    print("Hello, World!")


def add_numbers(a, b):
    print(a + b)


def multiply_by_ten(n):
    return n * 10

def greet(name="Guest"):
    print(f"Hello, {name}!")


def outer_function():
    def inner_function():
        print("Inner function is called!")
    inner_function()


def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")


def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num


def filter_positive(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers


def sum_divisible_by_3(start, end):
    total = 0
    for num in range(start, end + 1):
        if num % 3 == 0:
            total += num
    return total


hello_world()
add_numbers(5, 10)
print(multiply_by_ten(7))
greet()
greet("Alice")
outer_function()
check_even_odd([1, 2, 3, 4, 5])
print(find_max([3, 1, 9, 2, 7]))
print(filter_positive([-1, 5, -3, 8, 0]))
print(sum_divisible_by_3(1, 100))
