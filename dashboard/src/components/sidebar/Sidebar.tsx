import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"
import { colorModeActions } from "../../store/store"
import "./Sidebar.scss"

const Sidebar = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="link">
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/analytics" className={`link ${pathname == "/analytics" ? "active" : ""}`}>
            <li>
              <AnalyticsIcon className="icon" />
              <span>Analytics</span>
            </li>
          </Link>
          <Link to="/configuration" className={`link ${pathname == "/configuration" ? "active" : ""}`}>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Configuration</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch(colorModeActions.toggleWhite())}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch(colorModeActions.toggleDark())}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
