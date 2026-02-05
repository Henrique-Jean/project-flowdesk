import Features from "./features";

function Pricing(){
    const plans = [
        {
            name: "Starter",
            price: "$ 0",
            period: "/mounth",
            description: "For freelancers and students.",
            features: ["Up to 5 projects", "Basic Analytics", "Email support"],
            buttontext: "Start Free",
            recommended: false
        },
        {
            name: "Pro",
            price: "R$ 49,00",
            period: "/mounth",
            description: "For growing teams.",
            features: ["Unlimited projects", "Advanced analytics", "Priority support", "Slack integration"],
            buttontext: "Subscribe to Pro",
            recommended: true
        },
        {
            name: "Enterprise",
            price: "custom-made",
            period: "",
            description: "For large organizations.",
            features: ["All Pro Features", "Dedicated Account Manager", "SSO & Security", "Unlimited API"],
            buttontext: "Talk to Sales",
            recommended: false
        }
    ]

    return (
        <section className="py-20 bg-slate-50" id="pricing">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Flexible plans</h2>
                    <p className="mt-4 text-gray-600">Choose what's best for your current situation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div key={index}
                            className={`relative p-8 bg-white rounded-2l transition-all duration-300 border
                                ${plan.recommended
                                    ? "border-blue-600 shadow-2xl scale-105 z-10"
                                    : "border-gray-100 shadow-lg hover:shadow-xl"
                                }
                                `}>
                                {plan.recommended &&(
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                        Most Popular
                                    </div> 
                                )}

                                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500 ml-1">{plan.period}</span>
                                </div>
                                <p className="mt-2 text-gray-500 text-sm">{plan.description}</p>

                                <ul className="mt-6 space-y-4 mb-8">
                                    {plan.features.map((features, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                                            <span className="text-green-500 mr-2">✓</span>
                                            {features}
                                        </li>
                                    )
                                )}
                                </ul>

                                <button className={`w-full py-3 rounded-lg font-bold transition-colors
                                ${plan.recommended
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                }`}>
                                    {plan.buttontext}
                                </button>
                            </div>
                ))}
                </div>
            </div>
        </section>
    )
}
export default Pricing