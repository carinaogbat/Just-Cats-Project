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


model.db.session.add_all(users_in_db)
model.db.session.commit()


ogbot_photos_in_db = ["/static/imgs/TiniestFloof.jpeg", "static/images/MouseFloof.jpeg", 
    "static/imgs/YoungFloof.jpeg", "static/imgs/NappingFloof", "static/imgs/ComputerFloof"]
jamie_photos_in_db = ["static/imgs/Pepperoni.jpg", "static/imgs/Chloe.jpg", "static/imgs/BlackJack.jpg"]
lois_photos_in_db = ["static/imgs/Dixie.jpg", "static/imgs/Athena.jpg"]
chelsea_photos_in_db = ["static/imgs/Mac2ndPhoto.jpg", "static/imgs/Charlie.jpg", "static/imgs/MacAndCharlie.jpg"]

ogbot = crud.grab_first_user() 
#remember to grab this user by name
print("*******", ogbot, "*********")
db_photos = []
for photo_url in ogbot_photos_in_db:
    db_photo = crud.create_photo(user_id=ogbot.user_id, url=photo_url)
    db_photos.append(db_photo)



model.db.session.add_all(db_photos)
model.db.session.commit()