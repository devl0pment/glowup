import Footer from "./Footer.js";
import Navigation from "./Navigation.js";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;