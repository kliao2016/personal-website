import { MenuIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="navbar flex justify-between items-center">
        {/* Left name + nav links */}
        <div className="flex items-center space-x-8">
          <a href="#">
            <h1 className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Kevin Liao
            </h1>
          </a>

          <div className="hidden bg-white dark:dark:bg-gray-800 w-full md:block md:w-auto">
            <ul className="flex flex-col md:flex-row mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" className="navlink">Home</a>
              </li>
              <li>
                <a href="#about" className="navlink">About</a>
              </li>
              <li>
                <a href="#education" className="navlink">Education</a>
              </li>
              <li>
                <a href="#work-experience" className="navlink">Work Experience</a>
              </li>
              <li>
                <a href="#skills" className="navlink">Skills</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Theme toggler + mobile menu */}
        <div>
          <button className="menu-button md:hidden">
            <MenuIcon className="h-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
