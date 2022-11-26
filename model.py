from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """A User"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    likes = db.Column(db.Integer, db.ForeignKey("likes.like_id"))
    follower_id = db.Column(db.Integer, db.ForeignKey("followers.follower_id"))
    like_notification = db.Column(db.Integer, db.ForeignKey("like_notifications.like_notification_id"))
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.comment_id"))
    fname = db.Column(db.String)
    petname = db.Column(db.String)
    bio = db.Column(db.Text)
    profile_img = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    username = db.Column(db.String(10), unique=True)

    db.relationship("Like", back_populates="likes")
    db.relationship("Follower", back_populates="followers")
    db.relationship("LikeNotification", back_populates="like_notifications")
    db.relationship("Comment", back_populates="comments")
    db.relationship("CommentNotification", back_populates="comment_notifications")
    db.relationship("Photo", back_populates="photos")
    
    
    def __repr__(self):
        return f'<User ID={self.user_id}, Name= {self.fname}, Pet Name= {self.petname}, Email={self.email} UserName={self.username}>'



    def as_dict(self):
        """Returns dictionary of user data"""

        return {"user_id":self.user_id, "fname":self.fname, "petname":self.petname,
        "bio":self.bio, "profile_img":self.profile_img, "photos":self.photos, "email":self.email,
        "username":self.username}



class Follower(db.Model):
    """A Follower"""

    __tablename__ = "followers"

    follower_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    follows_user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    followers = db.Column(db.Integer)
    followers_list = db.Column(db.String)

    db.relationship("User", back_populates="user")

    def __repr__(self):
        return f'<User USER ID ={self.follower_id} Following USER ID={self.follows_user_id}>'

        
        
class Photo(db.Model):
    """A photo"""

    __tablename__ = "photos"

    photo_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    like_id = db.Column(db.Integer, db.ForeignKey("likes.like_id"))
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.comment_id"))
    url = db.Column(db.String)
    post_date = db.Column(db.DateTime)
    public = db.Column(db.Boolean)

    db.relationship("User", back_populates="user")

    def __repr__(self):
        return f'<Photo ID={self.photo_id}, URL={self.url}>'


class Like(db.Model):
    """A Like"""

    __tablename__ = "likes"

    like_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    photo_id = db.Column(db.Integer, db.ForeignKey("photos.photo_id"))
    num_likes = db.Column(db.Integer)

    db.relationship("User", back_populates="user")

    def __repr__(self):
        return f'<Like ID={self.like_id} Liked By={self.user_id}>'


class LikeNotification(db.Model):
    """A like notification"""

    __tablename__ = "like_notifications"

    like_notification_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    like_id = db.Column(db.Integer, db.ForeignKey("likes.like_id"))
    photo_id = db.Column(db.Integer, db.ForeignKey("photos.photo_id"))
    notification_text = db.Column(db.String)

    db.relationship("User", back_populates="user")


    def __repr__(self):
        return f'<Like ID={self.like_notification_id} Liked By={self.user_id}>'


class Comment(db.Model):
    """A comment on a photo"""

    __tablename__ = "comments"

    comment_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    photo_id = db.Column(db.Integer, db.ForeignKey("photos.photo_id"))
    comment_text = db.Column(db.Text)

    db.relationship("User", back_populates="user")

    def __repr__(self):
        return f'<Comment ID = {self.comment_id}, Commented By={self.user_id}>'



class CommentNotification(db.Model):
    """A comment notification"""

    __tablename__ = "comment_notifications"

    comment_notification_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.comment_id"))

    db.relationship("User", back_populates="user")

    def __repr__(self):
        return f'<Comment ID={self.comment_notification_id}, Comment Text={self.comment_text}>'


def connect_to_db(flask_app, db_uri="postgresql:///just_cats", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")


if __name__ == "__main__":
    from server import app

    connect_to_db(app)

