import unittest
from src.modules.gearbox import *
from src.modules.engine import *
from src.modules.car import *



class TestMultipleClasses(unittest.TestCase):
    engine = Engine(2)
    gearbox = Gearbox(6)
    car = Car("Red", "Ford", engine, gearbox)

    # @unittest.skip("delete this line to run the test")
    def test_get_engine_capacity(self):
        self.assertEqual(2, self.engine.volume)

    # @unittest.skip("delete this line to run the test")
    def test_get_gearbox_num_gears(self):
        self.assertEqual(6, self.gearbox.num_of_gears)

    # @unittest.skip("delete this line to run the test")
    def test_update_car_colour(self):
        self.car.colour = "Blue"
        self.assertEqual("Blue", self.car.colour)

    # @unittest.skip("delete this line to run the test")
    def test_clutch_engages(self):
        self.assertEqual("Clutch engaged", self.gearbox.engage_clutch())

    # @unittest.skip("delete this line to run the test")
    def test_engine_starts(self):
        self.assertEqual("Engine started", self.engine.ignite())


    # @unittest.skip("delete this line to run the test")
    def test_add_miles(self):
        self.car.add_miles(True)
        self.assertEqual(5, self.car.miles)