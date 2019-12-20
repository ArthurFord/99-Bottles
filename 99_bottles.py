numberRequested = int(input("How many bottles? "))

def bottle_song(numberOfBottles, count):
	
	if numberOfBottles == 0:
		print("No more bottles of beer on the wall, no more bottles of beer.")
		print(f'Go to the store and buy some more, {count} bottles of beer on the wall.')
	elif numberOfBottles == 1:
		print(f'{numberOfBottles} bottle of beer on the wall, {numberOfBottles} bottle of beer.')
		print("Take one down and pass it around, no more bottles of beer on the wall.")
		bottle_song(numberOfBottles - 1, count + 1)
	elif numberOfBottles == 2:
		print(f'{numberOfBottles} bottle of beer on the wall, {numberOfBottles} bottle of beer.')
		print(f'Take one down and pass it around, {numberOfBottles-1} bottle of beer on the wall.')
		bottle_song(numberOfBottles - 1, count + 1)
	else:
		print(f'{numberOfBottles} bottles of beer on the wall, {numberOfBottles} bottles of beer.')
		print(f'Take one down and pass it around, {numberOfBottles - 1} bottles of beer on the wall.')
		bottle_song(numberOfBottles - 1, count + 1)

bottle_song(numberRequested, 0)
