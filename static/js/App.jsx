const Link = ReactRouterDOM.Link;
// const Route = ReactRouterDOM.Route;


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
                <span>Home</span>
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="explore">
                <span>Explore</span>
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="myprofile">
                <span>My Profile</span>
            </ReactRouterDOM.Link>

        </nav>
    )
}


function Homepage(props) {
    return (
    <div>
    <h1>Home</h1>
    <li><Link to="/signup">Sign Up</Link></li>
    </div>
    )
}

function Explore(props) {
    return (
        <React.Fragment>
            <body>
                <ul>
                    <li>listing</li>
                    <li>all database</li>
                    <li>users here</li>
                </ul>
            </body>
        </React.Fragment>
    )
}

function Login(props) {
    return (
    <h1>Log in Here</h1>
    )
}

function MyProfile(props) {
    return (
    <h1>Here's your profile</h1>
    )
}

function SignUp(props) {
    return (
        <React.Fragment>
        <h2>Lets sign you up!</h2>
        <body>
            <p>will need to put form here</p>
        </body>
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
            <ReactRouterDOM.Route exact path="/">
              <Homepage />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/login">
                <Login />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/myprofile">
              <Profile />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/signup">
                <SignUp />
            </ReactRouterDOM.Route>
        </ReactRouterDOM.BrowserRouter>
      );
}

ReactDOM.render(<App />, document.querySelector('#root'));