import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import ProjectRoutes from './routes/routes'


function App() {
  return (
    <div className="body">
      <Navbar />
      <div className="page-body">
        <Sidebar />
        <div className="routes-container"><ProjectRoutes /></div>
      </div>
    </div>
  );
}

export default App;
