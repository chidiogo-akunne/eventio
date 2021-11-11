import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as CaretDown } from "../../../assets/images/icons/caret-down.svg";

import { NavContainer, RightCover, Row, NameCover } from "./styles";

interface NavBarProps {
  authenticated: boolean;
  newUser?: boolean;
  create?: boolean;
  style?: React.CSSProperties;
}

export default function NavBarComponent(props: NavBarProps) {
  const { authenticated, newUser, create, style } = props;
  return (
    <NavContainer style={style}>
      {authenticated ? (
        <div className="authenticated-logo">
          <Logo />
        </div>
      ) : (
        <div className="logo">
          <Logo />
        </div>
      )}
      <RightCover>
        {authenticated ? (
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
                  <p>TW</p>
                </NameCover>
                <p>Tom Watts</p>
                <div className="dropdown">
                  <CaretDown />
                  <div className="dropdown-content">
                    <ul>
                      <li>Logout</li>
                    </ul>
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
