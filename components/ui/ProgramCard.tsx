import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"

interface ProgramCardProps {
  title: string
  location: string
  duration: string
  dates: string
  price: string
  image: string
  description: string
  highlights: string[]
  participants: number
  category: string
}

export default function ProgramCard({
  title,
  location,
  duration,
  dates,
  price,
  image,
  description,
  highlights,
  participants,
  category,
}: ProgramCardProps) {
  return (
    <Card className="group overflow-hidden card-hover-effect border shadow-lg bg-white">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#A41D33] text-white hover:bg-[#A41D33]">
            {category}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-black">{price}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl mb-2 text-black">{title}</CardTitle>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPinIcon className="h-4 w-4 mr-2 text-[#A41D33]" />
            {location}
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-2 text-[#A41D33]" />
            {duration}
          </div>
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-[#A41D33]" />
            {dates}
          </div>
          <div className="flex items-center">
            <UsersIcon className="h-4 w-4 mr-2 text-[#A41D33]" />
            {participants} participants
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-1">
          <h4 className="font-semibold text-sm text-black">Program Highlights:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#A41D33] mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <button className="w-full bg-[#A41D33] text-white hover:bg-[#8c182b] transition-colors duration-200 py-2 px-4 rounded-md font-medium">
          Learn More
        </button>
      </CardFooter>
    </Card>
  )
}