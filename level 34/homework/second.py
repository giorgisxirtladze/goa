def find_maximum(numbers):
    """
    This function takes a list of numbers and returns the maximum value
    without using the built-in max() function.
    """
    if not numbers:  
        return None

    maximum = numbers[0]  
    for num in numbers:  
        if num > maximum:  
            maximum = num
    return maximum


numbers_list = [3, 1, 7, 9, 2]
result = find_maximum(numbers_list)
print("The maximum value is:", result)  
