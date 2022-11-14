class Team:
    def __init__(self, name, player_list, coach):
        self.name = name
        self.players = player_list
        self.coach = coach
        self.points = 0

    def add_player(self, new_player):
        self.players.append(new_player)

    def has_player(self, player):
        if player in self.players:
            return True
        else:
            return False

    #  EXTENSIONS

    def play_game(self, has_won):
        if has_won:
            self.points += 3
