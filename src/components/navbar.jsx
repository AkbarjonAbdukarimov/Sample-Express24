import SearcButton from "./buttons/search";
// import Logo from '../images/Logo.png'
const Navbar = () => {
    return <>
        <nav className="mt-3 d-flex px-3 align-items-center">
            <div className="logo fs-3">Express 24</div>
            <SearcButton />
        </nav>
    </>

}
export default Navbar;