import { Link } from "react-router-dom";
import { sidebarData } from "../../utils/sidebarData";
import Home from "/static/messages-icon.svg";

function Sidebar() {
  return (
    <section className="sidebar-container">
      <ul className="sidebar-options">
        {sidebarData.map((item) => (
          <li className="sidebar-option-container" key={item.title}>
            <img src={item.icon} alt={item.title} className="sidebar-icon" />
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
        <section className="sidebar-logout-container">
          <img src={Home} alt="home icon" className="sidebar-icon" />
          <span>Sair</span>
        </section>
      </ul>
    </section>
  );
}

export default Sidebar;
