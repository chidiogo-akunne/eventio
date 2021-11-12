import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import SigninLayout from "../../components/layout/signupLayout";
import { useAuthContext } from "../../context/auth/authContext";
import LoginForm from "./widget/form";
import { Container } from "./styles";

export default function SigninPage() {
  const auth = useAuthContext();
  const location = useLocation();

  if (auth.isAuthenticated) {
    let from = location.state?.from?.pathname || "/";

    return <Navigate to={from} replace />;
  }

  const { error, login, status } = auth;

  return (
    <SigninLayout newUser={true}>
      <Container>
        <h4>Sign in to Eventio.</h4>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <p>Enter your details below.</p>
        )}
        <LoginForm loading={status === "loading"} onSubmit={login} />
      </Container>
    </SigninLayout>
  );
}
