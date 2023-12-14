import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";


function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="feed">
        <Feed/>
        </div>
      <Widgets/>
    </div>
  );
}

export default App;