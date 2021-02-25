import "./SignInAndSignUp.scss";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";
const SignInAndSignUp = () => {
  return (
    <div className="signinsignup">
      <SignIn></SignIn>
      <SignUp className="signup"></SignUp>
    </div>
  );
};

export default SignInAndSignUp;
