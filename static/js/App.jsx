

// MVP create app that:

// sign in and out

// creates a profile

// uploads pictures to profile

// view your pictures

// lets you follow a profile

// lets you view feed of accounts followed

// Nice to Haves:

// like a picture

// comment on a picture



function App(){
    function HomePage(){
        return <h2>Home</h2>;
    }
    function UserProfile(){
        return <h2>User Profile</h2>
    }
    function Explore(){
        return <h2>Explore Page</h2>
    }
    function ViewProfile(){
        return <h2>User Profile</h2>
    }

}




ReactDOM.render(<App />, document.querySelector('#root'));

