import os
import json
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """A User"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    likes = db.Column(db.Integer, db.ForeignKey("likes.like_id"))
    follower = db.Column(db.Integer, db.ForeignKey("follow.follow_id"))
    like_notification = db.Column(db.Integer, db.ForeignKey("like.like_id"))
    comment_notification = db.Column(db.Integer, db.ForeignKey("comment.comment_id"))
    fname = db.Column(db.String)
    lname = db.Column(db.String)
    email = db.Column(db.String, Unique=True)
    password = db.Column(db.String)
    displayname = db.Column(db.String(15))

    def __repr__(self):
        return f'<User ID={self.user_id}, Name= {self.fname} {self.lname}, Email={self.email}'


class Follower(db.Model):
    """A Follower"""

    __tablename__ = "followers"

    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    followers = db.Column(db.Integer)
    followers_list = db.Column(db.String)

    def __repr__(self):
        return f'<User Following ID={self.user_id}'

        
        
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

