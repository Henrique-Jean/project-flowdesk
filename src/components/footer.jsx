function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            F
                        </div>
                        <span className="text-xl font-bold">FlowDesk</span>
                    </div>

                    <p className="text-gray-400 text-sm">
                        Simplifying team management worldwide. Made with ❤️ for you.
                    </p>

                </div>

                <div>
                    <h4 className="font-bold mb-4">Produtec</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Integrations</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Changelog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">enterprise</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-blue-400 transition">About us</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Legal Aspects</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Terms of use</a></li>
                    </ul>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    &copy {new Date().getFullYear()} FlowDesk. All rights reserved.
                </div>
            </div>
        </footer>

    )
}

export default Footer