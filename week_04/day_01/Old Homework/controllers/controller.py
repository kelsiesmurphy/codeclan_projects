from flask import render_template, request
from models.game import Game
from app import app

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/play1")
def first_player():
    return render_template("player1.html")

@app.route("/play2")
def second_player():
    return render_template("player2.html")

# @app.route("/<player1>/<player2>")
# def outcome(player1, player2):
#     # winning_player = check_win(player1, player2)
#     print(winning_player.name)
#     return render_template("outcome.html", winner=winning_player.name)