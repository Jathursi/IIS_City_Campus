// import 'dotenv/config'; // Load environment variables
// import { db } from "./firebase.js"; // Import Firestore
// import { doc, setDoc } from "firebase/firestore";

// const addUserToFirestore = async (userId, Full_Name, Email,Password, role) => {
//     try {
//         await setDoc(doc(db, "users", userId), {
//             name: Full_Name,
//             email: Email,
//             role: role,
//             password: Password
//         });
//         console.log("User added to Firestore successfully!");
//     } catch (error) {
//         console.error("Error adding user:", error);
//     }
// };

// // Run the function
// addUserToFirestore("12345", "John Doe", "jathukirubajathu@example.com",'1234', "admin");

import 'dotenv/config'; // Load environment variables
import bcrypt from 'bcryptjs'; // Import bcrypt for hashing
import { db } from "./firebase.js"; // Import Firestore
import { doc, setDoc } from "firebase/firestore";

const addUserToFirestore = async (userId, Full_Name, Email, Password, role) => {
    try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(Password, 10); // 10 is the saltRounds

        // Store the user details in Firestore with the hashed password
        await setDoc(doc(db, "users", userId), {
            name: Full_Name,
            email: Email,
            role: role,
            password: hashedPassword // Store the hashed password
        });

        console.log("User added to Firestore successfully!");
    } catch (error) {
        console.error("Error adding user:", error);
    }
};

// Run the function with example data
addUserToFirestore("12345", "Jathursika Velummayilum", "jathukirubajathu@gmail.com", "jathu", "admin");
