import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./ui/AppLayout";
import ContactUs from "./Components/Home/ContactUs";
import AboutUs from "./Components/Home/AboutUs";
import Careers from "./Components/Home/Careers";
import Services from "./Components/Home/Services";
import Portfolio from "./Components/Home/Portfolio";
import Automotive from "./Service/Industries/Automotive";
import AppMaintenance from "./Service/App Maintenance And Support/AppMaintenance";
import Educationnn from "./Service/Education/Educationnn";
import Learning from "./Service/Education/Learning";
import Banking from "./Service/Industries/Banking";
import Demand from "./Service/Solution/Demand"
import Enterprises from "./Service/Solution/Enterprises";
import Marketplace from "./Service/Solution/Marketplace";
import Tracking from "./Service/Solution/Tracking";
import React1 from "./Service/Technology/React1";
import Firebase from "./Service/Technology/Firebase";
import Dbms from "./Service/Technology/Dbms";
import Ios from "./Service/Technology/Ios";
import Android from "./Service/Technology/Android";
import Ecommerce from "./Service/Industries/Ecommerce";
import PrivacyPolicy from "./Components/Home/PrivacyPolicy";


export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />

            <Route path="/AppMaintenance" element={<AppMaintenance />} />

            <Route path="/Educationnn" element={<Educationnn/>}/>
            <Route path="/Learning" element={<Learning/>}/>

            <Route path="/Automotive" element={<Automotive/>}/>
            <Route path="/Banking" element={<Banking/>}/>
            <Route path="/Ecommerce" element={<Ecommerce/>}/>
            {/* <Route path="/Mvp" element={<Mvp/>}/> */}

            <Route path="/Enterprises" element={<Enterprises/>}/>
            <Route path="/Tracking" element={<Tracking/>}/>
            <Route path="/Marketplace" element={<Marketplace/>}/>
            <Route path="/Demand" element={<Demand/>}/>

            <Route path="/Android" element={<Android/>}/>
            <Route path="/Firebase" element={<Firebase/>}/>
            <Route path="/Ios" element={<Ios/>}/>
            <Route path="/React1" element={<React1/>}/>
            <Route path="/Dbms" element={<Dbms/>}/>


        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/Portfolio" element={<Portfolio />} />

        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

      </Route>
    </Routes>
  );
}
