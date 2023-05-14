import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import { createStore } from "redux";
import rootReducer from "./redux/reducers/product";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
