import { motion } from 'framer-motion'
import Logomark from './Logomark'

function LoadingSymbol({ size = 32, className = 'text-amber-400' }) {
  return (
    <motion.div
      animate={{ rotate: 360, scale: [1, 0.85, 1] }}
      transition={{
        rotate: { duration: 1.6, repeat: Infinity, ease: 'linear' },
        scale: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={className}
    >
      <Logomark size={size} />
    </motion.div>
  )
}

export default LoadingSymbol
