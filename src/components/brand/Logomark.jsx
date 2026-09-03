const SPARK_PATH =
  'M50 4 C54 34 66 46 96 50 C66 54 54 66 50 96 C46 66 34 54 4 50 C34 46 46 34 50 4 Z'

function Logomark({ className = '', size = 24 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path d={SPARK_PATH} fill="currentColor" />
    </svg>
  )
}

export default Logomark
