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
    <li><Link to="/login">Log In or Sign Up Here</Link></li>
    <p>Not sure if you want to sign up yet?</p>
    <li><Link to="/explore">Look at cute cats here!</Link></li>
    </div>
    )
}

function Explore(props) {
    return (
        <React.Fragment>
            <diV>
                <ul>
                    <li>listing</li>
                    <li>all database</li>
                    <li>users here</li>
                </ul>
                </diV>

        </React.Fragment>
    )
}


function SignUp(props) {
    return (
            <React.Fragment>
            <h2>Lets sign you up!</h2>
            <body>
                <p>Wrong page?</p>
            <li><Link to="/login">Log In Here</Link></li>
                <p>will need to put form here</p>
            </body>
            </React.Fragment>

    )
}


//login page should have sign up option
function Login(props) {
    return (
        
        <React.Fragment>
        <h1> Lets log you in or:</h1>
        <h2>Lets sign you up!</h2>
            <p>will need to put form here</p>
        </React.Fragment>
        
        )
}

function MyProfile(props) {
    return (
    <h1>Here's your profile</h1>
    )
}

function ViewOtherProfile(props) {
    return (
        <React.Fragment>
        <h3>look at this other users profile here </h3>
        <h5>awwww here's all their cute cat pictures</h5>
        </React.Fragment>
    )
}


function Hello(props) {
    return (
    <p>Welcome {props.username}</p>
    )
}

// const Login = () => <h1>Login</h1>
// const SignUp = () => <h1>Sign Up </h1>
// const MyProfile = () => <h1>My Profile</h1>
// const UserProfile = () => <h1>Other User Profile</h1>
// const MyPhoto = () => <h1>My cute photo</h1>
// const UserPhoto = () => <h1>another person's cute photo</h1>
// const Following = () => <h1>Users Followed</h1>


// const App = () => (
//     <ReactRouterDOM.HashRouter>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Sign Up</Link></li>
//         <li><Link to="/myprofle">My Profile</Link></li>
//         <li><Link to="/userprofile">User Profle</Link></li>
//         <li><Link path="/myphoto">My Photo</Link></li>
//         <li><Link path="/userphoto">User photo</Link></li>
//         <li><Link path="/following">Following</Link></li>
//       </ul>
  
//       <Route path="/" exact component={Home} />
//       <Route path="/login" component={Login} />
//       <Route path="/signUp" component={SignUp} />
//       <Route path="/myprofile" component={MyProfile} />
//       <Route path="/userprofile" component={UserProfile} />
//       <Route path="/myphoto" component={MyPhoto} />
//       <Route path="/userphoto" component={UserPhoto} />
//       <Route path="/following" component={Following} />
      
//     </ReactRouterDOM.HashRouter>
//   )

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
        </ReactRouterDOM.BrowserRouter>
      );
}

ReactDOM.render(<App />, document.querySelector('#root'));