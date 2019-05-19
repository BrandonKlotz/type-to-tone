import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./components/application.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware,
		createLogger()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
