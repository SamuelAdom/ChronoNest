import { motion } from 'framer-motion'

const NewArrivalsBanner = () => {
  return (
    <div className="bg-black overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap font-bold text-white text-xl tracking-widest"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-10">
            NEW ARRIVALS
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default NewArrivalsBanner
