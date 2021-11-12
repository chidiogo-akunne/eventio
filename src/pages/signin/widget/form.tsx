import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/commons/button";
import Input from "../../../components/commons/input";
import { validateEmailInput } from "../../../utils/formValidator";

function LoginForm({
  loading,
  onSubmit,
}: {
  loading: boolean;
  onSubmit: (payload: { email: string; password: string }) => void;
}) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) {
      setEmailError("has to be filled up");
    }

    if (!validateEmailInput(email)) {
      setEmailError("entered is an invalid");
    }

    if (!password) {
      setPasswordError("has to be filled up");
    }

    onSubmit({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Email"
        type="email"
        onChange={handleEmailChange}
        value={email}
        name="email"
        errorIndicator={!!emailError}
        error={emailError}
        required
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={handlePasswordChange}
        value={password}
        name="password"
        errorIndicator={!!passwordError}
        error={passwordError}
        required
      />
      <p className="link">
        Don't have account? <Link to="/signup">SIGN UP</Link>
      </p>
      <Button loading={loading} value="SIGN IN" />
    </form>
  );
}

export default LoginForm;
