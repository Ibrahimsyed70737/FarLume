import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import LoadingSymbol from './LoadingSymbol'

function BootSplash() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 500))
    const fontsReady = document.fonts?.ready ?? Promise.resolve()

    Promise.all([minDelay, fontsReady]).then(() => setVisible(false))
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950"
        >
          <LoadingSymbol size={40} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BootSplash
