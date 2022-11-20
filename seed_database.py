import os
import json
import crud
import model
import server

os.system("dropdb just_cats")
os.system("createdb just_cats")

model.connect_to_db(server.app)
model.db.create_all()

with open("data/users_and_cats.json") as f:
    user_data = json.loads(f.read())

users_in_db = []
for user in user_data:
    fname, profile_img, petname, email, username, password = (
        user["pawrent"], user["profile_img"], user["pet"], 
        user["email"], user["username"], user["password"]
    )
    db_user = crud.create_user(fname, profile_img, petname, 
        email, username, password)
    users_in_db.append(db_user)



model.db.session.add_all(users_in_db)
model.db.session.commit()