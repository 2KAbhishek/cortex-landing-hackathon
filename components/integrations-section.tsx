export default function IntegrationsSection() {
  const integrations = [
    {
      name: "Slack",
      logo: "/placeholder.svg?height=60&width=120",
      color: "bg-green-50",
    },
    {
      name: "Confluence",
      logo: "/placeholder.svg?height=60&width=120",
      color: "bg-blue-50",
    },
    {
      name: "JIRA",
      logo: "/placeholder.svg?height=60&width=120",
      color: "bg-indigo-50",
    },
    {
      name: "Google Drive",
      logo: "/placeholder.svg?height=60&width=120",
      color: "bg-yellow-50",
    },
    {
      name: "GitHub",
      logo: "/placeholder.svg?height=60&width=120",
      color: "bg-gray-50",
    },
  ]

  return (
    <section className="py-16 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Works with your favorite tools</h2>
          <p className="text-gray-600">Seamlessly connect to the tools your team already uses.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${integration.color} flex items-center justify-center h-20 w-40`}
            >
              <img src={integration.logo || "/placeholder.svg"} alt={`${integration.name} logo`} className="max-h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
