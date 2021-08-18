import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { createLogicMiddleware } from "redux-logic";
import { BrowserRouter} from "react-router-dom";
import { mode, EnviornmentTypes } from "./config/AppConfig";
import FullPageLoader from "./containers/Loader/FullPageLoader";
import arrLogic from "./logic";
import AppReducer from "./reducers";
import AppRoutes from "./routes/";
import "./scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
const logicMiddleware = createLogicMiddleware(arrLogic);
const history = createBrowserHistory();
const middlewares = [logicMiddleware, routerMiddleware(history)];
if (mode === EnviornmentTypes.DEV) {
  middlewares.push(logger);
}

export const store = createStore(AppReducer, applyMiddleware(...middlewares));

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// );

class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <React.Suspense fallback={<FullPageLoader />}>
            <AppRoutes />
          </React.Suspense>
        </BrowserRouter>
        <ToastContainer
          position={toast.POSITION.TOP_RIGHT}
          autoClose={10000}
          hideProgressBar
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          transition={Zoom}
        />
      </Provider>
      </>
    );
  }
}

export default App;
