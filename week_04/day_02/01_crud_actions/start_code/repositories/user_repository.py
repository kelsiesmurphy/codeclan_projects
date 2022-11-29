from db.run_sql import run_sql
from models.user import User
  

def create(user):
    sql = """INSERT INTO users (first_name, last_name) 
    VALUES (%s, %s) RETURNING *"""
    values = [user.first_name, user.last_name]
    results = run_sql(sql, values)
    id = results[0]["id"]
    user.id = id
    return user

def read_user(id):
    user = None
    sql = "SELECT * FROM users WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)
    if results:
        result = results[0]
        user = User(result['first_name'], result['last_name'], result['id'])
        return user

def read_all():  
    users = [] 
    sql = "SELECT * FROM users"
    results = run_sql(sql)
    for row in results:
        user = User(row['first_name'], row['last_name'], row['id'] )
        users.append(user)
    return users 

def update(user):
    sql = "UPDATE users SET (first_name, last_name) = (%s, %s) WHERE id = %s"
    values = [user.first_name, user.last_name, user.id]
    run_sql(sql, values)

def delete(user):
    sql = "DELETE FROM users WHERE id = %s"
    values = [user.id]
    run_sql(sql, values)

def delete_all():
    sql = "DELETE FROM users"
    run_sql(sql)