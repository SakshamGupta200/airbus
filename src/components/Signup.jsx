import React, { useState } from 'react';
import '../Styles/signup.css';
import Form from '../../node_modules/react-bootstrap/Form';
import Button from '../../node_modules/react-bootstrap/Button';
import Sign_img from './Sign_img';
import { Link } from 'react-router-dom';




const Signup = () => {


     const [inpval, setInpval] = useState({
          name: "",
          email: "",
          date: "",
          password: ""
     })


     const [data, setData] = useState([]);

     const getdata = (e) => {
          // console.log(e.target.value);

          const { value, name } = e.target;

          // console.log(value, name);

          setInpval(() => {
               return {
                    ...inpval,
                    [name]: value
               }
          })

     }

     const addData = (e) => {
          e.preventDefault();

          const { name, email, date, password } = inpval;

          if (name === "") {
               alert("name field is required");
          } else if (email === "") {

               alert("email field is required");

          } else if (!email.includes('@')) {
               alert("please enter valid email address");
          }
          else if (date === "") {
               alert("date field is required");

          } else if (password === "") {
               alert("password field is required");
          } else if (password.length < 5) {
               alert("password length should be greater than five");
          } else {
               localStorage.setItem("userData", JSON.stringify([...data, inpval]));// inpval k andr hmne name email wgerah store kiya h
               const temp = [...data, inpval];
               setData( ()=>{
               return temp;
               })
          
          }


     }

     return (
          <div className='cons'>
               <div className="container">
                    <section className='starting'>
                         <div className="left-data mt-3 p-3" style={{ width: '100%' }}>
                              <h3 className='text-center col-lg-6'>Sign Up</h3>
                              <Form>
                                   <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter your Name" className='inp' />
                                        <Form.Text className="text-muted">

                                        </Form.Text>
                                   </Form.Group>
                                   <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" className='inp' />
                                        <Form.Text className="text-muted">

                                        </Form.Text>
                                   </Form.Group>
                                   <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Control type="date" name='date' onChange={getdata} className='inp' />
                                        <Form.Text className="text-muted">

                                        </Form.Text>
                                   </Form.Group>

                                   <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                        <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" className='inp' />
                                   </Form.Group>
                                   <Button variant="primary" type="submit" onClick={addData} className='buttons col-lg-6'>
                                        Submit
                                   </Button>
                              </Form>
                              <p className='para'>Already Have an Account <span><a href="#"><Link to="/login">Log In</Link></a>
                              </span></p>
                         </div>
                         <Sign_img />
                    </section>
               </div>
          </div>
     )
}

export default Signup