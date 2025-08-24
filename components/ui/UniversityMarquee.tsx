 "use client"
import { motion } from "framer-motion"

export default function UniversityMarquee() {
  const universities = [
    "Harvard University",
    "Stanford University",
    "MIT",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "University of Chicago",
    "University of Pennsylvania",
    "Northwestern University",
    "Duke University",
    "Johns Hopkins University",
    "Caltech",
    "Dartmouth College",
    "Brown University",
    "Cornell University",
    "Vanderbilt University",
    "Rice University",
    "UCLA",
    "UC Berkeley",
    "University of Michigan",
  ]

  return (
    <div className="bg-white py-4 overflow-hidden marquee-container border-y">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {universities.map((university, index) => (
          <span key={index} className="inline-block mx-8 text-lg font-semibold text-[#04509D]">
            {university}
          </span>
        ))}
        {universities.map((university, index) => (
          <span key={`repeat-${index}`} className="inline-block mx-8 text-lg font-semibold text-[#04509D]">
            {university}
          </span>
        ))}
      </motion.div>
    </div>
  )
}