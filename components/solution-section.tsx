"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, FileText, MessageSquare, Calendar, ExternalLink } from "lucide-react"

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section className="py-20" id="solution">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One search box. Every source.</h2>
          <p className="text-xl text-gray-600 mb-8">
            We index Slack, Confluence, JIRA, and Drive to give you precise answers with citations and previews.
          </p>
          <Button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all">
            See it in action
          </Button>
        </div>

        {/* Search UI mockup */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Search: quarterly revenue projections"
                defaultValue="quarterly revenue projections"
              />
            </div>
          </div>

          <div className="border-b border-gray-100">
            <div className="flex overflow-x-auto">
              <button
                className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "all" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("all")}
              >
                All Sources
              </button>
              <button
                className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "slack" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("slack")}
              >
                Slack
              </button>
              <button
                className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "confluence" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("confluence")}
              >
                Confluence
              </button>
              <button
                className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "jira" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("jira")}
              >
                JIRA
              </button>
              <button
                className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${activeTab === "drive" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("drive")}
              >
                Google Drive
              </button>
            </div>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium">Q2 Financial Review</div>
                      <div className="text-xs text-gray-500">2 weeks ago</div>
                    </div>
                    <div className="text-sm text-gray-500">Confluence • Finance Team</div>
                    <p className="mt-2 text-sm text-gray-700">
                      The <span className="bg-yellow-100 px-1">quarterly revenue projections</span> show a 15% increase
                      over the previous quarter, with the new product line contributing significantly to this growth...
                    </p>
                    <div className="mt-2 flex items-center text-xs text-indigo-600">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      <span>View in Confluence</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium">Executive Team Channel</div>
                      <div className="text-xs text-gray-500">Yesterday</div>
                    </div>
                    <div className="text-sm text-gray-500">Slack • Sarah Chen (CEO)</div>
                    <p className="mt-2 text-sm text-gray-700">
                      Based on the <span className="bg-yellow-100 px-1">quarterly revenue projections</span>, we should
                      accelerate hiring in the APAC region. Let's discuss in tomorrow's meeting...
                    </p>
                    <div className="mt-2 flex items-center text-xs text-indigo-600">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      <span>View in Slack</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium">JIRA-2345: Q3 Planning</div>
                      <div className="text-xs text-gray-500">3 days ago</div>
                    </div>
                    <div className="text-sm text-gray-500">JIRA • Assigned to: Product Team</div>
                    <p className="mt-2 text-sm text-gray-700">
                      The team needs to review the{" "}
                      <span className="bg-yellow-100 px-1">quarterly revenue projections</span> before finalizing the Q3
                      roadmap priorities...
                    </p>
                    <div className="mt-2 flex items-center text-xs text-indigo-600">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      <span>View in JIRA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
