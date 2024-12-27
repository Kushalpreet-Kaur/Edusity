// import React, { useState } from 'react';
// // import { Footer, Navbar } from "../components";
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleRegister = (e) => {
//         e.preventDefault();
         
//         if (name && email && password) {
             
//             const userData = {
//                 name: name,
//                 email: email,
//                 password: password
//             };
//             localStorage.setItem('userData', JSON.stringify(userData));
         
//             navigate('/login');
//         } else {
          
//             alert("eter every detail")
//         }
//     };

//     return (
//         <>
//             {/* <Navbar /> */}
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div className="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form onSubmit={handleRegister}>
//                             <div className="form my-3">
//                                 <label htmlFor="Name">Full Name</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="Name"
//                                     placeholder="Enter Your Name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form my-3">
//                                 <label htmlFor="Email">Email address</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="Email"
//                                     placeholder="name@example.com"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form  my-3">
//                                 <label htmlFor="Password">Password</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     id="Password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
//                             </div>
//                             <div className="text-center">
//                                 <button className="my-2 mx-auto btn btn-dark" type="submit">
//                                     Register
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Register;
