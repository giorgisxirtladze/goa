big_list = [i for i in range(1, 21)]  

print("დაწყებითი სია:", big_list)

print("\n1 რიცხვის გადაცემით:")
print(big_list[:5])   
print(big_list[5:10]) 
print(big_list[10:15])
print(big_list[15:])  
print(big_list[:])   

print("\n2 რიცხვის გადაცემით:")
print(big_list[::2])  
print(big_list[1::2])
print(big_list[2:10:2]) 
print(big_list[5::3])  
print(big_list[:10:2])  

print("\n3 რიცხვის გადაცემით:")
print(big_list[::-1])  
print(big_list[19:10:-1]) 
print(big_list[::3])   
print(big_list[1:15:3])
print(big_list[5:2:-1])
