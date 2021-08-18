import React, { Suspense, Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";
import { connect } from "react-redux";
import Loader from "./Loader/Loader";
// routes config
import routes from "../routes";
import { redirectTo } from "../actions";

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// );

class TheContent extends Component {
  // componentDidMount() {
  //   if (!localStorage.getItem("token")) {
  //     this.props.history.push("/login");
  //   } else {
  //     this.props.getProfileInfo();
  //   }
  // }
  // componentDidUpdate({ location }) {
  //   const { pathname } = location;
  //   if (pathname !== this.props.location.pathname) {
  //     this.props.getProfileInfo();
  //   }
  // }
  render() {
    return (
      <main className="c-main">
        <CContainer fluid>
          <Suspense fallback={<Loader />}>
            <Switch>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => (
                        <CFade>
                          <route.component {...props} />
                        </CFade>
                      )}
                      //render={(props) => <route.component {...props} />}
                    />
                  )
                );
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Suspense>
        </CContainer>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProfileInfo: () => {},
  onGoPage: (data) => {
    dispatch(redirectTo({ path: data }));
  },
});
export default connect(null, mapDispatchToProps)(TheContent);
//export default React.memo(TheContent);
