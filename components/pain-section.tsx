import { Search, Clock, HelpCircle, FileQuestion } from "lucide-react"

export default function PainSection() {
  const painPoints = [
    {
      icon: <Search className="h-10 w-10 text-indigo-500" />,
      title: "Buried Slack threads",
      description: "Important discussions get lost in the noise of daily chatter.",
    },
    {
      icon: <FileQuestion className="h-10 w-10 text-purple-500" />,
      title: "Forgotten Confluence pages",
      description: "Documentation exists but nobody can find it when needed.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Old JIRA tickets from two sprints ago",
      description: "Critical context buried in tickets nobody remembers.",
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-pink-500" />,
      title: "Lost docs in shared Drives",
      description: "Files with cryptic names scattered across multiple folders.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="pain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">You spend hours hunting for answers.</h2>
          <p className="text-xl text-gray-600">
            The average employee wastes 5+ hours per week searching for information across disconnected tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
