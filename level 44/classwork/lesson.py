def find_min_builtin(lst):
    return min(lst)

def find_min_manual(lst):
    min_value = lst[0] 
    for num in lst:  
        if num < min_value:
            min_value = num
    return min_value

numbers = [5, 2, 9, 1, 6]
print(find_min_builtin(numbers))
print(find_min_manual(numbers))