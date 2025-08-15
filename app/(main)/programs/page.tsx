import { Badge } from "@/components/ui/badge"
import ProgramCard from "@/components/ui/ProgramCard"

import Testimonials from "@/components/ui/testimonials"
import UniversityMarquee from "@/components/ui/UniversityMarquee"
import { GlobeIcon, UsersIcon, BookIcon, AwardIcon } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      title: "European Cultural Immersion",
      location: "Barcelona, Spain",
      duration: "4 months",
      dates: "Fall 2024",
      price: "$12,500",
      image: "/placeholder.jpg",
      description: "Dive deep into European art, culture, and history while studying in one of the world's most vibrant cities.",
      highlights: [
        "Art history coursework at renowned museums",
        "Spanish language immersion program",
        "Weekend trips to France and Italy",
        "Local family homestay experience"
      ],
      participants: 24,
      category: "Cultural Studies"
    },
    {
      title: "Asian Business Leadership",
      location: "Tokyo, Japan",
      duration: "3 months",
      dates: "Spring 2024",
      price: "$15,200",
      image: "/placeholder.jpg",
      description: "Experience the forefront of global business innovation in Japan's economic capital.",
      highlights: [
        "Internships at major corporations",
        "Japanese business culture workshops",
        "Networking with industry leaders",
        "Technology and innovation seminars"
      ],
      participants: 18,
      category: "Business"
    },
    {
      title: "Latin American Languages",
      location: "Mexico City, Mexico",
      duration: "5 months",
      dates: "Full Academic Year",
      price: "$9,800",
      image: "/placeholder.jpg",
      description: "Master Spanish through complete cultural and linguistic immersion in Mexico's historic capital.",
      highlights: [
        "Advanced Spanish conversation classes",
        "Mexican history and literature courses",
        "Community service projects",
        "Excursions to archaeological sites"
      ],
      participants: 32,
      category: "Language"
    },
    {
      title: "Sustainability in Scandinavia",
      location: "Copenhagen, Denmark",
      duration: "4 months",
      dates: "Summer 2024",
      price: "$14,100",
      image: "/placeholder.jpg",
      description: "Study environmental policy and sustainable living practices in one of the world's greenest cities.",
      highlights: [
        "Renewable energy research projects",
        "Sustainable urban planning seminars",
        "Bike culture and green transportation",
        "Nordic countries comparative study"
      ],
      participants: 20,
      category: "Environmental"
    },
    {
      title: "African Development Studies",
      location: "Cape Town, South Africa",
      duration: "6 months",
      dates: "Fall 2024",
      price: "$11,300",
      image: "/placeholder.jpg",
      description: "Explore development economics and social justice in post-apartheid South Africa.",
      highlights: [
        "Development economics fieldwork",
        "Community development projects",
        "Safari and wildlife conservation",
        "African political history courses"
      ],
      participants: 16,
      category: "Development"
    },
    {
      title: "Australian Marine Biology",
      location: "Brisbane, Australia",
      duration: "3 months",
      dates: "Summer 2024",
      price: "$13,700",
      image: "/placeholder.jpg",
      description: "Study marine ecosystems and conservation at the Great Barrier Reef and beyond.",
      highlights: [
        "Great Barrier Reef research diving",
        "Marine conservation projects",
        "Australian wildlife study",
        "Tropical ecology coursework"
      ],
      participants: 14,
      category: "Science"
    }
  ]

  const stats = [
    {
      icon: GlobeIcon,
      value: "50+",
      label: "Countries",
      description: "Study destinations worldwide"
    },
    {
      icon: UsersIcon,
      value: "10,000+",
      label: "Students",
      description: "Successful program graduates"
    },
    {
      icon: BookIcon,
      value: "200+",
      label: "Programs",
      description: "Academic programs available"
    },
    {
      icon: AwardIcon,
      value: "98%",
      label: "Satisfaction",
      description: "Student satisfaction rate"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-[#A41D33]/20 text-[#A41D33] hover:bg-[#A41D33]/30 border-none">
            Study Abroad Programs
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Future with
            <span className="text-[#A41D33] block">Global Education</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover world-class academic programs designed to expand your horizons, 
            build international connections, and prepare you for a global career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#A41D33] text-white hover:bg-[#8c182b] transition-colors duration-200 py-3 px-8 rounded-lg font-medium">
              Browse Programs
            </button>
            <button className="border border-[#A41D33] text-[#A41D33] hover:bg-[#A41D33] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* University Partners Marquee */}
      <UniversityMarquee />

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A41D33]/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-[#A41D33]" />
                </div>
                <div className="text-3xl font-bold text-[#A41D33] mb-2">{stat.value}</div>
                <div className="font-semibold mb-1 text-black">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-2 bg-[#A41D33]/20 text-[#A41D33] hover:bg-[#A41D33]/30 border-none">
            Featured Programs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Choose Your Adventure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From business innovation in Asia to cultural immersion in Europe, 
            find the perfect program to match your academic and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              location={program.location}
              duration={program.duration}
              dates={program.dates}
              price={program.price}
              image={program.image}
              description={program.description}
              highlights={program.highlights}
              participants={program.participants}
              category={program.category}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#04509D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who have transformed their lives through our study abroad programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#04509D] hover:bg-white/90 transition-colors duration-200 py-3 px-8 rounded-lg font-medium">
              Apply Now
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-[#04509D] transition-colors duration-200 py-3 px-8 rounded-lg font-medium">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}