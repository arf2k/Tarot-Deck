import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import "../../styles/Signin.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../component/firebase/Firebase.utils";

const Signin = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    // emailSignInStart(email, password);
    const { email, password } = userCredentials;
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCredentials({email: "", password: "" })
    } catch (error) {
      console.log(error)
    }
  }

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password or through Google</span>

      <form>
        <FormInput
          name="email"
          type="email"
          changeHandler={changeHandler}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          changeHandler={changeHandler}
          value={password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" onClick={submitHandler}>Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
