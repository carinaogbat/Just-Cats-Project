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
    fname, profile_img, petname, bio, email, username, password = (
        user["pawrent"], user["profile_img"], user["pet"], user['bio'],
        user["email"], user["username"], user["password"]
    )
    db_user = crud.create_user(fname, profile_img, petname, bio,
        email, username, password)
    users_in_db.append(db_user)

ogbot_photos_in_db = ["/static/imgs/TiniestFloof.jpeg", "static/images/MouseFloof.jpeg", 
    "static/imgs/YoungFloof.jpeg", "static/imgs/NappingFloof", "static/imgs/ComputerFloof"]

ogbot = model.User.query.first()
for photo_url in ogbot_photos_in_db:
    db_photos = crud.create_photo(user_id=ogbot, url=photo_url)




model.db.session.add_all(users_in_db, db_photos)
model.db.session.commit()