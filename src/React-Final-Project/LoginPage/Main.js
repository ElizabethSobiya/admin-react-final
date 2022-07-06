import React from 'react'
// import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux'
// import { login } from '../userSlice'
import { changeIsLoggedIn } from '../Redux/action'


function Main(data) {
    // console.log(data)
    const navigate = useNavigate();

 const adminLoginStatus = data.data.reducer.LoginStatus;
    
 useEffect(() => {}, [adminLoginStatus])

    // const initialValues = { email: '', password: '' };
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [userName, setUserName] = useState([]);
    const [password, setPassword] = useState([]);

    
    function userloginStatus(){
        if(userName == password){
            data.main(true)
            navigate('/dashboard')
        }else{
            navigate('/')
        }
    }
  
    // const handleChange = (e) => {
    //     //  console.log(e.target);
    //     const { name, value } = e.target;
    //     setFormValues({...formValues, [name]: value });
    //     console.log(formValues)
    // }

    // const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formValues))
    //     dispatch(login({
    //         userName:userName, 
    //         password:password,
    //         loggedIn: true,
    //     })); 
    // };
      //    setIsSubmit(true)
    // const successful = () => {
    //     navigate('/dashboard')
    // }

    // useEffect(() => {
    //     // console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues)
    //     }
    // }, [formErrors])

    // const validate = (values) => {
    //     const errors = {};
    //     let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    //     if (!values.email) {
    //         errors.email = 'Email is required!'
    //     } else if (!regex.test(values.email)) {
    //         errors.email = 'This is not a valid email id'
    //     }
    //     if (!values.password) {
    //         errors.password = 'Password is required!'
    //     } else if (values.password.length < 4) {
    //         errors.password = 'Password must have more than 4 characters';
    //     } else if (values.password.length > 10) {
    //         errors.password = 'Password cannot exceed more than 10 characters';
    //     }
    //     return errors;
    // }
    // function login () {
    //     if(validate == true ){
    //       navigate ('/dashboard')
    //     }else{
    //       navigate('/')
    //     }
    // }

    return (
        <>
            <div className="loginTab">
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='successful'>signed in successful</div>) :
                    (<prev>{JSON.stringify(formValues, undefined, 2)} </prev>)
                } */}
                <h3>Welcome to Dashboard, Login</h3>
                <br />
                <div>
                    <form  >
                        <label  htmlFor="">Username</label>
                        <input type="email"
                            value={userName} name='text'
                            className='userText'
                            onChange={(e) => setUserName(e.target.value)} />
                        {/* <p>{formErrors.email}</p> */}
                        <br />
                        <label>Password</label>
                        <input type="password" name='password'
                        className='userText'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        {/* <p>{formErrors.password}</p> */}
                        <br />
                        <br />
                        <button  className='enterBtn' onClick={() => { userloginStatus()}} type="submit" >LOGIN</button>
                    </form>
                    <br />
                    <br />
                </div>
                <input className='enterBtn' type="submit" value='FORGOT YOUR PASSWORD' spellCheck='true'/>
            </div>
        </>
    )
}

const mapStateToProps = (props) =>({
    data: props,
})

const mapDispatchToProps =(dispatch) => ({
    main : (status) => {
   dispatch(changeIsLoggedIn(status))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)