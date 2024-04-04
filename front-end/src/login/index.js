import React, { useState } from "react";
import { useLocalState } from "../util/uselocalstorage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [jwt, setJwt] = useLocalState("", "jwt");

  function sendLoginRequest() {
    const reqBody = {
      username: username,
      password: password,
    };

    fetch("api/v1/auth/authenticate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Failed to login");
      })
      .then((data) => {
        console.log(data);
        setJwt(data.token);
        window.location.href = "/dashboard";
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button id="submit" type="button" onClick={() => sendLoginRequest()}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
