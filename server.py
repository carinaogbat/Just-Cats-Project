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
        user_profile_pics_list.append({"profile_pic":user.profile_img})
    return jsonify(user_profile_pics_list)

@app.route('/api/login', methods=["POST"])
def validate_user_login():
    data = request.get_json

    email = data.get('email')
    password = data.get('password')
    user_login_info = []
    user = crud.get_user_by_email(email)
    if not user or user.password != password:
        flash("Whoops! The email or password you entered is incorrect.")
    else:
        for info in user:
            user_login_info.append({"email":user.email, "account": True})
        return jsonify(user_login_info)




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