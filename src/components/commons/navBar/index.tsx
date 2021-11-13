import React from "react";
import { Link } from "react-router-dom";
import cc from "classcat";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as CaretDown } from "../../../assets/images/icons/caret-down.svg";

import { NavContainer, RightCover, Row, NameCover } from "./styles";
import { useAuthContext } from "../../../context/auth/authContext";

//typings for navbar component
interface NavBarProps {
  authenticated: boolean;
  newUser?: boolean;
  create?: boolean;
  style?: React.CSSProperties;
}

export default function NavBarComponent(props: NavBarProps) {
  const { newUser, create, style } = props;

  //get auth details from auth store
  const auth = useAuthContext();
  const { isAuthenticated, logout } = auth;

  const fullName = auth.isAuthenticated
    ? `${auth.user.firstName} ${auth.user.lastName}`
    : "Tom Watts";
  const initials = auth.isAuthenticated
    ? `${auth.user.firstName[0]}${auth.user.lastName[0]}`
    : "TW";

  //navbar component
  return (
    <NavContainer style={style}>
      <div
        className={cc({
          "authenticated-logo": isAuthenticated,
          logo: !isAuthenticated,
        })}
      >
        <Logo />
      </div>
      <RightCover>
        {isAuthenticated ? (
          <>
            {create ? (
              <div className="close">
                <Link to="/" className="close-icon">
                  x
                </Link>
                <Link to="/" className="close-text">
                  Close
                </Link>
              </div>
            ) : (
              <>
                <NameCover>
                  <p>{initials}</p>
                </NameCover>
                <p>{fullName}</p>
                <div className="dropdown">
                  <CaretDown />
                  <div className="dropdown-content">
                    <button onClick={logout}>Logout</button>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {newUser ? (
              <Row>
                <p>Don’t have account? </p> <Link to="/signup"> SIGN UP</Link>
              </Row>
            ) : (
              <Row>
                <p>Already have an account</p> <Link to="/signin">SIGN IN</Link>
              </Row>
            )}
          </>
        )}
      </RightCover>
    </NavContainer>
  );
}
