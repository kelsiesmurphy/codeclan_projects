from src.modules.car import *
from src.modules.engine import *
from src.modules.gearbox import *

engine = Engine(2)
gearbox = Gearbox(6)

car = Car("Red", "Ford", engine, gearbox)

print(engine.volume)
print(car.engine.ignite())