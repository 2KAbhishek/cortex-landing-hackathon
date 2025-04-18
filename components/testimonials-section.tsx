export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I used to spend 30% of my day looking for information. Now I can find anything in seconds.",
      name: "Alex Chen",
      title: "Senior Engineer, TechCorp",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote: "This has transformed how our team accesses institutional knowledge. Game changer for onboarding.",
      name: "Sarah Johnson",
      title: "VP of Product, InnovateCo",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote: "The time savings alone paid for the subscription in the first month. Our support team loves it.",
      name: "Michael Rodriguez",
      title: "Customer Success Lead, GrowthInc",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What our users say</h2>
          <p className="text-xl text-gray-600">Teams are saving hours every day with our search platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
