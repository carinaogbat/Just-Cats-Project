import "/static/components.jsx"
const Link = ReactRouterDOM.Link;



function App() {
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState({fName: "", profileImg:"", petName:"",
    bio:"", email:"", userName:"", password:""})
    const [userPhotos, setUserPhotos] = React.useState([])
    const [allProfilePics, setAllProfilePics] = React.useState([])

    if (loggedIn){
        React.useEffect(() => {
            fetch('/api/myprofile')
            .then((response) => response.json())
            .then((responseJson) => {
                setUser(responseJson);
            });
    
        }, []);

    }
    if (loggedIn){
    React.useEffect(() => {
        fetch('/api/myprofilepictures')
        .then((response) => response.json())
        .then((responseJson) => {
            setUserPhotos(responseJson);
        });

    }, []);
}

    const handleLogInSubmit = (e) => {
        e.preventDefault();
        fetch('/api/login', { method: "POST",
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json',
    }})
    .then((result) => {if (result.has_account === 'true') {
        setUser({user_id: result.user_id,
                fName: result.fname,
                petName: result.petname,
                bio: result.bio,
                profileImg: result.profile_img,
                photos: result.photos,
                email: result.email,
                username: result.username});
        setLoggedIn(true); console.log("User is logged in")
        };
    });
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        fetch('/api/signup', { method: "POST",
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json',
    }})
    .then((response) => response.json)
    .then((result) => {if (result.has_account === 'true') {
        setUser({fName: result.fname,
                petName: result.petname,
                bio: result.bio,
                profileImg: result.profile_img,
                photos: result.photos,
                email: result.email,
                username: result.username});
        setLoggedIn(true); console.log("User is logged in")
        };
    });
    };

    const handleSignOutSubmit = (e) => {
        e.preventDefault();
        setLoggedIn(false);
        setUser({user_id: "",
            fName: "",
            petName: "",
            bio: "",
            profileImg: "",
            photos: "",
            email: "",
            username: "" });
            console.log("User is logged out")
    };

    const setExplorePhotos = (e) => {
        React.useEffect(() => {
            fetch('/api/explorepagephotos')
            .then((response) => response.json())
            .then((responseJson) => {
                setAllProfilePics(responseJson);
            });
        });

    }

    return (

        <ReactRouterDOM.BrowserRouter>
            <NavBar />
            <React.Fragment>
            <ReactRouterDOM.Route exact path="/">
              <Homepage />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/signup">
                <SignUp handleSubmit={handleSignUpSubmit} />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/login">
                <Login handleSubmit={handleLogInSubmit}/>
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
            <ReactRouterDOM.Route exact path="/following">
                <Following />
            </ReactRouterDOM.Route>
            <ReactRouterDOM.Route exact path="/signout">
                <SignOut handleSubmit={handleSignOutSubmit} />
            </ReactRouterDOM.Route>
        </ReactRouterDOM.BrowserRouter>
      );
}

ReactDOM.render(<App />, document.querySelector('#root'));