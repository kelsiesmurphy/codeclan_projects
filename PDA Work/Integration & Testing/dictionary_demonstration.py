orchestra = {
    "woodwind" : {
        "colour": "green",
        "no_of_seats": 17,
        "instruments" : ["clarinet", "flute", "piccolo", "oboe", "bassoon", "contrabassoon", "bass clarinet"]
    },
    "strings" : {
        "colour": "purple",
        "no_of_seats": 65,
        "instruments" : ["first_violins", "second_violins", "violas", "cellos", "double_basses"]
    },
    "brass" : {
        "colour": "blue",
        "no_of_seats": 12,
        "instruments" : ["trumpets", "cornets", "trombones", "tubas", "french_horns", "english_horns"]
    },
    "percussion" : {
        "colour": "yellow",
        "no_of_seats": 11,
        "instruments" : ["tubular_bells", "xylophone", "triangle", "castanets", "cymbals", "snare_drum", "gong", "bass_drum", "timpani", "piano", "harp"]
    },
}

def find_instrument():
    section = input("Please give a section of an orchestra (woodwind, brass, strings or percussion): ").lower()
    instrument_count = len(orchestra[section]["instruments"])
    number = int(input(f"Please give a number lower than {instrument_count}: "))

    return orchestra[section]["instruments"][number + 1]

print(f"The instrument you have selected is '{find_instrument()}'")
