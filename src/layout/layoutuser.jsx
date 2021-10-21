import Header from "components/headeradmin";
import Footer from "components/footer";
import PrivateRoute from 'components/PrivateRoute'
const LayoutU = ({children}) => {
    return(<PrivateRoute>
        <div className= "Maincontainer max-w-7xl mx-auto px-4 py-6 sm:px-6">

        <Header/>
        <main >
          {children}
        </main>
          <Footer/>
      </div></PrivateRoute>
    );
}
export default LayoutU;