import Header from "components/headeruser";
import Footer from "components/footeruser";

const Layout = ({children}) => {
    return(
        <div className= "Maincontainer max-w-7xl mx-auto px-4 py-6 sm:px-6">

        <Header/>
        <main >
          {children}
        </main>
  
          <Footer/>
      </div>
    );
}
export default Layout;