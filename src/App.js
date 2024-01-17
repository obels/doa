import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home-page/home";
import Directory from "./components/directory/employeeMain";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import LoginForm from "./components/forms/loginForm";
import EmployeeForm from "./components/forms/employeeForm";
import OverTime from "./components/forms/overtime/overTime";
import LinkParam from "./components/linkParams";
import NewEmployee from "./components/forms/newEmployee";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forms/overtime" element={<OverTime />} />
          <Route path="/directory">
            <Route index element={<Directory />} />
            <Route path="employeeform/:id" element={<EmployeeForm />} />
            <Route path="newemployee" element={<NewEmployee />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" exact element={<Home />} />
          <Route path="./param/:id" element={<LinkParam />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
