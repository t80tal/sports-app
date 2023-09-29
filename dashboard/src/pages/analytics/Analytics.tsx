import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import TableList from "../../components/table/Table"
import "./Home.scss"
import axios from "axios"
import { useState } from "react"

const Analytics = () => {
  const [value, setValue] = useState("")
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div
          style={{
            height: "calc(100% - 51px)",
            display: "flex",
            justifyContent: "center",
            rowGap: 50,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input
            style={{
              width: 500,
              height: 45,
              outline: "none",
              fontSize: 20,
              padding: "5px 10px",
              border: "none",
              borderRadius: 4,
              boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="MATCHES LOGS FBREF URL"
          />
          <button
            style={{
              width: 500,
              height: 45,
              outline: "none",
              fontSize: 20,
              padding: "5px 10px",
              cursor: "pointer",
              border: "none",
              borderRadius: 4,
              boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
            }}
            onClick={async () => {
              const { data } = await axios.post(
                "http://localhost:8000/analytics/generate/",
                {
                  fbref_url: value,
                }
              )
              console.log(data)
            }}
          >
            Generate graph
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
