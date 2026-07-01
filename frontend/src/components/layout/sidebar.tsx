import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <NavLink to="/">
        Dashboard
      </NavLink>

      <NavLink to="/incidents">
        Incidents
      </NavLink>

      <NavLink to="/reports">
        Reports
      </NavLink>

      <NavLink to="/settings">
        Settings
      </NavLink>

    </aside>
  );
};

export default Sidebar;