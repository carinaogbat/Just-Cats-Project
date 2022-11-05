from flask import Flask, jsonify, render_template
from model import db, User, Photo, Like, LikeNotification, Comment, Follower, CommentNotification, connect_to_db

app = Flask(__name__)


@app.route('/')
def homepage():
    """Returns homepage"""

    return render_template('index.html')

# @app.route(''):
### def user_profile():
# """Returns user profile"""
# return render_template(')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")