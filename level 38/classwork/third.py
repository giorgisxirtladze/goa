def list_join(user_list, str_to_join):
    return str_to_join.join(user_list)

result1 = list_join(["apple", "banana", "cherry"], ", ")
print(result1)

result2 = list_join(["Hello", "world"], " ")
print(result2) 

result3 = list_join(["Python", "is", "awesome"], " - ")
print(result3)