from flask import render_template
from models.pizza_orders import pizzas
from app import app

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/orders")
def orders():
    return render_template("orders.html", pizzas=pizzas)