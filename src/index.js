import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainApp from "./MainApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import mainReducer from "./reducers/reducer";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	mainReducer,
	composeEnhancers(applyMiddleware(thunk)),
);
const app = (
	<Provider store={store}>
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	</Provider>
);
ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
