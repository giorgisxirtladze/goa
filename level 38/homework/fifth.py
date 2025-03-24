def sentence_to_words(sentence):
    return sentence.split()

user_input = input("Enter a sentence: ")
print(sentence_to_words(user_input))
