from models.event import Event
import datetime

event1 = Event(datetime.date(2020, 5, 17), "Quarterly Meeting", 6, "Office", "Discuss wins from this quarter, and goals for Q2", True)
event2 = Event(datetime.date(2020, 5, 17), "Pancake Day", 20, "Room 2", "Pancakes for everyone, with berries and cream!", False)
event3 = Event(datetime.date(2020, 5, 17), "Dwight's birthday surprise", 10, "Room 12", "Don't tell Dwight what is happening!", False)
event4 = Event(datetime.date(2020, 5, 17), "Standup", 6, "Office", "Daily Standup, bring your wins from yesterday and areas you found challenging", True)


events = [event1, event2, event3, event4]


def add_event(new_event):
    events.append(new_event)