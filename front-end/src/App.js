import { useEffect, useState } from "react";
import "./App.css";
import { useLocalState } from "./util/uselocalstorage";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import PrivateRoute from "./privateRoute";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");

  

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
