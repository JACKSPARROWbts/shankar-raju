
import clsx from "clsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";


type ButtonProps = {
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  showIcon=true,
  className,
}: ButtonProps) {
  return (
    <div className="buttonGroup flex space-x-3  gap-2">
      <a href="https://drive.google.com/file/d/18NVWNuNUUn5Kt9GYpsZ3JTgOgxtMzdxU/view?usp=sharing" target="_blank"
      className={clsx(
        "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className
      )}
    >
       <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform
       duration-300 ease-in-out group-hover:translate-y-0"></span> 
       <span className="relative flex items-center justify-center gap-2">
        {showIcon && <IoIosContact className="inline-block"/>}
       </span>
    </a>
    <a href="mailto:18tucs221.skct@gmail.com" target="_blank"
      className={clsx(
        "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className,
        "transition-colors duration-300 hover:text-red-500"
      )}
    >
       <span className="absolute inset-0 z-0 h-full translate-y-9 transition-transform
       duration-300 ease-in-out group-hover:translate-y-0"></span> 
       <span className="relative flex items-center justify-center gap-2">
        {showIcon && <BiLogoGmail className="inline-block"/>}
       </span>
    </a>
    <a href="https://www.linkedin.com/in/shankar-raju-31b0711b5" target="_blank"
      className={clsx(
        "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className,
        "transition-colors duration-300 hover:text-white"
      )}
    >
       <span className="absolute inset-0 z-0 h-full translate-y-9 bg-blue-800 transition-transform
       duration-300 ease-in-out group-hover:translate-y-0"></span> 
       <span className="relative flex items-center justify-center gap-2">
        {showIcon && <FaLinkedin className="inline-block "/>}
       </span>
    </a>
    <a href="https://github.com/JACKSPARROWbts" target="_blank"
      className={clsx(
        "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className,
        "transition-colors duration-300 hover:text-white"
      )}
    >
       <span className="absolute inset-0 z-0 h-full translate-y-9 bg-gray-800 transition-transform
       duration-300 ease-in-out group-hover:translate-y-0"></span> 
       <span className="relative flex items-center justify-center gap-2">
        {showIcon && <FaGithub className="inline-block"/>}
       </span>
    </a>
    </div>
  );
}
