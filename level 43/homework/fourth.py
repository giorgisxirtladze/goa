def reverse_string(s):
    reversed_str = ""
    for char in s:  
        reversed_str = char + reversed_str
    return reversed_str

print(reverse_string("hello"))
print(reverse_string("python"))
print(reverse_string("12345"))