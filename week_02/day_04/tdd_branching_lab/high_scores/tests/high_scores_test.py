import unittest

from src.high_scores import latest, personal_best, ordered_high_to_low, personal_top_three

# Tests adapted from `problem-specifications//canonical-data.json` @ v4.0.0


class HighScoresTest(unittest.TestCase):
    
    # Tests
    def setUp(self):
        self.scores = [1, 3, 5, 4, 6, 7, 2]

    # Test latest score (the last thing in the list)
    def test_latest_score(self):
        self.assertEqual(2, latest(self.scores))

    # Test personal best (the highest score in the list)
    def test_latest_score(self):
        self.assertEqual(7, personal_best(self.scores))

    # Test top three from list of scores
    def test_top_three(self):
        self.assertEqual([5, 6, 7], personal_top_three(self.scores))

    # Test ordered from highest to lowest
    def test_sorted_order(self):
        self.assertEqual([1, 2, 3, 4, 5, 6, 7], ordered_high_to_low(self.scores))

    # Test top three when there is a tie


    # Test top three when there are less than three


    # Test top three when there is only one

