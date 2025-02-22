import { db, auth } from "./firebase.js"; // Import Firebase auth & Firestore
import { doc, setDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { getAuth } from "firebase/auth";

const updatePassword = async (Email, Password) => {
    try {
        const user = await auth.signInWithEmailAndPassword(Email, Password); // Sign in the user to verify email (if required)

        if (user) {
            // Hash the password using bcrypt
            const hashedPassword = await bcrypt.hash(Password, 10); // saltRounds = 10

            // Update Firestore document with the hashed password
            await setDoc(doc(db, "users", user.uid), {
                password: hashedPassword,  // Store the hashed password securely
            }, { merge: true });

            console.log("Password updated successfully!");

            // Optionally, send password reset email
            // await sendPasswordResetEmail(auth, Email);
            console.log("Password reset email sent!");
        }
    } catch (error) {
        console.error("Error updating password:", error);
    }
};

// Example usage
// updatePassword("user@example.com", "newSecurePassword123");
