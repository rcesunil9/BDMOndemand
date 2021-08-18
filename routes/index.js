import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { hideLoader, showLoader, redirectTo } from "../actions";
import FullPageLoader from "../containers/Loader/FullPageLoader";
import Helmet from "react-helmet";
import { pageTitle } from "../Helpers/Object";
import { AppRoutes as appRoute } from "../config/AppRoutes";

// Containers
const TheLayout = React.lazy(() => import("../containers/TheLayout"));
const Login = React.lazy(() => import("../containers/auth/login/Login"));

const Page404 = React.lazy(() => import("../containers/pages/page404/Page404"));
const Page500 = React.lazy(() => import("../containers/pages/page500/Page500"));

const Routes = [
  {
    exact: true,
    path: "/login",
    name: "Login Page",
    component: Login,
  },
  
  {
    exact: true,
    path: "/404",
    name: "Page Not Found",
    component: Page404,
  },
  {
    exact: true,
    path: "/500",
    name: "Page Not Found",
    component: Page500,
  },
  {
    exact: false,
    path: "/",
    name: "Home",
    component: TheLayout,
  },
];

class AppRoutes extends Component {
  componentDidMount() {}
  render() {
    const { appState } = this.props;
    const { showLoader } = appState;
    const pathname = this.props.location.pathname;
    let titleName = pageTitle(pathname);
    let name;
    for (const k in appRoute) {
      if (appRoute.hasOwnProperty(k)) {
        const element = appRoute[k];
        if (element.url === titleName) {
          name = element.name;
        }
      }
    }
    if (!name && name === undefined) {
      let result = Routes.filter((data) => data.path === titleName);
      name = result && result.length ? result[0].name : "Dashboard";
    }
    if (!name) {
      name = "Dashboard";
    }
    return (
      <>
        <Helmet>
          <title>{"Food Delivery | " + name}</title>
        </Helmet>
        {showLoader ? <FullPageLoader /> : null}
        <Switch>
          {Routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                name={route.name}
                render={(props) => (
                  <route.component {...props} {...this.props} />
                )}
              />
            );
          })}
        </Switch>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  appState: state.mainReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    showLoader: () => {
      dispatch(showLoader());
    },
    hideLoader: () => {
      dispatch(hideLoader());
    },
    redirectTo: (path) => {
      dispatch(redirectTo({ path }));
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
);
