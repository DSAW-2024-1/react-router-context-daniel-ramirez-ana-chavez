import React from "react";
import { useAuth } from "../Autenticacion/AuthProvider";
import DeafaultLayout from "../Layouts/DeafaultLayout";
const Home = () => {
  return (
    <div>
      <DeafaultLayout>
        <h1>ESTE ES EL HOME</h1>
      </DeafaultLayout>
    </div>
  );
};

export default Home;
