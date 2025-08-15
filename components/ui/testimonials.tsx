import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "My semester in Barcelona completely transformed my perspective on art and culture. The program was perfectly organized, and the support from the agency was exceptional.",
      author: "Emma Rodriguez",
      role: "Art History Major",
      university: "University of California",
      program: "European Arts & Culture",
      avatar: "/placeholder-user.jpg",
    },
    {
      quote:
        "Studying business in Tokyo gave me invaluable insights that I couldn't have gained anywhere else. The connections I made will benefit my career for years to come.",
      author: "James Chen",
      role: "Business Administration Major",
      university: "Boston University",
      program: "Asian Business Studies",
      avatar: "/placeholder-user.jpg",
    },
    {
      quote:
        "The language immersion in Mexico City exceeded all my expectations. I returned home with fluency in Spanish and lifelong friendships from around the world.",
      author: "Sophia Washington",
      role: "International Relations Major",
      university: "Georgetown University",
      program: "Latin American Languages",
      avatar: "/placeholder-user.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-16">
        <Badge className="mb-2 bg-[#A41D33]/20 text-[#A41D33] hover:bg-[#A41D33]/30 border-none">Student Voices</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Student Testimonials</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from students who have experienced our programs firsthand
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border shadow-lg overflow-hidden card-hover-effect bg-white">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-20 h-20 text-[#A41D33]/10">
                <QuoteIcon className="h-20 w-20" />
              </div>
              <p className="text-gray-600 mb-8 relative z-10">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-[#A41D33]/20"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.university}</p>
                  <p className="text-xs text-[#A41D33] font-medium">{testimonial.program}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="#"
          className="text-[#04509D] hover:text-[#033b77] hover:underline font-medium inline-flex items-center group"
        >
          Read more student stories
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}