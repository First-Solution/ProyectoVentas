import Header from "components/headeradminuser";
import Footer from "components/footer";

import PrivateRoute from 'components/PrivateRoute'
const LayoutU = ({children}) => {
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
export default LayoutU;