import React from "react";

function NavBar() {
  return (
    <div className="w-screen h-16 sticky">
      <nav>
        <ul className="flex flex-row justify-center gap-10 p-2">
          <li className="hover:bg-indigo-700 transition duration-300 ease-linear min-w-min shadow-sm w-1/5 h-10 xl:h-10 bg-indigo-900 text-center grid items-center rounded-md text-gray-100 font-bold text-lg cursor-pointer px-2">
            Create
          </li>

          <li className="hover:bg-indigo-700 transition duration-300 ease-linear min-w-min shadow-sm w-1/5 h-10 xl:h-10 bg-indigo-900 text-center grid items-center rounded-md text-gray-100 font-bold text-lg cursor-pointer px-2">
            Settings
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
