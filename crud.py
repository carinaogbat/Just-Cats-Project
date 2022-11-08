from model import db, User, Photo, LikeNotification, Comment, Follower, CommentNotification, connect_to_db



# create a user 
def create_user(fname, profile_img, petname, email, likes=None, 
follower_id=None, like_notification=None, 
comment_id=None, bio=None, password=None, username=None):
    """Creates a User"""

    user = User(fname=fname, profile_img=profile_img, 
    petname=petname, email=email)

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