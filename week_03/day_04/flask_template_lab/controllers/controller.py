from flask import render_template, request
from models.events import events, add_event
from models.event import Event
from app import app
from datetime import datetime

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/events")
def upcoming_events():
    return render_template("events.html", events=events)

@app.route("/events/new")
def create_event():
    return render_template("create_event.html")

@app.route("/events", methods=["POST"])
def save_event():
    form_data = request.form
    date = request.form["date"]
    date = datetime.strptime(date, '%Y-%m-%d')
    event_name = form_data["event_name"]
    guest_no = form_data["guest_no"]
    room_location = form_data["room_location"]
    description = form_data["description"]
    recurring = form_data["recurring"]

    new_event = Event(date, event_name, guest_no, room_location, description, recurring)
    add_event(new_event)

    return render_template("events.html", events=events)