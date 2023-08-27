import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={toggleSidebar}>Sidebar</button>
      <div className="sidebar-content">Menu1</div>
      <div className="sidebar-content">Menu2</div>
      <div className="sidebar-content">Menu3</div>
    </div>
  );
}

export default Sidebar;
