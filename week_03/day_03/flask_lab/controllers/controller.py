from app import app
from flask import render_template
from models.all_orders import all_orders

@app.route("/all_orders")
def orders():
    return render_template("index.html", all_orders=all_orders)

@app.route("/all_orders/<index>")
def show_task(index):
    order = all_orders[int(index)]
    return render_template("order.html", order=order)