import React from "react";
import { useLocalState } from "../util/uselocalstorage";

const Dashboard = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");

  return (
    <div>
      <div>
        JWT Value is: <br />
        {jwt || 'JWT is not defined yet'}
      </div>
    </div>
  );
};

export default Dashboard;