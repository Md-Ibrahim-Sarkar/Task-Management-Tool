import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from 'react-icons/md';

function Header() {

  const [theme, setTheme] = useState(localStorage.getItem('themeMode') || 'light');


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('themeMode', theme);
  }, [theme]);


  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="py-4 border-b border-solid dark:border-[#666]">
      <div className=" container mx-auto flex justify-between items-center">
        <span className="text-4xl font-semibold dark:text-white text-cyan-600 font-serif max-[640px]:text-2xl">Ibrahim <span className="dark:text-cyan-500 text-blue-950">Sarkar</span></span>

        <MdOutlineLightMode
          onClick={themeHandler}
          className={`text-xl cursor-pointer ${theme === 'dark' && 'text-white'}`}
        />
      </div>
    </div>
  );
}

export default Header;
