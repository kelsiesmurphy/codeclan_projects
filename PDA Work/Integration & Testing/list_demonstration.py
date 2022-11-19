musical_instruments = ["Ukulele", "Bassoon", "Guitar", "Flute", "Clarinet", "Saxophone", "Drumkit"]

def instruments_with_long_names():
    long_named_instruments = []
    no_of_characters = int(input("Please give me a number: "))
    for instrument in musical_instruments:
        if len(instrument) >= no_of_characters:
            long_named_instruments.append(instrument)
    print(f"Instruments that have more than {no_of_characters} include {long_named_instruments}")

instruments_with_long_names()