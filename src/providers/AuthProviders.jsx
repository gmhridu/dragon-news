import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth/cordova";
import { signOut } from "firebase/auth";

export const AuthContext = createContext(null); 

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unSubscribe()
  }, [])

  
  
  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    signInUser,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;