import "./assets/css/index.css"
import React, { useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./pages/Main"
import News from "./pages/News/News.jsx"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Alcohol from "./pages/Alcohol/Alcohol"
import Tekstil from "./pages/Tekstil/Tekstil"
import Shoes from "./pages/Shoes/Tekstil"
import EquipmentMain from "./pages/Equipments/EquipmentMain"
import Filials from "./pages/filials/filials"
import Projects from "./pages/projects/projects.js"
import HeaderTop from "./pages/News/components/HeaderTop"
import Add from "./pages/News/Add/Add"
import NewAdd from "./pages/News/Add/NewAdd"
import New from "./pages/News/New.jsx"
import SignUp from "./pages/Sign/SignUp/SignUp"
import FullCard from "./pages/News/FullCard/FullCard"
import License from "./pages/License/License"
import Privacypolicy from "./pages/policy/privacypolicy"
import Contacts from "./pages/ContactUs/ContactUs"
import AboutUs from "./pages/About/aboutUs"
import Tabak from "./pages/Tabak/Tabak"
import Milk from "./pages/Milk/Milk"
import Parfum from "./pages/Parfum/Parfum"

function App() {
  const [equipmentSection, setEquipmentSection] = useState("main")

  return (
    <BrowserRouter>
      <Header setEquipmentSection={setEquipmentSection} />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/news" component={News} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/news/top" component={HeaderTop} />
        <Route path="/news/add" component={Add} />
        <Route path="/news/addd" component={NewAdd} />
        <Route path="/alcohol" component={Alcohol} exact />
        <Route path="/parfum" component={Parfum} exact />
        <Route path="/tabak" component={Tabak} exact />
        <Route path="/milk" component={Milk} exact />
        <Route path="/tekstil" component={Tekstil} exact />
        <Route path="/shoes" component={Shoes} exact />
        <Route
          path="/equipments"
          component={() => (
            <EquipmentMain
              equipmentSection={equipmentSection}
              setEquipmentSection={setEquipmentSection}
            />
          )}
        />
        <Route path="/filials" component={Filials} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route path="/top" component={HeaderTop} />
        <Route path="/New" component={New} />
        <Route path="/signup" component={SignUp} />
        <Route path="/News/:id" component={FullCard} />
        <Route path="/license" component={License} />
        <Route path="/policy" component={Privacypolicy} />
      </Switch>
      <Footer />
      {/* <a href='https://api.whatsapp.com/send?phone=+996501588882' target='_blank' rel='noopener noreferrer' className='fab fa-whatsapp' ></a> */}
    </BrowserRouter>
  )
}
export default App
