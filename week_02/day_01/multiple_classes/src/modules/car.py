class Car:
    def __init__(self, colour, model, engine, gearbox):
        self.colour = colour
        self.model = model
        self.engine = engine
        self.gearbox = gearbox
        self.miles = 0


    def add_miles(self, go):
        if go == True:
            self.miles += 5