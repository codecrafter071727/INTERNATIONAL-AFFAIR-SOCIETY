import Image from "next/image"
import { getTimelineEvent } from "@/data/visits"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function TimelineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = getTimelineEvent(id)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-10 px-4 md:px-8 lg:px-10">

      <div className="max-w-4xl mx-auto">
        <Link href="/visits">
          <Button variant="ghost" className="mb-6 pl-0 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Timeline
          </Button>
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">{item.date}</p>

        <div className="prose dark:prose-invert max-w-none mb-10">
          <p className="text-lg font-medium mb-6">{item.summary}</p>
          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
        </div>

        {item.achievements && (
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Achievements</h2>
            <ul className="space-y-2">
              {item.achievements.map((achievement, index) => (
                <li key={index} className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                  <span className="text-green-500">✓</span> {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        <h2 className="text-xl md:text-2xl font-bold mb-6">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {item.images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}