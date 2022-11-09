#  Unit Test 1
def get_name(record_store):
    return record_store["name"]

#  Unit Test 2
def find_record_by_title(title, record_store):
    for record in record_store["records"]:
        if record["title"] == title:
            return record
    return None

#  Unit Test 3
def sell_record(record, record_store):
    record_store["money"] += record["price"]
    record_store["records"].remove(record)