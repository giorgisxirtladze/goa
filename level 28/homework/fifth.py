# სტუდენტის ქულის შეყვანა
score = int(input("შეიყვანეთ ქულა (0-100): "))

# შეფასების სისტემა
if 90 <= score <= 100:
    print("შეფასება: A")
elif 80 <= score <= 89:
    print("შეფასება: B")
elif 70 <= score <= 79:
    print("შეფასება: C")
elif 60 <= score <= 69:
    print("შეფასება: D")
elif score < 60:
    print("შეფასება: f")
