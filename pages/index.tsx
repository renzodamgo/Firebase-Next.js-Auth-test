import type { NextPage } from "next";
import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/authContext";

const Home: NextPage = () => {
	const { googleSignIn, user } = UserAuth();
	useEffect(() => {
		console.log(user)

	}, [user])

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result?.user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <section>
        <div className="container">
          <GoogleButton onClick={handleGoogleSignIn} />
				</div>
				<h1>
					Hola {user?.displayName || "Descononido"}
				</h1>
      </section>
    </div>
  );
};

export default Home;
