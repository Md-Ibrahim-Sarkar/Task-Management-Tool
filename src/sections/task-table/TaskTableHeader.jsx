import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";


function TaskTableHeader({ onSearch }) {
  return (
    <div className="container mx-auto flex justify-between items-center mt-2 mb-3">
      <h2 className="text-2xl pl-3 font-bold dark:text-white max-[640px]:text-[20px]">Your Tasks</h2>
      <div className="max-w-lg">
        <TextInput onChange={(e) => onSearch(e.target.value)} className="max-[440px]:w-32" id="email4" type="email" rightIcon={FiSearch} required />
      </div>
    </div>
  )
}

export default TaskTableHeader