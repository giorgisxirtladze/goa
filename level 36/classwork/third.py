def find_occurrences(main_str, str_to_search):
    frequency = main_str.count(str_to_search)
    print(f'"{str_to_search}" გვხვდება "{main_str}"-ში {frequency}-ჯერ.')

find_occurrences("hello world, hello everyone", "hello")
find_occurrences("abcdefabcdefabcdef", "abc")
find_occurrences("123451234512345", "12")
