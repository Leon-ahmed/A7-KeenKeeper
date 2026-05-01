import { useState } from 'react'
import { BsChatText } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { LuVideo } from 'react-icons/lu'
import { TimelineEvents } from '../../data/timelineEvents'

function getEvent(type) {
  if (type === 'text') {
    return { label: 'Text', icon: BsChatText }
  }
  if (type === 'call') {
    return { label: 'Call', icon: FiPhone }
  }
  if (type === 'video') {
    return { label: 'Video', icon: LuVideo }
  }
  return null
}

function formatDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Timeline() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const timelineEvents = TimelineEvents()

  let filterEvents = timelineEvents

  if (selectedFilter !== 'all') {
    filterEvents = timelineEvents.filter(
      (event) => event.type === selectedFilter
    )
  }

  return (
    <section className="bg-[#F8FAFC] px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col justify-between gap-6  ">
          <h1 className="text-3xl font-bold text-black">Timeline</h1>

          <select
            className="bg-white max-w-85  border border-gray-200 rounded-md px-3 py-2 text-[#64748B]"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
          </select>
        </div>

        <div className="space-y-4">
          {filterEvents.length === 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#64748B]">
              No timeline events yet.
            </div>
          )}

          {filterEvents.map((event) => {
            const meta = getEvent(event.type)
            if (!meta) return null

            const Icon = meta.icon

            return (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md p-5 flex items-start gap-4"
              >
                <div className="bg-[#F1F5F9] p-3 rounded-full">
                  <Icon className="text-[#244D3F] text-lg" />
                </div>

                <div className="flex flex-col">
                  <p className="text-[#244D3F] text-xl font-medium">
                    {meta.label} 
                    <span className="text-xl font-normal text-[#64748B]"> with{' '} {event.person}</span>
                  </p>

                  <p className="text-sm text-[#64748B] mt-1">
                    {formatDate(event.createdAt)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}