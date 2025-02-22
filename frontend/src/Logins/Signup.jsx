// // import React from 'react'
// // import { useNavigate } from 'react-router-dom'
// // function Signup() {
// //     const navigate = useNavigate()
// //   return (
// //     <div>
// //         <div className='flex justify-center items-center '>
// //             <div className='container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0 mb-6'>
// //                 <h1 className=' flex justify-center items-center text-3xl font-bold mb-5'>Signup</h1>
// //             <form>
// //                 <div className='mb-5'>
// //                     <label htmlFor='Full_Name' className='block mb-2'>Full Name</label>
// //                     <input type='text' id='Full_Name' className='w-full p-2 border border-gray-400 rounded-lg' />
// //                 </div>
// //                 <div className='mb-5'>
// //                     <label htmlFor='email' className='block mb-2'>Email</label>
// //                     <input type='email' id='email' className='w-full p-2 border border-gray-400 rounded-lg' />
// //                 </div>
// //                 <div className='mb-5'>
// //                 <label htmlFor='password' className='block mb-2'>Password</label>
// //                 <input type='password' id='password' className='w-full p-2 border border-gray-400 rounded-lg' />
// //                 </div>
// //                 <div className='mb-5'>
// //                 <label htmlFor='confirm-password' className='block mb-2'>Confirm Password</label>
// //                 <input type='password' id='confirm-password' className='w-full p-2 border border-gray-400 rounded-lg' />
// //                 </div>
// //                 <button type='submit' className='w-full primary-btn'>Signup</button>
// //             </form>
// //             {/* sign in */}
// //             <div className='mt-5'>
// //                 <p className=''>Already have an account? <span onClick={()=>navigate('/circulate/login')} className='text-b2'>Login</span></p>
// //             </div>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Signup

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "../firebase.js";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       console.log(user);
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: fname,
//           lastName: lname,
//           photo:""
//         });
//       }
//       console.log("User Registered Successfully!!");
//       navigate("/circulate/login");
//       toast.success("User Registered Successfully!!", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center ">
//         <div className='container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0 mb-6'>
//             <h1 className=' flex justify-center items-center text-3xl font-bold mb-5'>Signup</h1>
//             <form onSubmit={handleRegister}>
//                 <div className="mb-3">
//                     <label className='block mb-2'>First name</label>
//                     <input
//                     type="text"
//                     className="w-full p-2 border border-gray-400 rounded-lg"
//                     placeholder="First name"
//                     onChange={(e) => setFname(e.target.value)}
//                     required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="block mb-2">Last name</label>
//                     <input
//                     type="text"
//                     className="w-full p-2 border border-gray-400 rounded-lg"
//                     placeholder="Last name"
//                     onChange={(e) => setLname(e.target.value)}
//                     />
//                 </div>

//             <div className="mb-3">
//                 <label className='block mb-2'>Email address</label>
//                 <input
//                 type="email"
//                 className="w-full p-2 border border-gray-400 rounded-lg"
//                 placeholder="Enter email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 />
//             </div>

//             <div className="mb-3">
//                 <label className='block mb-2'>Password</label>
//                 <input
//                 type="password"
//                 className="w-full p-2 border border-gray-400 rounded-lg"
//                 placeholder="Enter password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 />
//             </div>

//                 <button type='submit' className='w-full primary-btn'>
//                 Sign Up
//                 </button>
            
//             </form>
//             <p>
//                 Already registered <span onClick={()=>navigate('/circulate/login')} className='text-b2'>Login</span>
//             </p>
//         </div>
//     </div>
//   );
// }
// export default Signup;
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [role, setRole] = useState("user"); // Default role

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          role: role,
          permission: "pending", // Default permission status
        //   photo: ""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate("/circulate/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className='container bg-white p-5 rounded-lg shadow-lg md:w-[30%] mx-4 md:mx-0 mb-6'>
        <h1 className=' flex justify-center items-center text-3xl font-bold mb-5'>Signup</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className='block mb-2'>First name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2">Last name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className='block mb-2'>Email address</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className='block mb-2'>Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className='block mb-2'>Role</label>
            <select
              className="w-full p-2 border border-gray-400 rounded-lg"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type='submit' className='w-full primary-btn'>
            Sign Up
          </button>
        </form>
        <p>
          Already registered <span onClick={() => navigate('/circulate/login')} className='text-b2'>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;