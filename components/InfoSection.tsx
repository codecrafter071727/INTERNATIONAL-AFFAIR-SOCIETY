"use client"

import React from "react"
import Image from "next/image"

// Simple typewriter effect component (self-contained)
const TypewriterEffect = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const currentWord = words[currentWordIndex]?.text || ""

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText !== currentWord) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1000)
          }
        } else {
          if (currentText !== "") {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function InfoSection() {
  // Intersection Observer hook for animations
  const useInView = (options = {}) => {
    const ref = React.useRef()
    const [inView, setInView] = React.useState(false)

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        },
        { threshold: 0.1, ...options },
      )

      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])

    return [ref, inView]
  }

  // Title words for typewriter effect
  const titleWords = [{ text: "About" }, { text: "Us" }, { text: "&" }, { text: "Our" }, { text: "Programs" }]

  const programs = [
    {
      id: 1,
      title: "Global Leadership Excellence",
      description:
        "Transform into a world-class leader through immersive international experiences, executive mentorship, and strategic thinking workshops.",
      features: ["Executive Coaching", "International Exposure", "Strategic Leadership"],
      duration: "6 Months",
      level: "Advanced",
      gradient: "from-[#04509D]/20 to-[#A41D33]/20",
      accentColor: "text-[#04509D]",
      borderColor: "border-[#04509D]/30",
    },
    {
      id: 2,
      title: "Diplomatic Mastery Program",
      description:
        "Master the art of diplomacy with real-world simulations, protocol training, and direct engagement with diplomatic corps.",
      features: ["UN Simulations", "Protocol Training", "Embassy Visits"],
      duration: "4 Months",
      level: "Professional",
      gradient: "from-[#A41D33]/20 to-[#04509D]/20",
      accentColor: "text-[#A41D33]",
      borderColor: "border-[#A41D33]/30",
    },
    {
      id: 3,
      title: "International Policy Lab",
      description:
        "Shape global policies through hands-on research, policy drafting, and collaboration with international think tanks.",
      features: ["Policy Research", "Think Tank Collaboration", "Publication Opportunities"],
      duration: "8 Months",
      level: "Research",
      gradient: "from-[#04509D]/20 to-gray-800/20",
      accentColor: "text-[#04509D]",
      borderColor: "border-[#04509D]/30",
    },
    {
      id: 4,
      title: "Cross-Cultural Intelligence",
      description:
        "Develop deep cultural competency and global mindset through immersive cultural exchanges and anthropological studies.",
      features: ["Cultural Immersion", "Language Training", "Global Networking"],
      duration: "5 Months",
      level: "Intermediate",
      gradient: "from-[#A41D33]/20 to-gray-800/20",
      accentColor: "text-[#A41D33]",
      borderColor: "border-[#A41D33]/30",
    },
  ]

  // Refs for animations
  const [titleRef, titleInView] = useInView()
  const [bennettRef, bennettInView] = useInView()
  const [oiaRef, oiaInView] = useInView()
  const [iasRef, iasInView] = useInView()
  const [teamRef, teamInView] = useInView()
  const [glimpseRef, glimpseInView] = useInView()
  const [programsRef, programsInView] = useInView()

  return (
    <div className="container mx-auto px-4 font-['Sarpanch'] bg-black">
      <div className="text-center mb-8">
        <div
          className={`inline-block transition-all duration-1000 ${titleInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <Image src="/map.svg" alt="World Map" width={400} height={200} className="mx-auto" />
        </div>
      </div>

      {/* Page Title */}
      <div ref={titleRef} className="text-center mb-16">
        <h1
          className={`text-3xl md:text-5xl font-bold text-white text-center mb-8 font-['Sarpanch'] tracking-wider transition-all duration-1000 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <TypewriterEffect words={titleWords} />
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-[#04509D] to-[#A41D33] mx-auto transition-all duration-1000 delay-300 ${titleInView ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        ></div>
      </div>

      {/* Bennett University Section */}
      <section ref={bennettRef} className="mb-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div
            className={`md:w-1/2 transition-all duration-1000 ${bennettInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-3xl font-bold text-[#A41D33] mb-6 font-['Sarpanch']">Bennett University</h2>
            <p className="text-white mb-4 font-['Sarpanch']">
              Bennett University is a premier educational institution established by the Times Group, India's largest
              media conglomerate. Founded with a vision to provide Ivy League quality education, the university is
              located in Greater Noida, near Delhi NCR.
            </p>
            <p className="text-white mb-4 font-['Sarpanch']">
              The university offers undergraduate, postgraduate, and doctoral programs across various disciplines
              including Engineering, Management, Law, Media, and Liberal Arts. Bennett University is committed to
              providing a transformative educational experience that prepares students for leadership roles in a rapidly
              evolving global landscape.
            </p>
            <p className="text-white font-['Sarpanch']">
              With state-of-the-art infrastructure, industry partnerships, and a focus on research and innovation,
              Bennett University stands at the forefront of academic excellence in India.
            </p>
          </div>
          <div
            className={`md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-1000 delay-200 ${bennettInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Image src="/bennett-campus.jpg" alt="Bennett University Campus" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* About OIA Section */}
      <section ref={oiaRef} className="mb-24">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div
            className={`md:w-1/2 transition-all duration-1000 ${oiaInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-3xl font-bold text-[#A41D33] mb-6 font-['Sarpanch']">About OIA</h2>
            <p className="text-white mb-4 font-['Sarpanch']">
              The Office of International Affairs (OIA) at Bennett University serves as the gateway to global
              opportunities for students and faculty. OIA facilitates international partnerships, exchange programs, and
              collaborative research initiatives with prestigious institutions worldwide.
            </p>
            <p className="text-white mb-4 font-['Sarpanch']">
              Through strategic alliances with universities across the globe, OIA enables students to gain international
              exposure, cultural understanding, and a global perspective that is essential in today's interconnected
              world.
            </p>
            <p className="text-white font-['Sarpanch']">
              OIA's mission is to foster a globally engaged campus community and to position Bennett University as a hub
              for international academic collaboration and innovation.
            </p>
          </div>
          <div
            className={`md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-1000 delay-200 ${oiaInView ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Image src="/irco-office.jpg" alt="OIA Office" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* International Affairs Society under OIA */}
      <section ref={iasRef} className="mb-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div
            className={`md:w-1/2 transition-all duration-1000 ${iasInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-3xl font-bold text-[#A41D33] mb-6 font-['Sarpanch']">
              International Affairs Society under OIA
            </h2>
            <p className="text-white mb-4 font-['Sarpanch']">
              The International Affairs Society (IAS) is a student-led organization under the Office of International
              Affairs (OIA) at Bennett University that serves as a platform for students interested in global politics,
              diplomacy, and international relations.
            </p>
            <p className="text-white mb-4 font-['Sarpanch']">
              IAS members engage in discussions on current global issues, policy analysis, and diplomatic simulations
              that enhance their critical thinking, public speaking, and leadership skills. The society also publishes
              research papers and newsletters on international affairs.
            </p>
            <p className="text-white font-['Sarpanch']">
              Through its activities, IAS aims to create a community of globally aware individuals who can contribute
              meaningfully to international discourse and policy-making in their future careers.
            </p>
          </div>
          <div
            className={`md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-1000 delay-200 ${iasInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Image src="/ias-team.jpg" alt="OIA Team" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section ref={teamRef} className="mb-24">
        <h2
          className={`text-3xl font-bold text-[#A41D33] mb-8 text-center font-['Sarpanch'] transition-all duration-1000 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Meet Our Team
        </h2>
        <p
          className={`text-white text-center mb-12 max-w-3xl mx-auto font-['Sarpanch'] transition-all duration-1000 delay-200 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Our dedicated team of professionals and student leaders work tirelessly to create meaningful international
          experiences and foster global connections for the Bennett University community.
        </p>

        {/* Top 3 cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3].map((num, index) => {
            const teamMembers = [
              {
                name: "Dr. Sarah Chen",
                role: "Director, Office of International Affairs",
                description:
                  "With over 15 years of experience in international education, Dr. Chen leads our global initiatives and partnership development with universities worldwide.",
              },
              {
                name: "Prof. Michael Rodriguez",
                role: "Program Coordinator",
                description:
                  "Michael oversees student exchange programs and international collaborations, ensuring seamless experiences for students pursuing global opportunities.",
              },
              {
                name: "Ariya Sharma",
                role: "Student President, IAS",
                description:
                  "A passionate advocate for international relations, Ariya leads student initiatives and represents Bennett University at global forums and conferences.",
              },
            ]

            return (
              <div
                key={num}
                className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden group hover:border-[#04509D]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#04509D]/20 hover:-translate-y-3 hover:scale-105 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={`/team-member-${num}.jpg`}
                    alt={`${teamMembers[index].name} - ${teamMembers[index].role}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 font-['Sarpanch'] drop-shadow-lg">
                      {teamMembers[index].name}
                    </h3>
                    <p className="text-[#04509D] text-sm font-semibold font-['Sarpanch']">{teamMembers[index].role}</p>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/60">
                  <p className="text-gray-300 text-sm leading-relaxed font-['Sarpanch']">
                    {teamMembers[index].description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom 2 cards - centered */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[4, 5].map((num, index) => {
              const teamMembers = [
                {
                  name: "James Thompson",
                  role: "Research Coordinator",
                  description:
                    "James facilitates international research collaborations and coordinates joint projects between Bennett University and partner institutions globally.",
                },
                {
                  name: "Priya Patel",
                  role: "Student Outreach Manager",
                  description:
                    "Priya manages student communications and organizes cultural exchange events, building bridges between international and domestic students.",
                },
              ]

              return (
                <div
                  key={num}
                  className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden group hover:border-[#04509D]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#04509D]/20 hover:-translate-y-3 hover:scale-105 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={`/team-member-${num}.jpg`}
                      alt={`${teamMembers[index].name} - ${teamMembers[index].role}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1 font-['Sarpanch'] drop-shadow-lg">
                        {teamMembers[index].name}
                      </h3>
                      <p className="text-[#04509D] text-sm font-semibold font-['Sarpanch']">
                        {teamMembers[index].role}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/60">
                    <p className="text-gray-300 text-sm leading-relaxed font-['Sarpanch']">
                      {teamMembers[index].description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Glimpse Gallery */}
      <section ref={glimpseRef} className="mb-24">
        <h2
          className={`text-3xl font-bold text-[#A41D33] mb-8 text-center font-['Sarpanch'] transition-all duration-1000 ${glimpseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Glimpses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
            <div
              key={num}
              className={`relative h-48 md:h-64 rounded-lg overflow-hidden group shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 ${glimpseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={`/glimpse-${num}.jpg`}
                alt={`Glimpse ${num}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm font-['Sarpanch']">OIA Event {num}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Timeline Section */}
      <section ref={programsRef} className="mb-24 py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04509D]/5 via-transparent to-[#A41D33]/5"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#04509D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A41D33]/5 rounded-full blur-3xl"></div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent font-['Sarpanch'] transition-all duration-1000 ${programsInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            Programs For You
          </h2>
          <p
            className={`text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed font-['Sarpanch'] transition-all duration-1000 delay-200 ${programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            Designed for tomorrow's leaders. Crafted for exceptional minds.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-[#04509D] via-[#A41D33] to-[#04509D] z-10 transition-all duration-2000 delay-500 ${programsInView ? "h-full opacity-100" : "h-0 opacity-0"}`}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-32">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg z-20 border-4 border-black transition-all duration-600 hover:scale-150 ${programsInView ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                ></div>

                {/* Program Card */}
                <div
                  className={`w-full max-w-lg ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"} lg:w-5/12 transition-all duration-800 hover:scale-105 ${programsInView ? "opacity-100" : "opacity-0"} ${index % 2 === 0 ? (programsInView ? "translate-x-0" : "-translate-x-24") : programsInView ? "translate-x-0" : "translate-x-24"}`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div
                    className={`group relative bg-gradient-to-br ${program.gradient} backdrop-blur-sm border ${program.borderColor} rounded-3xl p-8 hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-white/10`}
                  >
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                      {/* Program Level Badge */}
                      <span
                        className={`inline-block px-4 py-2 text-sm font-medium ${program.accentColor} bg-white/10 rounded-full mb-6 font-['Sarpanch'] transition-all duration-500`}
                      >
                        {program.level} • {program.duration}
                      </span>

                      {/* Program Title */}
                      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-500 font-['Sarpanch']">
                        {program.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-8 font-light font-['Sarpanch']">
                        {program.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-400 text-sm font-['Sarpanch']">
                            <div className="w-2 h-2 bg-white rounded-full mr-3 opacity-60"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className="group/btn relative inline-flex items-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-500 overflow-hidden font-['Sarpanch'] hover:scale-105">
                        <span className="relative z-10 mr-2">Learn More</span>
                        <svg
                          className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-32">
          <button
            className={`group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#04509D] to-[#A41D33] hover:from-[#033d7a] hover:to-[#8a1729] rounded-full text-white font-medium text-lg transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[#04509D]/25 font-['Sarpanch'] hover:scale-105 hover:-translate-y-1 ${programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "1000ms" }}
          >
            <span className="relative z-10 mr-3">Explore All Programs</span>
            <svg
              className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </section>
    </div>
  )
}
