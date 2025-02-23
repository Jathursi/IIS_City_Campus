// import React, { useEffect, useState } from "react";
// import { db } from "../firebase.js";
// import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

// function AdminMain() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersCollection = collection(db, "Users");
//       const usersSnapshot = await getDocs(usersCollection);
//       const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setUsers(usersList);
//     };

//     fetchUsers();
//   }, []);

//   const handleApprove = async (id) => {
//     await updateDoc(doc(db, "Users", id), { permission: "approved" });
//     setUsers(users.map(user => user.id === id ? { ...user, permission: "approved" } : user));
//   };

//   return (
//     <div className="p-6 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">All Users</h1>
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-800 ">
//             <tr>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Role</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-100">
//                   <td className="p-3">{user.firstName} {user.lastName}</td>
//                   <td className="p-3">{user.email}</td>
//                   <td className="p-3 capitalize">{user.role}</td>
//                   <td className="p-3">
//                     <span className={`px-2 py-1 rounded-full text-white ${user.permission === "approved" ? "bg-green-500" : "bg-red-500"}`}>
//                       {user.permission}
//                     </span>
//                   </td>
//                   <td className="p-3">
//                     {user.permission === "pending" ? (
//                       <button
//                         onClick={() => handleApprove(user.id)}
//                         className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                       >
//                         Approve
//                       </button>
//                     ) : (
//                       <span className="text-gray-500">Approved</span>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center p-3">No users found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminMain;
import React from 'react'

function AdminMain() {
  return (
    <div>AdminMain</div>
  )
}

export default AdminMain