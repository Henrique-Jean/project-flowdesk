function Features(){
    const features = [
        {
            title: "Ticket Management",
            description: "Centralize all support requests in a single, intuitive, and fast dashboard.",
            icon: "🎫"
        },
        {
            title: "Analytics In Real Time",
            description: "Make data-driven decisions with charts that update in real time.",
            icon: "📊"
        },
        {
            title: "Workflow Automation",
            description: "Create automated rules to assign tasks and close inactive tickets.",
            icon:"⚡"
        },
        {
            title: "Team Collaboration",
            description: "Internal comments and suggestions for solving problems together.",
            icon: "🤝"
        }
    ]

    return (
        <section className="py-20 bg-white" id="features">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Everything you need to grow.
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Powerful tools designed for modern teams that need agility and transparency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) =>(

                        <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300 hover:-translate-y-1 bg-white">

                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                
                    ))}
                </div>
            </div>
        </section>
    )
}   
export default Features     