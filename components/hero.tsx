"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, FileText, MessageSquare, Calendar } from "lucide-react"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
            Your Organization's Brain—Finally Searchable.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Stop digging through Slack, Confluence, JIRA, and Drive. One search bar to rule them all.
          </p>
          <Button className="px-8 py-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            Get Early Access
          </Button>
        </div>

        {/* Interactive search mockup */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Search across all your tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                />
              </div>
            </div>

            {isSearchFocused && (
              <div className="p-4 max-h-80 overflow-y-auto">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Q4 Product Roadmap</div>
                        <div className="text-sm text-gray-500">Confluence • Updated 2 days ago</div>
                        <p className="mt-1 text-sm text-gray-700">
                          ...our <span className="bg-yellow-100 px-1">migration plan</span> for the new API will be
                          completed by end of Q4...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Engineering Channel</div>
                        <div className="text-sm text-gray-500">Slack • Sarah Chen • 1 week ago</div>
                        <p className="mt-1 text-sm text-gray-700">
                          I found the issue with the <span className="bg-yellow-100 px-1">migration</span>. It was
                          related to the database indexes...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <div className="font-medium">JIRA-1234: Database Migration Plan</div>
                        <div className="text-sm text-gray-500">JIRA • Assigned to: Alex Kim</div>
                        <p className="mt-1 text-sm text-gray-700">
                          Status: In Progress • Due: Next Friday • <span className="bg-yellow-100 px-1">Migration</span>{" "}
                          steps documented in comments...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
