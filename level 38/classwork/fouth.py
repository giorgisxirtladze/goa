def element_remover(user_list, index_to_remove):
    if 0 <= index_to_remove < len(user_list):
        user_list.pop(index_to_remove)
    return user_list


list1 = [10, 20, 30, 40, 50]
list2 = ['a', 'b', 'c', 'd', 'e']
list3 = [100, 200, 300, 400, 500]

print(element_remover(list1, 2))  
print(element_remover(list2, 0))
print(element_remover(list3, 4))
