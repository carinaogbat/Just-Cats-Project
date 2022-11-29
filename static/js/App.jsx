const Link = ReactRouterDOM.Link;



// Components Wanted:
// -Login
// -logout
// -display username
// -search user
// -upload photo
// -display photo
// -like photo
// -get users by likes
// -get likes by users

function NavBar (props) {
    return (
        <nav>
            <ReactRouterDOM.Link to="/" className="navbar">
                <span>  Home  </span>
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="explore" className="navbar">
                <span>  Explore  </span>
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="myprofile" className="navbar">
                <span>  My Profile  </span>
            </ReactRouterDOM.Link>

        </nav>
    )
}


function Homepage(props) {
    return (
    <React.Fragment>
    <h1>Home</h1>
    <li><Link to="/login">Log In Here</Link></li>
    <li><Link to="/signup">Or Sign Up Here</Link></li>
    <p>Not sure if you want to sign up yet?</p>
    <Link to="/explore">Look at cute public cats here!</Link>
    </React.Fragment>
    )
}

    // <img src="${profilePics.profile_img}"></img>
    //whatever my key is in python server becomes the . behind whatever I
    //I am setting in REACT
    //if i'm wondering if anything is carrying over don't forget to console.log(profilePics)
    //adding string interpolation to get photos <img src={`${profilePic.profile_pic}.jpg`} />



function Explore() {

    const [profilePics, setProfilePics] = React.useState([])

    React.useEffect(() => {
        fetch('/api/explorepagephotos')
        .then((response) => response.json())
        .then((responseJson) => {
            setProfilePics(responseJson);
        });

    }, []);

    return (
        <React.Fragment>

            <div id="full_size_pictures">
            { profilePics.map(profilePic => <img src={profilePic.profile_pic} height="512" width="360" /> ) }
            { profilePics.map(profilePic => <p><Link to="/viewotherprofile">{profilePic.username}</Link></p> ) }
            </div>
        </React.Fragment>
    )
}

// return { users.map(user => <User name = {user.firstName} email = {user.email} /> ) };


function SignUp(props) {

    const [user, setUser] = React.useState({fName: "", profileImg:"", petName:"",
    petBio:"", email:"", userName:"", password:""})

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/signup', { method: "POST",
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json',
}})};



// return jsonify({"status":200, "message": "succesfully created user",
// 'fname':fname, 'profile_img':profile_img, 'pet_name':pet_name, 'pet_bio':pet_bio, 
// 'email':email, 'username':username, 'password':password})
    return (
            <React.Fragment>
            <h2>Lets sign you up!</h2>
            <div>
                <h1>Sign Up Here</h1>
                <form id="sign up" onSubmit={handleSubmit}></form>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="fname" onChange={(e) => setUser({...user, fName: e.target.value})}></input>
                <label htmlFor="profile-image">Profile Image</label>
                <input type="text" id="profile-image" onChange={(e) => setUser({...user, profileImg: e.target.value})}></input>
                <label htmlFor="pet-name">Pet Name</label>
                <input type="text" id="pet-name" onChange={(e) => setUser({...user, petName: e.target.value})}></input>
                <label htmlFor="pet-bio">Pet Bio</label>
                <input type="text" id="pet-bio" onChange={(e) => setUser({...user, petBio: e.target.value})}></input>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={(e) => setUser({...user, email: e.target.value})}></input>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => setUser({...user, userName: e.target.value})}></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setUser({...user, password: e.target.value})}></input>
                <button type="submit">Sign In</button>
            </div>
            <p>I will need to log you into session</p>
            <p>Wrong page?</p>
            <Link to="/login">Log In Here</Link>
                

            </React.Fragment>

    )
}


function Login() {

    const [user, setUser] = React.useState({email:"", password:""});

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/login', { method: "POST",
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json',
}})};


    return (
        <React.Fragment>
            <div>
                Login Form 
                <h2>Sign In Below:</h2>
                <form id="loginform" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={(e) => setUser({...user, email: e.target.value})}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setUser({...user, password: e.target.value})}></input>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            

        <p>then I need to make sure I put you in session</p>
        <p>Once you're in session I will have to redirect you to your profile</p>
        <Link to="/myprofile">This link will really be a redirect to your profile</Link>

        <h2>Are you not a user?</h2>
            <p>we can sign you up</p>
        <Link to="/signup">You can click here to go to sign up page</Link>
        </React.Fragment>
        
        )
}

function MyProfile(props) {

    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        fetch('/api/myprofile')
        .then((response) => response.json())
        .then((responseJson) => {
            setUsers(responseJson);
        });

    }, []);


    const [photos, setPhotos] = React.useState([])

    React.useEffect(() => {
        fetch('/api/myprofilepictures')
        .then((response) => response.json())
        .then((responseJson) => {
            setPhotos(responseJson);
        });

    }, []);


    return (
        <React.Fragment>
            <Hello username={users.fname}/>
            <div id="profile-info">
                <h3>{users.username}</h3>
                <img src={users.profile_img} height="256" width="180"></img>
                <h4>Meet {users.petname}!</h4>
            <p>{users.bio}</p>
            </div>
            <Link to="following">Here's where you can see pictures of users you're following</Link>

            <div id="profile-pictures">
            { photos.map(photo => <img src={photo.photo_url} height="512" width="360" /> ) }
            </div>


    

    <p>you will also be able to click on your thumbnail pictures</p>
    <Link to="/viewowneduserimage">In case you want to delete it</Link>
    </React.Fragment>

    )
}

            /* <div id="profile-photos">
            { users.map(user => <User photos = {user.photos} /> ) } 
            </div> */

//eventually would like view other profile to
//just show username of other profile as url
function ViewOtherProfile(props) {
    return (
        <React.Fragment>
        <p>I have to make sure you're in the session, else return you to login</p>
        <p>want to log out? I'll put reusable logout component here</p>
        <h3>look at this other users profile here </h3>
        <h5>awwww here's all their cute cat pictures as thumbnails</h5>
        <Link to="/viewunowneduserimage">You can click here to make the photo big</Link>
        </React.Fragment>
    )
}

function ViewOwnedUserImage(props) {
    return (
        <React.Fragment>
            <p>I have to make sure you're in the session, else return you to login</p>
            <p>want to log out? I'll put reusable logout component here</p>
            <p>Awwww look at my cute picture</p>
            <p>this picture is large because I clicked it from my profile thumbnail</p>
            <p>Do i want to delete my picture?</p>
        </React.Fragment>
    )

}

function ViewUnownedUserImage(props){
    return (
        <React.Fragment>
            <p>I have to make sure you're in the session, else return you to login</p>
            <p>want to log out? I'll put reusable logout component here</p>
            <p>this is not my picture I can like it but not delete it</p>
            <p>I clicked it from the thumblist now it is large</p>
        </React.Fragment>
    )

}

function Following() {
    const [photos, setPhotos] = React.useState([])

    React.useEffect(() => {
        fetch('/api/followingfeed')
        .then((response) => response.json())
        .then((responseJson) => {
            setPhotos(responseJson);
        });

    }, []);

    console.log(photos)
    return (
        <React.Fragment>
            <p>I have to make sure you're in the session, else return you to login</p>
            <p>want to log out? I'll put reusable logout component here</p>
            <div id="following-pictures">
            { photos.map(photo => <img src={photo.user_pic} height="512" width="360" /> ) }
            </div>
            <>these photos will be displayed large and not as thumbnails</>
            <p>now you'll be able to like the photo</p>
            <Link to="ViewOtherProfile">And go to the username linked to the photo</Link>
        </React.Fragment>
    )
}

function Hello(props) {
    return (
    <p>Welcome {props.username}!</p>
    )
}



function App() {
    return (

        <ReactRouterDOM.BrowserRouter>
            <NavBar />
            <React.Fragment>
            <ReactRouterDOM.Route exact path="/">
              <Homepage />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/signup">
                <SignUp />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/login">
                <Login />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/myprofile">
              <MyProfile />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/explore">
              <Explore />
            </ReactRouterDOM.Route>
            </React.Fragment>
            <ReactRouterDOM.Route exact path="/viewotherprofile">
                <ViewOtherProfile />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/viewowneduserimage">
                <ViewOwnedUserImage />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/viewunowneduserimage">
                <ViewUnownedUserImage />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/following">
                <Following />
            </ReactRouterDOM.Route>
        </ReactRouterDOM.BrowserRouter>
      );
}

ReactDOM.render(<App />, document.querySelector('#root'));