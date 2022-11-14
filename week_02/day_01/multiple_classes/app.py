from modules.car import *
from modules.engine import *
from modules.gearbox import *

engine = Engine(2)
gearbox = Gearbox(6)

car = Car("Red", "Ford", engine, gearbox)

print(engine.volume)
print(car.engine.ignite())