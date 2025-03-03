import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user details from Firestore
      const userRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Check if permission is approved
        if (userData.permission !== "approved") {
          toast.error("Your account is not approved yet.", {
            position: "top-center",
          });
          return;
        }

        // Navigate based on role
        if (userData.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }

        toast.success("User logged in Successfully", {
          position: "top-center",
        });

      } else {
        toast.error("User record not found in database!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Invalid email or password", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0">
        <h1 className="flex justify-center items-center text-3xl font-bold mb-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-2">Email address</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full primary-btn">Login</button>
        </form>

        <div onClick={() => navigate("/circulate/signup")} className="flex gap-2 mb-5">
          <p>Don't have an account?</p> <span className='text-b2'>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
