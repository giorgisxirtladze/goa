# Upper
# 2) გადააქციე მოცემული წინადადება დიდი ასოებით და დაბეჭდე შედეგი.
sentence = "This is a sample sentence."
print(sentence.upper())

# 3) მომხმარებლის სახელის შეყვანა და მისი დიდი ასოებით ჩვენება.
name = input("Enter your name: ")
print(name.upper())

# 4) ფუნქციის შექმნა, რომელიც გარდაქმნის პატარა ასოებით დაწერილ სტრიქონთა სიას დიდ ასოებად.
def convert_list_to_uppercase(string_list):
    return [s.upper() for s in string_list]

# Lower
# 5) ყველა სიმბოლოს პატარა ასოებად გადაქცევა მოცემულ წინადადებაში და შედეგის დაბეჭდვა.
sentence = "THIS IS ANOTHER SAMPLE SENTENCE."
print(sentence.lower())

# 6) მომხმარებლისგან ელფოსტის მისამართის მოთხოვნა და მისი პატარა ასოებით შენახვა.
email = input("Enter your email address: ")
email = email.lower()
print(email)

# 7) ფუნქციის შექმნა, რომელიც იღებს შერეული ასოებით დაწერილ სტრიქონს და აბრუნებს მას პატარა ასოებით.
def convert_to_lowercase(mixed_case_string):
    return mixed_case_string.lower()

# Capitalize
# 8) მომხმარებლის მიერ მოწოდებული წინადადების პირველი ასოს გადიდება.
user_sentence = input("Enter a sentence: ")
print(user_sentence.capitalize())

# 9) მოცემული პატარა ასოებით დაწერილი სტრიქონების სიის თითოეულის პირველი ასოს გადიდება.
def capitalize_list(string_list):
    return [s.capitalize() for s in string_list]

# 10) ფუნქციის შექმნა, რომელიც იღებს სტრიქონს და აბრუნებს მას გადიდებული პირველი ასოთი.
def capitalize_first_letter(string):
    return string.capitalize()

# Find
# 11) წინადადებაში სიტყვის "Python" პირველი გამოჩენის მდებარეობის პოვნა.
sentence = "I am learning Python programming."
print(sentence.find("Python"))

# 12) მომხმარებლის მიერ მითითებული ქვეწინადადების ძებნა მოცემულ სტრიქონში და მისი საწყისი ინდექსის დაბეჭდვა.
main_string = input("Enter the main string: ")
substring = input("Enter the substring to search for: ")
print(main_string.find(substring))

# 13) ფუნქციის შექმნა, რომელიც პოულობს და აბრუნებს მითითებული სიმბოლოს ინდექსს მოცემულ სტრიქონში.
def find_character_index(string, character):
    return string.find(character)

# Len
# 14) მომხმარებლის მიერ მოწოდებული სტრიქონის სიგრძის პოვნა და დაბეჭდვა.
user_input = input("Enter a string: ")
print(len(user_input))

# 15) ფუნქციის შექმნა, რომელიც იღებს სტრიქონთა სიას და აბრუნებს მათი სიგრძეების სიას.
def get_lengths(string_list):
    return [len(s) for s in string_list]

# Count
# 16) მოცემულ პარაკრაფში სიტყვის "the" გამოჩენის რაოდენობის დათვლა.
paragraph = "The quick brown fox jumps over the lazy dog. The dog barked."
print(paragraph.lower().count("the"))

# 17) მომხმარებლისთვის სიმბოლოს შეყვანის მოთხოვნა და მისი გამოჩენის რაოდენობის დათვლა მოცემულ სტრიქონში.
text = input("Enter a string: ")
char = input("Enter a character to count: ")
print(text.count(char))

# 18) ფუნქციის შექმნა, რომელიც ითვლის და აბრუნებს მითითებული სიტყვის გამოჩენის რაოდენობას ტექსტში.
def count_word_occurrences(text, word):
    return text.lower().count(word.lower())
