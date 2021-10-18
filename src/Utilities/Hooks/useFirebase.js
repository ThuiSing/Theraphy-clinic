import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseAuthorization from "../Firebase/firebaseAuthorization";

firebaseAuthorization();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  //google sign in
  const GoogleLogIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //get current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setIsLoading(false);
    });
  }, []);

  //register new account
  const RegisterNewAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in using email and pass
  const logInUsingEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //update name
  const addName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((s) => {
        // Profile updated!
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //return
  return {
    user,
    isLoading,
    setIsLoading,
    setUser,
    GoogleLogIn,
    logOut,
    RegisterNewAccount,
    logInUsingEmailPass,
    addName,
  };
};
export default useFirebase;
