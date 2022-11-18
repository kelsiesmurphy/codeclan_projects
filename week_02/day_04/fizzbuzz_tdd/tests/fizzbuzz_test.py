import unittest
from src.FizzBuzz import *

class TestFizzBuzz(unittest.TestCase):

    # @unittest.skip("delete this line to run the test")
    def test_integer_divides_by_3(self):
        result = self.fizz_buzz(3)
        self.assertEqual("Fizz", result)

    @unittest.skip("delete this line to run the test")
    def test_integer_divides_by_5(self):
        self.assertEqual("Fizz", self.fizz_buzz(5))

    @unittest.skip("delete this line to run the test")
    def test_integer_divides_by_15(self):
        self.assertEqual("Fizz", self.fizz_buzz(15))

    @unittest.skip("delete this line to run the test")
    def test_integer_doesnt_divide(self):
        self.assertEqual("Fizz", self.fizz_buzz(7))
