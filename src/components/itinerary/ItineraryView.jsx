import { motion } from 'framer-motion'

function ItineraryView({ days }) {
  return (
    <div className="mt-8 space-y-6">
      {days.map((day, di) => (
        <motion.div
          key={day.day}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: di * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/8 bg-neutral-900/50 p-6 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-medium uppercase tracking-wide text-amber-300">
              Day {day.day}
            </span>
            <h3 className="font-display text-lg text-white">{day.title}</h3>
          </div>

          <ol className="mt-4 space-y-4 border-l border-neutral-800 pl-5">
            {day.activities?.map((activity, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_0_3px_rgba(251,191,36,0.15)]" />
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {activity.time}
                </p>
                <p className="mt-0.5 text-sm font-medium text-white">
                  {activity.title}
                </p>
                <p className="mt-0.5 text-sm text-neutral-400">
                  {activity.description}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      ))}
    </div>
  )
}

export default ItineraryView
