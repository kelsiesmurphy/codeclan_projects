class Game:
    def __init__(self, player1, player2):
        self.player1 = player1
        self.player2 = player2

    # def check_win_old(self, player1, player2):
    #     if player1.choice == "rock" and player2.choice == "scissors":
    #         return "Player 1 wins by playing rock"
    #     elif player1.choice == "scissors" and player2.choice == "paper":
    #         return "Player 1 wins by playing scissors"
    #     elif player1.choice == "paper" and player2.choice == "rock":
    #         return "Player 1 wins by playing paper"
    #     elif player1.choice == "scissors" and player2.choice == "rock":
    #         return "Player 2 wins by playing rock"
    #     elif player1.choice == "paper" and player2.choice == "scissors":
    #         return "Player 2 wins by playing scissors"
    #     elif player1.choice == "rock" and player2.choice == "paper":
    #         return "Player 2 wins by playing paper"
    #     else:
    #         return None


    def check_win(self, player1_move, player2_move):
        if player1_move == player2_move:
            return None
        elif player1_move == "scissors" and player2_move == "paper":
            return "Player 1 wins by playing scissors"
        elif player1_move == "paper" and player2_move == "rock":
            return "Player 1 wins by playing paper"
        elif player1_move == "scissors" and player2_move == "rock":
            return "Player 2 wins by playing rock"
        elif player1_move == "paper" and player2_move == "scissors":
            return "Player 2 wins by playing scissors"
        elif player1_move == "rock" and player2_move == "paper":
            return "Player 2 wins by playing paper"