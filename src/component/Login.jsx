import React, { useState } from 'react'
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase.init';
// import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
function Login() {
    const [user,setUser] = useState({})


    const auth = getAuth(app);

    console.log(app);

    const gooleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()


    const handlegooleloggin = () => {
        signInWithPopup(auth, gooleProvider)
        .then (result => {
            const loggesInUser = result.user;
            console.log(loggesInUser);
            setUser(loggesInUser);
        })
        .catch((error) => {
console.log('error',error.message);
        })
    }

    const handlegithublogin = () => {
signInWithPopup(auth,githubProvider)
.then (result => {
    const loggesInUser = result.user;
    console.log(loggesInUser);
})
.catch(error => {
    console.log('error',error.message)
    })
    }

    const handlesignout = () => {
        

const auth = getAuth();
signOut(auth).then(result => {
    console.log(result);
setUser(null)
}).catch((error) => {
  console.log(error);
});
    }
  return (
    <div>
        { user  ?
            <button onClick={handlesignout}>Sign Out</button>:
            <>
            <button onClick={handlegooleloggin}>Google log in</button>
            <button onClick={handlegithublogin}>Github LogIn</button>
            </>
        },
        { user && 
            <div>
            <h3>display name : {user.displayName}</h3>
          <img src={user.photoURL} alt="" />
<p>email : {user.email}</p>
            </div>
        }
    </div>
  )
}

export default Login