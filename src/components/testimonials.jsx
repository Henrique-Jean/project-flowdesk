function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CTO in TechStart",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            quote: "FlowDesk revolutionized the way our QA team works. Productivity increased by 40% in the first week."
        },
        {
            name: "Carlos Mendes",
            role: "Project Manager",
            avatar:"https://randomuser.me/api/portraits/men/32.jpg",
            quote: "Simple, intuitive, and powerful. Finally, a tool that doesn't need a 100-page manual to use."
        },
        {
            name: "Amanda Lee",
            role: "Freelancer",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            quote: "The free plan is incredibly generous. I can manage all my clients without spending a penny."
        }

    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Those who use it, approve.</h2>
                    <p className="mt-4 text-gray-600">Join over 10,000 satisfied teams.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
                            <div className="flex text-yellow-400 mb-4">
                                ★★★★★
                            </div>

                            <p className="text-gray-700 mb-6">"
                                {item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                        <p className="text-gray-500 text-xs">{item.role}</p>
                                    </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials