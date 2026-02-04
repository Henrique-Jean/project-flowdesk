function Header() {

    return(

        <header className="bg-white shadow-sm sticky top-0 z-50">

            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/*Lado eqsuerdo:logo*/}
                <div className="flex items-center gap-2">
            
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        F
                </div>

                <span className="text-xl font-bold text-gray-800">FlowDesk</span>

                </div>
            
                <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">

                    <a href="#" className="hover: text-blue-600 transition-color">Features</a>
                
                    <a href="#" className="hover: text-blue-600 transition-color">Pricing</a>
                
                    <a href="#" className="hover: text-blue-600 transition-color">On</a>

                </nav>

                <div className="flex items-center gap-4">

                    <button className="text-gray-600 font-medium hover:text-blue-600 transition">Login</button>

                    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">Start Free</button>

                </div>

            </div>

        </header>
    )
}

export default Header