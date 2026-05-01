const types = ['call', 'text', 'video']

let timelineEvents = []

export function TimelineEvents() {
  return timelineEvents
}

export function addTimelineEvent(type, person) {
  if (!types.includes(type) || !person) return

  const newEvent = {
    id: Date.now(),
    type,
    person,
    createdAt: new Date().toISOString(),
  }

  timelineEvents.unshift(newEvent)
}