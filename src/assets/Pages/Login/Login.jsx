import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../Firebase/firebase.config";
import { useState } from "react";

const Login = () => {
  const goggleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, setUser] = useState();

  const handleGoogleLogin = () => {
    console.log("Google coming soon...");
    signInWithPopup(auth, goggleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout Success");
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
        setUser(null);
      });
  };

  const handleGitHubLogin=()=>{
    console.log("github login coming...");
    signInWithPopup(auth,gitHubProvider)
    .then(result=>{
        const user=result.user;
        setUser(user);
    })
    .catch(error=>{
        console.log(error.message);
        setUser(null);
    })
  }
  return (
    <div>
      <h2>This is Login Page</h2>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <button style={{ marginRight: "20px" }} onClick={handleGoogleLogin}>
            Goggle Login
          </button>
          <button  style={{ marginRight: "20px" }} onClick={handleGitHubLogin}>
            GitHub Login
          </button>
        </div>
      )}

      {user && (
        <div>
          <h2>Name:{user.displayName}</h2>
          <h3>Email:{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
