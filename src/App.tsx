import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Suspense from "./components/commons/boundary";
import useAuth from "./context";

const SigninPage = lazy(() => import("./pages/signin"));
const SignupPage = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const CreateEventPage = lazy(() => import("./pages/createEvent"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

function App() {
  const { user } = useAuth();
  //check if user is authenticated
  if (!user) {
    return (
      <Suspense>
        <Router>
          <Switch>
            <Route exact path="/signin" component={SigninPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
  return (
    <Suspense>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create-event" component={CreateEventPage} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
