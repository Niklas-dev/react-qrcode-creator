import React from "react";
import NavBar from "./components/NavBar/navbar";
import CreateQR from "./components/CreateQR/createqr";

function App() {
  return (
    <div className="h-screen w-screen ">
      <NavBar />

      <div className="h-5/6 justify-center grid items-center">
        <CreateQR />
      </div>
    </div>
  );
}

export default App;
