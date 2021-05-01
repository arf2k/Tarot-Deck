import React, { useState } from "react";
import "../../styles/Signup.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../firebase/Firebase.utils";



const Signup = () => {

  
     const [userCredentials, setCredentials] = useState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        });




     return (
          <div className="sign-up">
               <h2 className="title">I do not have an account</h2>
               <span> Sign up with your email and password</span>
               <form className="sign-up-form" >
          <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
               </form>
          </div>
     )


}

export default Signup