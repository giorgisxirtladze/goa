def manual_capitalize(user_str):
    if len(user_str) == 0:
        return ""
    first_char = user_str[0].upper()
    remaining_chars = user_str[1:].lower()
    return first_char + remaining_chars

print(manual_capitalize("example"))
print(manual_capitalize("PYTHON"))
print(manual_capitalize("jAvAsCrIpT"))
print(manual_capitalize("987xyz"))
print(manual_capitalize("cOding"))
