const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

const App = () => (
  <ReactRouterDOM.HashRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/myprofle">My Profile</Link></li>
      <li><Link to="/userprofile">User Profle</Link></li>
    </ul>

    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/myprofile" component={MyProfile} />
    <Route path="/userprofile" component={UserProfile} />
    <Route path="/myphoto" component={MyPhoto} />
  </ReactRouterDOM.HashRouter>
)

const Home = () => <h1>Home</h1>
const Login = () => <h1>Login</h1>
const Register = () => <h1>Register</h1>
const MyProfile = () => <div><h1>Username Profile</h1>
    <h2>wrapping whatever I want in divs to test it out</h2>
    </div>
const UserProfile = () => <div><h1>Other User Profile</h1>
<h2>Putting more things on user profile</h2>
</div>
const MyPhoto = () => <h1>My cute photo</h1>

function Hello(props) {
    return <p>Welcome {props.username}</p>
}

ReactDOM.render(<App />, document.querySelector('#root'));