"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"


// --- TYPE DEFINITIONS ---

interface Word {
  text: string
}

interface TypewriterProps {
  words: Word[]
}


interface TeamMember {
  name: string
  role: string
  description: string
}

// --- CUSTOM HOOK (with types and moved outside component) ---

/**
 * A custom hook to detect when an element is in the viewport.
 * @param options - IntersectionObserver options.
 * @returns A tuple containing the ref to attach to the element and a boolean indicating if it's in view.
 */
// Add this after your type definitions and before the useInView hook
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const useInView = <T extends Element>(
  options: IntersectionObserverInit = {},
): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to true, don't set back to false on exit
        if (entry.isIntersecting) {
          setInView(true)
          // Disconnect after it's in view to prevent re-triggering
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold: 0.1, ...options },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options]) // ref is stable, no need to include in dependency array

  return [ref as React.RefObject<T>, inView]
}

// --- TYPEWRITER COMPONENT (with types) ---

import dynamic from 'next/dynamic'

// Dynamically import TypewriterEffect with SSR disabled
const TypewriterEffect = dynamic(() => Promise.resolve(({ words }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]?.text || ""

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText !== currentWord) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
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
}), { ssr: false })

// --- MAIN COMPONENT ---

export default function InfoSection(): React.ReactElement {
  const titleWords: Word[] = [{ text: "About" }, { text: "Us" }, { text: "&" }, { text: "Our" }, { text: "Programs" }]


  // Refs for animations with specified element types
  const [titleRef, titleInView] = useInView<HTMLDivElement>()
  const [bennettRef, bennettInView] = useInView<HTMLElement>()
  const [oiaRef, oiaInView] = useInView<HTMLElement>()
  const [iasRef, iasInView] = useInView<HTMLElement>()
  const [teamRef, teamInView] = useInView<HTMLElement>()
  const [glimpseRef, glimpseInView] = useInView<HTMLElement>()
  const [programsRef, programsInView] = useInView<HTMLElement>()

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
              Bennett University is a premier educational institution established by the Times Group, India&apos;s largest
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
              exposure, cultural understanding, and a global perspective that is essential in today&apos;s interconnected
              world.
            </p>
            <p className="text-white font-['Sarpanch']">
              OIA&apos;s mission is to foster a globally engaged campus community and to position Bennett University as a hub
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
            const teamMembers: TeamMember[] = [
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
            const member = teamMembers[index]

            return (
              <div
                key={num}
                className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden group hover:border-[#04509D]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#04509D]/20 hover:-translate-y-3 hover:scale-105 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={`/team-member-${num}.jpg`}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 font-['Sarpanch'] drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="text-[#04509D] text-sm font-semibold font-['Sarpanch']">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/60">
                  <p className="text-gray-300 text-sm leading-relaxed font-['Sarpanch']">{member.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom 2 cards - centered */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[4, 5].map((num, index) => {
              const teamMembers: TeamMember[] = [
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
              const member = teamMembers[index]

              return (
                <div
                  key={num}
                  className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden group hover:border-[#04509D]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#04509D]/20 hover:-translate-y-3 hover:scale-105 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={`/team-member-${num}.jpg`}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1 font-['Sarpanch'] drop-shadow-lg">
                        {member.name}
                      </h3>
                      <p className="text-[#04509D] text-sm font-semibold font-['Sarpanch']">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/60">
                    <p className="text-gray-300 text-sm leading-relaxed font-['Sarpanch']">{member.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Glimpse Gallery */}
      <motion.section 
        ref={glimpseRef} 
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
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
      </motion.section>
      
      {/* Programs Section */}
      <motion.section 
        ref={programsRef}
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2
          className={`text-3xl font-bold text-white mb-8 text-center font-['Sarpanch'] transition-all duration-1000 ${programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Programs For You
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Program Card 1 */}
          <div
            className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg ${programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="relative h-48">
              <Image 
                src="/program-1.jpg" 
                alt="Global Leadership Program" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 font-['Sarpanch']">Global Leadership Program</h3>
              <p className="text-gray-400 mb-4 font-['Sarpanch']">A comprehensive program designed to develop leadership skills in an international context.</p>
              <Link href="/programs/global-leadership" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-['Sarpanch']">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Program Card 2 */}
          <div
            className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg ${programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative h-48">
              <Image 
                src="/program-2.jpg" 
                alt="Diplomatic Studies" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 font-['Sarpanch']">Diplomatic Studies</h3>
              <p className="text-gray-400 mb-4 font-['Sarpanch']">An intensive course on diplomatic protocols, international negotiations, and conflict resolution.</p>
              <Link href="/programs/diplomatic-studies" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-['Sarpanch']">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Program Card 3 */}
          <div
            className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg ${programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative h-48">
              <Image 
                src="/program-3.jpg" 
                alt="International Policy Workshop" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 font-['Sarpanch']">International Policy Workshop</h3>
              <p className="text-gray-400 mb-4 font-['Sarpanch']">A hands-on workshop on policy formulation, analysis, and implementation in global contexts.</p>
              <Link href="/programs/policy-workshop" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-['Sarpanch']">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-300 ${programsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link href="/programs" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors font-['Sarpanch']">
            View All Programs
          </Link>
        </div>
      </motion.section>
    </div>
  )
}