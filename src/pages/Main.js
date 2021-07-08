import React from "react"
import MarkirovkaAbout from "../components/MarkirovkaAbout/MarkirovkaAbout"
import Operator from "../components/Operator/Operator"
import Partners from "../components/Partners/Partners"
import Staffs from "../components/Staffs/Staffs"
import About from "../components/About/About"
import ForMarkirovka from "../components/ForMarkirovka/ForMarkirovka"
import Callback from "../components/Callback/Callback"
export default function Main() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <Operator />
      <MarkirovkaAbout />
      <ForMarkirovka />
      <About />
      <Staffs />
      <Partners />
      <Callback />
    </React.Fragment>
  )
}
