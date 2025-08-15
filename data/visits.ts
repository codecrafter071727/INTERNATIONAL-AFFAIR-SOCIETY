export const timelineEvents = [
  {
    id: "international-conference-2024",
    title: "International Conference 2024",
    date: "March 2024",
    summary: "Hosted delegates from 15 countries for the annual International Student Conference",
    description:
      "The International Student Conference 2024 was a landmark event for our student body. We welcomed representatives from 15 different countries, facilitating cultural exchange and academic collaboration. The three-day event featured keynote speeches, panel discussions, and cultural performances that showcased the diversity and talent of our international community.",
    images: [
      { src: "/placeholder.svg?height=500&width=500", alt: "Conference opening ceremony" },
      { src: "/placeholder.svg?height=500&width=500", alt: "Panel discussion with international delegates" },
      { src: "/placeholder.svg?height=500&width=500", alt: "Cultural performance night" },
      { src: "/placeholder.svg?height=500&width=500", alt: "Closing ceremony and awards" },
    ],
    achievements: [
      "Hosted delegates from 15 countries",
      "Organized 25 panel discussions and workshops",
      "Facilitated 10 cultural exchange performances",
      "Signed 5 new international partnership agreements",
      "Raised $50,000 for international student scholarships",
    ],
  },
  {
    id: "asian-delegation-visit",
    title: "Asian Delegation Visit",
    date: "January 2024",
    summary: "Welcomed a special delegation of students from Japan, South Korea, and China",
    description:
      "In January 2024, our student body had the honor of hosting a special delegation from East Asia. Students from top universities in Japan, South Korea, and China visited our campus for a week-long cultural and academic exchange program. The visit included collaborative workshops, cultural performances, and networking events that strengthened our ties with these important educational partners.",
    images: [
      { src: "/placeholder.svg?height=500&width=500", alt: "Welcome reception for Asian delegates" },
      { src: "/placeholder.svg?height=500&width=500", alt: "Japanese calligraphy workshop" },
      { src: "/placeholder.svg?height=500&width=500", alt: "Korean traditional dance performance" },
      { src: "/placeholder.svg?height=500&width=500", alt: "Farewell dinner with Chinese delegates" },
    ],
    achievements: [
      "Welcomed 30 students from top Asian universities",
      "Conducted 8 cultural workshops",
      "Established 3 new research collaborations",
      "Created a permanent Asian Cultural Exchange Committee",
    ],
  },
  {
    id: "european-exchange-program",
    title: "European Exchange Program",
    date: "November 2023",
    summary: "Launched our first European exchange program with universities from 5 countries",
    description:
      "November 2023 marked the launch of our ambitious European Exchange Program. We established partnerships with universities from Germany, France, Italy, Spain, and the Netherlands. This program will facilitate semester-long exchanges, joint research initiatives, and cultural immersion experiences for students from all participating institutions.",
    images: [
      {
        src: "/placeholder.svg?height=500&width=500",
        alt: "Signing ceremony with European university representatives",
      },
      { src: "/placeholder.svg?height=500&width=500", alt: "Student orientation for exchange program" },
      { src: "/placeholder.svg?height=500&width=500", alt: "European cultural fair on campus" },
      { src: "/placeholder.svg?height=500&width=500", alt: "First group of exchange students departure" },
    ],
    achievements: [
      "Established partnerships with 5 European universities",
      "Secured funding for 20 exchange scholarships",
      "Developed joint curriculum for 3 academic programs",
      "Created online platform for virtual exchanges",
    ],
  },
]

export function getTimelineEvent(id: string) {
  return timelineEvents.find((event) => event.id === id)
}

export function getAllTimelineEvents() {
  return timelineEvents
}