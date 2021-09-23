function Footer(){
    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <h1 className = "font-20">Soy el footer</h1>
                        <br /><br /><br />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <h1 className = "font-20">Soy el footer abajo</h1>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Footer;