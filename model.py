import os
import json
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_to_db(flask_app, db_uri="postgresql:///just-cats", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")



class User(db.Model):
    """A User"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    likes = db.Column(db.Integer, db.ForeignKey("likes.like_id"))
    follower_id = db.Column(db.Integer, db.ForeignKey("follower.follower_id"))
    like_notification = db.Column(db.Integer, db.ForeignKey("like.like_id"))
    comment_notification = db.Column(db.Integer, db.ForeignKey("comment.comment_id"))
    fname = db.Column(db.String)
    petname = db.Column(db.String)
    bio = db.Column(db.Text)
    profile_img = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    username = db.Column(db.String(15), unique=True)



    def __repr__(self):
        return f'<User ID={self.user_id}, Name= {self.fname}, Pet Name= {self.petname}, Email={self.email}'


class Follower(db.Model):
    """A Follower"""

    __tablename__ = "followers"

    follower_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    follows_user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    followers = db.Column(db.Integer)
    followers_list = db.Column(db.String)



    def __repr__(self):
        return f'<User USER ID ={self.follower_id} Following USER ID={self.follows_user_id}'

        
        
class Photo(db.Model):
    """A photo"""
    __tablename__ = "photos"

    photo_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    like_id = db.Column(db.Integer, db.ForeignKey("like.like_id"))
    comment_id = db.Column(db.Integer, db.ForeignKey("comment.comment_id"))
    url = db.Column(db.String)
    post_date = db.Column(db.DateTime)

    def __repr__(self):
        return f'<Photo ID={self.photo_id}, URL={self.url}'


class Like(db.Model):
    """A Like"""

    like_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    photo_id = db.Column(db.Integer, db.ForeignKey("photo.photo_id"))
    num_likes = db.Column(db.Integer)

    def __repr__(self):
        return f'Like ID={self.like_id} Liked By={self.user_id}'


class Notification(db.Model):
    """A like notification"""

    like_notification_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    like_id = db.Column(db.Integer, db.ForeignKey("like.like_id"))
    photo_id = db.Column(db.Integer, db.ForeignKey("photo.photo_id"))
    notification_text = db.Column(db.String)

    def __repr__(self):
        return f'<Like ID={self.like_notification_id} Liked By={self.user_id}'


class Comment(db.Model):
    """A comment on a photo"""

    comment_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    photo_id = db.Column(db.Integer, db.ForeignKey("photo.photo_id"))
    comment_text = db.Column(db.Text)

    def __repr__(self):
        return f'Comment ID = {self.comment_id}, Commented By={self.user_id}'



class CommentNotification(db.Model):
    """A comment notification"""

    comment_notification_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    like_notification_id = db.Column(db.Integer, db.ForeignKey("like.like_notification_id"))
    comment_id = db.Column(db.Integer, db.ForeignKey("comment.comment_id"))
    comment_text = db.Column(db.Text, db.ForeignKey("comment.comment_text"))

    def __repr__(self):
        return f'Comment ID={self.comment_notification_id}, Comment Text={self.comment_text}'


if __name__ == "__main__":
    from server import app

    connect_to_db(app)

