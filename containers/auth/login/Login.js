import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CInvalidFeedback,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { loginRequest } from "../../../actions";
import Validator from "js-object-validation";
import { AppRoutes } from "../../../config";

const Login = (props) => {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      props.history.push(AppRoutes.DASHBOARD.url);
    }
  });
  useEffect(() => {
    if (
      props.AuthReducer &&
      props.AuthReducer.token &&
      props.AuthReducer.isLoginSuccess === true
    ) {
      props.history.push(AppRoutes.DASHBOARD.url);
    }
  }, [props.AuthReducer]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setAuth({ ...auth, [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = auth;
      const json = {
        email: email ? email.trim() : "",
        password: password ? password.trim() : "",
      };
      const validations = {
        email: {
          required: true,
          email: true,
          maxlength: 100,
        },
        password: {
          required: true,
        },
      };
      const messages = {
        email: {
          required: "Please enter email",
          email: "Email should be valid email",
          maxlength: "Email should be at last 100 character long",
        },
        password: {
          required: "Please enter password",
        },
      };

      const { isValid, errors } = Validator(json, validations, messages);
      if (!isValid) {
        setErrors(errors);
      } else {
        props.onLogin(auth);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="cont"></div>
    <div className="c-app c-default-layout flex-row align-items-center cont">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-3" style = {{height:"300px"}}>
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        name="email"
                        value={auth.email}
                        placeholder="Email"
                        autoComplete="email"
                        onChange={(e) => handleChange(e)}
                        invalid={errors && errors.email ? true : false}
                      />
                      <CInvalidFeedback>
                        {errors.email ? errors.email : null}
                      </CInvalidFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        name="password"
                        value={auth.password}
                        placeholder="Password"
                        autoComplete="password"
                        onChange={(e) => handleChange(e)}
                        invalid={errors && errors.password ? true : false}
                      />

                      <CInvalidFeedback>
                        {errors.password ? errors.password: null}
                      </CInvalidFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="danger"
                          className="px-4"
                          onClick={(e) => {
                            handelSubmit(e);
                          }}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard
                className="text-white bg-light py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <img src = "https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" height ="200px"/>
                    <Link to="/register">
                      <CButton
                        color="danger"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div></>
  );
};

const mapStateToProps = (state) => ({
  AuthReducer: state.AuthReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => {
      dispatch(loginRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
