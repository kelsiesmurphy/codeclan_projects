# Set is_raining = INPUT
# If it_raining is "Y"
#   Print "Take the car"
# Else
#   If distance < 5
#     then print "You should walk"
#   else
#     then print "You should take the bus"

distance = 6
is_raining = input("Is it raining? (Y/n) ")

if is_raining == "Y":
    print("Take the car")
elif distance < 5:
    print("You should walk")
else:
    print("You should get the bus")