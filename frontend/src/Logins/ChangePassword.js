import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Correct imports for Firebase v9+
import { db } from "../firebase.js"; // Import Firestore
import { doc, setDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";

function ChangePassword() {
    const [Email, setEmail] = useState("");
    const [Password, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        const auth = getAuth();

        try {
            // Sign in the user to verify email (if required)
            const userCredential = await signInWithEmailAndPassword(auth, Email, Password); // Correct method for Firebase v9+
            const user = userCredential.user;

            if (user) {
                // Hash the new password using bcrypt
                const hashedPassword = await bcrypt.hash(Password, 10); // saltRounds = 10

                // Update Firestore document with the hashed password
                await setDoc(doc(db, "users", user.uid), {
                    password: hashedPassword,  // Store the hashed password securely
                }, { merge: true });

                setMessage("Password updated successfully!");
            }
        } catch (err) {
            setError("Error updating password: " + err.message);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-[30%]">
                <h1 className="flex justify-center items-center text-3xl font-bold mb-5">Change Password</h1>
                {error && <p className="text-red-500">{error}</p>}
                {message && <p className="text-green-500">{message}</p>}
                <form onSubmit={handleChangePassword}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-400 rounded-lg"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="newPassword" className="block mb-2">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            className="w-full p-2 border border-gray-400 rounded-lg"
                            value={Password}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full primary-btn">Update Password</button>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
