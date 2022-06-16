import Footer from "./Footer.js";
import Navigation from "./Navigation.js";

const Layout = ({ children }) => {
    return (
        <div className="layoutContainer">
            <Navigation className="navbar" />
            {children}
            <Footer className="footer" />
        </div>
    )
}
export default Layout;