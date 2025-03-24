def first_and_last(lst):
    if not lst:
        return None
    return [lst[0], lst[-1]]

numbers = [10, 20, 30, 40, 50]
print(first_and_last(numbers))