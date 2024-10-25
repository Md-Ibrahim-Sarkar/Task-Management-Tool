import { motion } from "framer-motion"


function Footer() {
  return (
    <motion.p className="text-center py-2 dark:text-stone-300"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.05,
        },
      }}>&copy; <a target="_blank" className="font-serif" href="https://ibrahimsarkar.com/">Ibrahim Sarkar</a> . All Right Reserved.</motion.p>
  )
}

export default Footer