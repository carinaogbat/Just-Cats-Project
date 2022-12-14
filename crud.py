from model import db, User, Photo, LikeNotification, Comment, Follower, CommentNotification, connect_to_db

# create a user 
def create_user(fname, profile_img, petname, bio, 
    email, username, password):
    """Creates a User"""

    user = User(fname=fname, profile_img=profile_img,
    petname=petname, bio=bio, email=email, username=username,
    password=password)

    return user

def create_photo(user_id, url):
    """Creates a photo"""

    photo = Photo(user_id=user_id, url=url)

    return photo

def create_follow(user_id_follower, user_id_followed):
    """Follows a user by id"""

    follow = Follower(follower_id=user_id_follower, follows_user_id=user_id_followed)

    return follow

def get_user_by_id(user_id):
    """Returns a user by ID"""

    return User.query.get(user_id)

#return a user by username
def get_user_by_username(username):
    """Returns a user by Username"""

    return User.query.filter(User.username == username).first()

def get_user_by_email(email):
    """Returns user by email"""

    return User.query.filter(User.email == email).first()


def get_all_users():
    """Return all users"""

    return User.query.all()

def get_users_photos(user_id):
    """Returns user photos"""

    return Photo.query.filter(Photo.user_id == user_id)

        


    




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