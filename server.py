from flask import Flask, jsonify, render_template
from model import db, User, Photo, Like, LikeNotification, Comment, Follower, CommentNotification, connect_to_db
import crud

app = Flask(__name__)


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
        user_profile_pics_list.append({"profile_pic":user.profile_url})
    return jsonify(user_profile_pics_list)

@app.route('/api/alluserinfo')
def get_all_user_info_json():

    users = db.session.query(User).all()
    users_dict = users.as_dict()



    return jsonify(users_dict)




# @app.route(''):
### def user_profile():
# """Returns user profile"""
# return render_template(')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")