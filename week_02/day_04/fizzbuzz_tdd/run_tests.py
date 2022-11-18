import unittest
# from tests.fizzbuzz_test import *

def fizz_buzz(num):
    if num % 3 == 0 and num % 5 == 0:
        return "FizzBuzz"
    elif num % 3 == 0:
        return "Fizz"
    elif num % 5 == 0:
        return "Buzz"
    else:
        return str(num)


class TestFizzBuzz(unittest.TestCase):

    # @unittest.skip("delete this line to run the test")
    def integer_divides_by_3(self):
        result = self.fizz_buzz(3)
        self.assertEqual("Fizz", result)

    @unittest.skip("delete this line to run the test")
    def integer_divides_by_5(self):
        self.assertEqual("Fizz", self.fizz_buzz(5))

    @unittest.skip("delete this line to run the test")
    def integer_divides_by_15(self):
        self.assertEqual("Fizz", self.fizz_buzz(15))

    @unittest.skip("delete this line to run the test")
    def integer_doesnt_divide(self):
        self.assertEqual("Fizz", self.fizz_buzz(7))


if __name__ == '__main__':
    unittest.main()