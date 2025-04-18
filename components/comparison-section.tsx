import { Check, X } from "lucide-react"

export default function ComparisonSection() {
  const features = [
    "Semantic search",
    "Multi-source integration",
    "Source citations",
    "Role-based access control",
    "Real-time indexing",
    "No data storage",
  ]

  const competitors = [
    {
      name: "Cortex",
      features: [true, true, true, true, true, true],
      highlight: true,
    },
    {
      name: "Notion AI",
      features: [true, false, false, false, false, false],
      highlight: false,
    },
    {
      name: "Workspace search",
      features: [false, false, false, true, false, true],
      highlight: false,
    },
    {
      name: "Guru",
      features: [false, true, false, true, false, false],
      highlight: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Better than internal tools</h2>
          <p className="text-xl text-gray-600">See how we compare to other knowledge management solutions.</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b-2 border-gray-200"></th>
                {competitors.map((competitor, index) => (
                  <th
                    key={index}
                    className={`p-4 text-center border-b-2 ${competitor.highlight ? "border-indigo-500 bg-indigo-50" : "border-gray-200"}`}
                  >
                    <span className={competitor.highlight ? "text-indigo-700 font-bold" : "text-gray-700"}>
                      {competitor.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex} className={featureIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4 border-b border-gray-200 font-medium">{feature}</td>
                  {competitors.map((competitor, competitorIndex) => (
                    <td
                      key={competitorIndex}
                      className={`p-4 text-center border-b border-gray-200 ${competitor.highlight ? "bg-indigo-50" : ""}`}
                    >
                      {competitor.features[featureIndex] ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
