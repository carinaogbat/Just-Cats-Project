from model import db, User, Photo, Like, Notification, Comment, Follower, CommentNotification, connect_to_db



# create a user 
def create_user(fname, email):
    """Creates a User"""

    user = User(fname=fname)

    return user

# return a user by id
def get_user_by_id(user_id):
    """Returns a user by ID"""

    return User.query.get(user_id)

#return a user by username
def get_user_by_username(username):
    """Returns a user by Username"""

    return User.query.get(username)




# upload a photo

# view a photo
def get_photo_by_id(photo_id):
    """Gets a photo by ID"""

    return Photo.query.get(photo_id)

# delete a photo

#create a like

#create a comment

#create a notification

#return a notification

#create a notification comment

#return a notification comment