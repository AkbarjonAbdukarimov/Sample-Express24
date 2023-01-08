import { useState } from "react";
import SearcButton from "./buttons/search";
import MapPlaceholder from "./mapPlaceholder";
import Map from "./map";
import './navbar.css'
import UseToggler from "../hooks/UseToggler";
import Profile from '../images/Profile.svg'
const Navbar = () => {
    const [showMap, toggleMap] = UseToggler()
    const [address, setAddress] = useState("Some Address");
    return <>
        <nav className="d-flex  mb-3">
            <div className="nav-container d-flex px-3 py-2  align-items-center">
                <div className="logo fs-3 me-5">Express 24</div>
                <div className="mx-3 "><SearcButton /></div>
                <div onClick={toggleMap} className=""><MapPlaceholder address={address} /></div>
            </div>
            <div className="align-self-center mx-auto profile d-flex flex-column align-items-center"><img src={Profile} alt="" /> <div>Profile</div></div>


        </nav>
        {showMap && <Map address={address} setAddress={setAddress} mapState={showMap} closeMap={toggleMap} />}
    </>

}
export default Navbar;