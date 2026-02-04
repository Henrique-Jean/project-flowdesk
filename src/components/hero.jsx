function Hero() {
    return(
        <section className="bg-slate-50 py-20 overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div className="text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leanding-tight">
                        Organize your workflow. 
                        <span className="text-blue-600">Master your productivity.</span>
                    </h1>

                    <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0">FlowDesk is the ultimate platform for managing tickets, projects, and teams all in one place. Stop wasting time with spreadsheets.
                    </p>

                    <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full transition shadown-lg hover:shadown-blue-500/30 transform hover:-translate-y-'">
                            Start Free
                        </button>
                        <button className="bg-white text-gray-700 border-gray-200 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 hover:border-gray-300 transition">
                            View Demo
                        </button>

                    </div>

                    <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">No credit card</span>
                        <span className="flex items-center gap-1">14 days free</span>
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multyply filter blur-3x1 opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-8 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3x1 opacity-30 animete-pulse"></div>

                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Dashboard preview"
                        className="relative rounded-2xl shadown-2xl border border-gray-200 hover:scale-[1.02] transition duration-500"
                    />
                </div>

            </div>

        </section>
    )
}

export default Hero