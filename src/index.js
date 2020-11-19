import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import MyTasks from "./MyTasks";
import "./index.css";

function Home() {
  return(
    <Provider store={store}>
      <MyTasks />
    </Provider>
  );
}
ReactDOM.render(
  <Home />,
  document.getElementById('root')
);