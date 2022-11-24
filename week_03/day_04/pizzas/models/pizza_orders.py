
from models.pizza import Pizza

pizza1 = Pizza("Margarita", 10, False, "M")
pizza2 = Pizza("Pepperoni", 14, False, "L")
pizza3 = Pizza("Seafood", 12, True, "S")

pizzas = [pizza1, pizza2, pizza3]

def get_order(order_index):
    return pizzas[order_index]

def add_order(order):
    pizzas.append(order)