import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { TimelineEvents } from '../../data/timelineEvents'

const chartColors = [ '#7C3AED','#244D3F', '#3BA55D']

function buildChartData(events) {
 
  const textCount = events.filter((event) => event.type === 'text').length
   const callCount = events.filter((event) => event.type === 'call').length
   
  const videoCount = events.filter((event) => event.type === 'video').length

  return [
     { name: 'Text', value: textCount },  
   { name: 'Call', value: callCount },
    { name: 'Video', value: videoCount },
  ]
}

export default function Stats() {
  const events = TimelineEvents()

  const chartData = buildChartData(events)

  const totalEvents = chartData.reduce((sum, item) => sum + item.value, 0)

  return (
    <section className="bg-[#F8FAFC] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-[#1F2937] text-4xl font-bold">Friendship Analytics</h1>

        <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <p className="text-[#244D3F] font-medium">By Interaction Type</p>

          <div className="mt-6 h-80">
            {totalEvents === 0 ? (
              <div className="flex h-full items-center justify-center text-[#64748B]">
                No  data yet.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={4}
                    cornerRadius={4}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={entry.name} fill={chartColors[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}