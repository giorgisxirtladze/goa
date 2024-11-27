import random

secret_number = random.randint(1, 10)


guess = 0  

print("მე მოვიფიქრე რიცხვი 1-დან 10-მდე. გამოიცანი!")

while guess != secret_number:
   
    guess = int(input("შეიყვანე შენი ვარაუდი: "))
    
    if guess < secret_number:
        print("უფრო დიდი რიცხვი სცადე!")
    elif guess > secret_number:
        print("უფრო პატარა რიცხვი სცადე!")
    else:
        print("გილოცავ! სწორად გამოიცანი:", secret_number)
