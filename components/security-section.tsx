import { ShieldCheck, Users, Award, Lock } from "lucide-react"

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-indigo-500" />,
      title: "OAuth/SSO",
      description: "Seamless and secure authentication with your existing identity provider.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Role-based access",
      description: "Granular permissions ensure users only see what they're allowed to access.",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-500" />,
      title: "SOC2/ISO readiness",
      description: "Built with enterprise compliance requirements in mind.",
    },
    {
      icon: <Lock className="h-10 w-10 text-pink-500" />,
      title: "We never store your data",
      description: "Your data remains in your systems. We only index metadata for search.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="security">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Security</h2>
          <p className="text-xl text-gray-600">Your data security and privacy are our top priorities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
