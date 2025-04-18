import { Code, LineChart, HeadphonesIcon } from "lucide-react"

export default function PersonaSection() {
  const personas = [
    {
      icon: <Code className="h-10 w-10 text-indigo-500" />,
      title: "Engineers",
      highlight: "Found the old migration plan",
      description:
        "Quickly locate technical documentation, code discussions, and past decisions without interrupting your flow.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-purple-500" />,
      title: "Product Managers",
      highlight: "Historical sprint goals in seconds",
      description:
        "Access product requirements, customer feedback, and historical decisions to make better-informed choices.",
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-blue-500" />,
      title: "Support Teams",
      highlight: "Bug tickets instantly surfaced",
      description:
        "Find relevant tickets, known issues, and internal documentation to resolve customer problems faster.",
    },
  ]

  return (
    <section className="py-20" id="use-cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Everyone in the Org</h2>
          <p className="text-xl text-gray-600">No matter your role, find what you need when you need it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4">{persona.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
              <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                "{persona.highlight}"
              </div>
              <p className="text-gray-600">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
