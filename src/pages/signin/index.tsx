import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/commons/button";
import Input from "../../components/commons/input";
import SigninLayout from "../../components/layout/signupLayout";

import { Conatiner } from "./styles";

export default function SigninPage() {
  const [state, setState] = useState<{
    email: string;
    password: string;
    error: string;
    loading: boolean;
  }>({
    email: "",
    password: "",
    error: "",
    loading: false,
  });
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const { email, password, error, loading } = state;

  const handleChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (email.length) {
      setEmailError("");
    }
    if (password.length) {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email?.length) {
      return setEmailError("has to be filled up");
    }
    if (!password?.length) {
      return setPasswordError("has to be filled up");
    }
  };

  return (
    <SigninLayout newUser={true}>
      <Conatiner>
        <h4>Sign in to Eventio.</h4>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <p>Enter your details below.</p>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            type="email"
            onChange={handleChange}
            value={email}
            name="email"
            errorIndicator={error ? true : false}
            error={emailError}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={password}
            name="password"
            error={passwordError}
            errorIndicator={error ? true : false}
            required
          />
          <p className="link">
            Don't have account? <Link to="/signup">SIGN UP</Link>
          </p>
          <Button loading={loading} value="SIGN IN" />
        </form>
      </Conatiner>
    </SigninLayout>
  );
}
