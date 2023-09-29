import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./Configuration.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { colorModeActions } from "../../store/store"
import toast from "react-hot-toast"
import Draggable from "react-draggable"
import { MoonLoader, PuffLoader } from "react-spinners"

const MultiplierRow = ({ multipliersKey, multipliersValue }: any) => {
  const colorMode = useSelector((state: any) => state.colorMode)
  const [value, setValue] = useState(multipliersValue)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (value == multipliersValue) {
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    const timeout = setTimeout(() => {
      if (value && value !== multipliersValue  && /^[0-9]+(\.[0-9]+)?$/.test(value)) {
        try {
        } catch (error) {
        } finally {
          setIsLoading(false)
          toast.success("Successfully updated")
        }
      } else {
        setIsLoading(false)
        toast.error("Insert a valid value")
      }
    }, 2000)
    return () => clearTimeout(timeout)
  }, [value])

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          columnGap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{}}>
          <MoonLoader
            cssOverride={{ visibility: isLoading ? "visible" : "hidden" }}
            color={colorMode == "dark" ? "white" : "black"}
            loading={true}
            size={15}
            aria-label="Loading Spinner"
          />
        </div>
        {multipliersKey}
      </div>
      <input
        type="text"
        style={{
          width: 50,
          textAlign: "center",
          outline: "none",
          borderRadius: 4,
          border: "none",
          backgroundColor: colorMode === "dark" ? "#333" : "#fff",
          color: colorMode === "dark" ? "#fff" : "#333",
        }}
        value={value}
        onChange={(e) => {
          if (!/^[0-9]+(\.[0-9]*)?$/.test(e.target.value) && e.target.value !== "") {
            e.preventDefault()
            return
          }
          setValue(e.target.value)
        }}
      />
    </div>
  )
}
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random())
  var r = num >> 16
  var g = (num >> 8) & 255
  var b = num & 255
  return "rgba(" + r + ", " + g + ", " + b + ", 0.3)"
}
const Configuration = () => {
  const dispatch = useDispatch()
  const colorMode = useSelector((state: any) => state.colorMode)
  const configuration = useSelector((state: any) => state.configuration)

  const getConfiguration = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/configuration/")
      dispatch(colorModeActions.setConfiguration(data))
    } catch (error: any) {
      toast.error(error.message)
      console.log(error)
    }
  }
  useEffect(() => {
    getConfiguration()
  }, [])

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div
          style={{
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "start",
            padding: 20,
            gap: 30,
            gridTemplateColumns: "auto auto auto",
          }}
        >
          {configuration.map((item: any, index: any) => {
            const { role, multipliers } = item
            return (
              // <Draggable key={role}>
              <div
                style={{
                  width: 320,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  backgroundColor: getRandomRgb(),
                  color: colorMode === "dark" ? "#fff" : "#333",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: 5,
                }}
              >
                <div
                  style={{ fontSize: 20, fontWeight: 500, marginBottom: 10 }}
                >
                  {role}
                </div>
                {Object.keys(multipliers).map((multipliersKey: any) => {
                  return (
                    <MultiplierRow
                      key={multipliersKey}
                      multipliersKey={multipliersKey}
                      multipliersValue={multipliers[multipliersKey]}
                    />
                  )
                })}
              </div>
              // </Draggable>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Configuration
