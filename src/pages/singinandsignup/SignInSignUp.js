import React from "react";
import "../../styles/SigninSignup.styles.scss";
import Signin from "../../component/sign-in/Signin";
import Signup from "../../component/sign-up/Signup";

const SignInAndSignUpPage = () => {
return (
<div className="sign-in-and-sign-up">
<Signin/>
<Signup/>
</div>
)


}

export default SignInAndSignUpPage