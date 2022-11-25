class Event:
    def __init__(self, date, event_name, guest_no, room_location, description, recurring):
        self.date = date
        self.event_name = event_name
        self.guest_no = guest_no
        self.room_location = room_location
        self.description = description
        self.recurring = recurring