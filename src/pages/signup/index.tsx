import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/commons/button";
import Input from "../../components/commons/input";
import SignupLayout from "../../components/layout/signupLayout";

import { Container } from "./styles";

export default function SignupPage() {
  const [state, setState] = useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
    error: string;
    loading: boolean;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    loading: false,
  });
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const {
    email,
    password,
    error,
    loading,
    firstName,
    lastName,
    confirmPassword,
  } = state;

  //update input values
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
    //check if input fields are empty
    if (!firstName?.length) {
      return setFirstNameError("has to be filled up");
    }
    if (!lastName?.length) {
      return setLastNameError("has to be filled up");
    }
    if (!email?.length) {
      return setEmailError("has to be filled up");
    }
    if (!password?.length) {
      return setPasswordError("has to be filled up");
    }
    if (!confirmPassword?.length) {
      return setConfirmPasswordError("has to be filled up");
    }
  };

  return (
    <SignupLayout newUser={false}>
      <Container>
        <h4>Get started absolutely free.</h4>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <p>Enter your details below.</p>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="First name"
            type="text"
            onChange={handleChange}
            value={firstName}
            name="firstName"
            errorIndicator={error ? true : false}
            error={firstNameError}
            required
          />
          <Input
            placeholder="Last name"
            type="text"
            onChange={handleChange}
            value={lastName}
            name="lastName"
            errorIndicator={error ? true : false}
            error={lastNameError}
            required
          />
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
          <Input
            placeholder="Repeat password"
            type="password"
            onChange={handleChange}
            value={confirmPassword}
            name="confirmPassword"
            error={confirmPasswordError}
            errorIndicator={error ? true : false}
            required
          />
          <p className="link">
            Already have an account? <Link to="/signin">SIGN IN</Link>
          </p>
          <Button loading={loading} value="SIGN UP" />
        </form>
      </Container>
    </SignupLayout>
  );
}
