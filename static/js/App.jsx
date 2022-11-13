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
            <ReactRouterDOM.Link to="/">
                <span> Home </span>
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="explore">
                <span> Explore </span>
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="myprofile">
                <span> My Profile </span>
            </ReactRouterDOM.Link>

        </nav>
    )
}


function Homepage(props) {
    return (
    <div>
    <h1>Home</h1>
    <li><Link to="/login">Log In Here</Link></li>
    <li><Link to="/signup">Or Sign Up Here</Link></li>
    <p>Not sure if you want to sign up yet?</p>
    <li><Link to="/explore">Look at cute cats here!</Link></li>
    </div>
    )
}

function Explore(props) {
    return (
        <React.Fragment>

                <ul>
                    <li>listing</li>
                    <li>all database</li>
                    <li>users here</li>
                </ul>


        </React.Fragment>
    )
}


function SignUp(props) {
    return (
            <React.Fragment>
            <h2>Lets sign you up!</h2>
            <p>I will need to put your sign up form here</p>
                <p>Wrong page?</p>
            <li><Link to="/login">Log In Here</Link></li>
                

            </React.Fragment>

    )
}


//login page should have sign up option
function Login(props) {
    return (
        
        <React.Fragment>
        <h1> Lets log you in:</h1>
        <p>I need to put login form here</p>
        <h2>Are you not a user?</h2>
            <p>we can sign you up</p>
        <li><Link to="/signup">You can click here to go to sign up page</Link></li>
        </React.Fragment>
        
        )
}

function MyProfile(props) {
    return (
        <React.Fragment>
    <h1>Here's your profile</h1>
    <p>I have your username and profile picture displayed at the top</p>
    <p> heres who's following you and who you're following</p>
    <Link to="following">Here's where you can see pictures of users you're following</Link>
    <ul>
        <li>lets list your cute</li>
        <li> cat pictures here</li>
    </ul>
    </React.Fragment>

    )
}


//eventually would like view other profile to
//just show username of other profile as url
function ViewOtherProfile(props) {
    return (
        <React.Fragment>
        <h3>look at this other users profile here </h3>
        <h5>awwww here's all their cute cat pictures</h5>
        </React.Fragment>
    )
}

function ViewOwnedUserImage(props) {
    return (
        <React.Fragment>
            <p>Awwww look at my cute picture</p>
            <p>Do i want to delete my picture?</p>
        </React.Fragment>
    )

}

function ViewUnownedUserImage(props){
    return (
        <React.Fragment>
            <p>this is not my picture I can like it but not delete it</p>
        </React.Fragment>
    )

}

function Following(props) {
    return (
        <React.Fragment>
            <ul>
                <li> here's a list </li>
                <li> of users profiles and photos</li>
                <li> who I am following!</li>
            </ul>
            <p>now you'll be able to click the photo</p>
            <Link to="ViewOtherProfile">And see someone else's profile</Link>
        </React.Fragment>
    )
}

function Hello(props) {
    return (
    <p>Welcome {props.username}</p>
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