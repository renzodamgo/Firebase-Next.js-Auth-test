import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from '../firebase';
const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const googleSignIn = async () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider).catch((err) => console.log(err))

	}
	return (
		<authContext.Provider value={{ googleSignIn, user }}>
			{children}
		</authContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(authContext)
}