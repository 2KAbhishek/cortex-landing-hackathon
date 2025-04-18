import { Brain, Lock, Eye, Zap } from "lucide-react"

export default function GainSection() {
  const benefits = [
    {
      icon: <Brain className="h-10 w-10 text-indigo-500" />,
      title: "Semantic AI search",
      description: "Our AI understands context and meaning, not just keywords, to find exactly what you need.",
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-500" />,
      title: "Role-based access control",
      description: "Only see results you have permission to access, maintaining your organization's security.",
    },
    {
      icon: <Eye className="h-10 w-10 text-blue-500" />,
      title: "Source previews and links",
      description: "Preview content and jump directly to the source with a single click.",
    },
    {
      icon: <Zap className="h-10 w-10 text-pink-500" />,
      title: "Secure and fast",
      description: "Lightning-fast results with enterprise-grade security and compliance.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-white" id="benefits">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Know more. Work faster.</h2>
          <p className="text-xl text-gray-600">
            Transform how your team finds and uses information with powerful AI-driven search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
