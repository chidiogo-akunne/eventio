import React, { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Suspense from "./components/commons/boundary";
import { useAuthContext } from "./context/auth/authContext";
import AppProvider from "./context/app/appProvider";

//lazy load pages/components
const SigninPage = lazy(() => import("./pages/signin"));
const SignupPage = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const CreateEventPage = lazy(() => import("./pages/createEvent"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

//protected route to prevent unauthenticated users from accessing private pages
function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();
  
  //if not authenticated redirect to sign in page
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children!;
}

function App() {
  return (
    <AppProvider>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/create-event"
            element={
              <RequireAuth>
                <CreateEventPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Suspense>
    </AppProvider>
  );
}

export default App;
