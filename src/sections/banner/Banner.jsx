import { motion } from "framer-motion";
import bannerImage from '../../images/task.png';

function Banner() {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center">
      <div className="max-[800px]:col-span-2">
        <motion.h1 className="lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:text-3xl max-[640px]:mt-8 font-bold mb-3 text-cyan-700 dark:text-cyan-300 px-2"
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.05,
            },
          }}>Task  Management</motion.h1>
        <motion.p className="text-lg dark:text-stone-300 max-[640px]:mt-4 text-justify px-2"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.05,
            },
          }}>This Task Management System helps users efficiently organize, prioritize, and track tasks. With a user-friendly interface, it allows you to create tasks, assign them to specific team members, set priorities, and monitor progress all in one place.</motion.p>
      </div>
      <div className="mx-auto max-[800px]:col-span-2 max-[640px]:my-4">
        <img className="w-2/3 mx-auto" src={bannerImage} alt="banner image" />
      </div>
    </div>
  )
}

export default Banner