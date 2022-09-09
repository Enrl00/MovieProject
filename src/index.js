import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieProvider } from "./provider/MovieInfo";
import { SeatProvider } from "./provider/SeatContext";
import { UserProvider } from "./provider/UserContext";
import { CustomTheme } from "./provider/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <CustomTheme>
      <UserProvider>
        <MovieProvider>
          <SeatProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SeatProvider>
        </MovieProvider>
      </UserProvider>
    </CustomTheme>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
