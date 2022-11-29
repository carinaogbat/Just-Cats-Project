from flask import (Flask, jsonify, render_template, request, flash, session, redirect)
from model import connect_to_db, db, User, Photo, Like, LikeNotification, Comment, Follower, CommentNotification, connect_to_db
import crud

app = Flask(__name__)
app.secret_key = "dev"


@app.route('/')
def homepage():
    """Returns homepage"""

    return render_template('index.html')


@app.route("/api/explorepagephotos")
def get_all_profile_photos_json():
    """Gets all public user photos returned in json"""

    users = db.session.query(User).all()
    user_profile_pics_list = []
    for user in users:
        user_profile_pics_list.append({"profile_pic":user.profile_img, "username":user.username})
    return jsonify(user_profile_pics_list)

@app.route("/api/myprofile")
def display_user_profile():
    """Gets and displays user info and photos"""

    username = "OgBot"
    user = crud.get_user_by_username(username)

    return jsonify({"user_id":user.user_id, "fname":user.fname, "petname":user.petname,
        "bio":user.bio, "profile_img":user.profile_img, "email":user.email,
        "username":user.username})

@app.route("/api/myprofilepictures")
def display_user_photos():
    username = "OgBot"
    user = crud.get_user_by_username(username)
    user_photos = crud.get_users_photos(user.user_id)
    user_photos_list = []
    for photos in user_photos:
        user_photos_list.append({"photo_url":photos.url})

    return jsonify(user_photos_list)

@app.route("/api/followingfeed")
def display_user_photos_followed():
    """Gets feed of all pictures of users followed"""

    photos = db.session.query(Photo).all()
    users_posted_photos = []
    for photo in photos:
        users_posted_photos.append({"user_pic":photo.url})
    return jsonify(users_posted_photos)


@app.route('/api/login', methods=["POST"])
def validate_user_login():

    email = request.json.get('email')
    password = request.json.get('password')
    user = crud.get_user_by_email(email)
    if not user or user.password != password:
        flash("Whoops! The email or password you entered is incorrect.")
        print("***Wrong email or password ***")
        return jsonify({"status":400, "message": "wrong email or password"})
        #can i get this to pull back to front and show invalid user?
        
    else:
        valid_user = True
        return jsonify({"status":200, "message": "succesfully retrived user", "user" : user.as_dict()})

@app.route('/api/signup', methods=["POST"])
def sign_up_user():
    """Create a new account for a user"""

    fname = request.json.get("First Name")
    profile_img = "/static/styles/imgs/DefaultFloof.jpeg"
    pet_name = request.json.get("Pet Name")
    pet_bio = request.json.get("Pet Bio")
    email = request.json.get("Email")
    username = request.json.get("Username")
    password = request.json.get("Password")


    all_users = crud.get_all_users()

    for users in all_users:
        if email or username in all_users:
            flash("Your email or username is already on file, please sign in")
            return jsonify({"status":400, "message": "create user failed, user exists"})
        else:
            new_user = crud.create_user(fname=fname, profile_img=profile_img, 
                petname=pet_name, pet_bio=pet_bio, email=email, username=username, 
                password=password)

            db.session.add(new_user)
            db.session.commit()

            if new_user:
                flash('Congratulations you\'ve created your account!')
                return jsonify({"status":200, "message": "succesfully created user",
                'fname':fname, 'profile_img':profile_img, 'pet_name':pet_name, 'pet_bio':pet_bio, 
                'email':email, 'username':username, 'password':password})
            else:
                print("***Create user failed***")
                flash("There was an error creating your account")
                return jsonify({"status":400, "message": "create user failed"})







# @app.route('/api/alluserinfo')
# def get_all_user_info_json():

#     users = db.session.query(User).all()
#     users_dict = users.as_dict()



#     return jsonify(users_dict)




# @app.route(''):
### def user_profile():
# """Returns user profile"""
# return render_template(')

if __name__ == "__main__":
    connect_to_db(app)
    app.run(debug=True, host="0.0.0.0")