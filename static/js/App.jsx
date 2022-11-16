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

function Explore(props) {
    const [profileImgs, setProfileImgs] = React.useState([])
    React.useEffect(() => {
        fetch('/api/explorepagephotos')
        .then((response) => response.json())
        .then((result) => {
            setProfileImgs(result);
        });

    }, []);

    
    return (
        <React.Fragment>

            <div>

            </div>

                <ul>
                    <li>listing</li>
                    <li>all public database</li>
                    <li>user photos here as large images</li>
                    <li>You don't need to be logged in for this, these are public photos</li>
                </ul>


        </React.Fragment>
    )
}

function RenderProfilePics() {
    return
}


function SignUp(props) {
    return (
            <React.Fragment>
            <h2>Lets sign you up!</h2>
            <p>I will need to put your sign up form here</p>
            <p>I will need to add you to the database</p>
            <p>I will need to log you into session</p>
            <p>Wrong page?</p>
            <Link to="/login">Log In Here</Link>
                

            </React.Fragment>

    )
}


//login page should have sign up option
function Login(props) {
    return (
        
        <React.Fragment>
            
        <h1> Lets log you in:</h1>
        <LogInButton />
        <p>I need to put your login form here</p>
        <p>I need to verify your login info</p>
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
    return (
        <React.Fragment>
            <Hello username="test user"/>
    <p>I have to make sure you're in the session, else return you to login</p>
    <p>want to log out? I'll put reusable logout component here</p>
    <h1>Here's your profile</h1>
    <p>I have your username and profile picture displayed at the top</p>
    <p> heres who's following you and who you're following</p>
    <Link to="following">Here's where you can see pictures of users you're following</Link>
    <ul>
        <li>lets list your cute</li>
        <li> cat pictures here</li>
        <li>these are all as thumbnails</li>
    </ul>
    <p>you will also be able to click on your thumbnail pictures</p>
    <Link to="/viewowneduserimage">In case you want to delete it</Link>
    </React.Fragment>

    )
}


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

function Following(props) {
    return (
        <React.Fragment>
            <p>I have to make sure you're in the session, else return you to login</p>
            <p>want to log out? I'll put reusable logout component here</p>
            <ul>
                <li> here's a list </li>
                <li> of users profiles and photos</li>
                <li> who I am following!</li>
            </ul>
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

function LogInButton() {
    return (
        <button type="button" onSubmit={LogInForm}>
        Log In
        </button>
    )
}

function LogInForm() {
    return (
        <div className="form">
        <form>
            <input type="text" name="username" required></input>
            <input type="password" name="password" required></input>
            <input type="submit"></input>
        </form>
        </div>
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