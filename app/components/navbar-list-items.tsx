import { ChevronDownIcon } from '@heroicons/react/24/outline';

const NavBarListItems = () => {
  return (
    <ul className="xl:flex justify-center items-center gap-4">
      <li className="relative p-4 group">
        <a className="flex items-center gap-1 group" href="#">
          Services
          <ChevronDownIcon className="w-4 h-4 block group-hover:rotate-180 transition duration-150 ease-out" />
        </a>
        <ul className="absolute bg-white px-4 shadow-lg border border-gray-100 text-nowrap top-12 opacity-0 group-hover:opacity-100 hidden group-hover:block hover:block transition duration-150 ease-out hover:opacity-100">
          <li className="my-2 hover:text-primary transition duration-150 ease-out ">
            <a href="#">Garden Maintenance</a>
          </li>
          <li className="my-2 hover:text-primary transition duration-150 ease-out ">
            <a href="#">Landscaping</a>
          </li>
          <li className="my-2 hover:text-primary transition duration-150 ease-out ">
            <a href="#">Turfing Garden</a>
          </li>
          <li className="my-2 hover:text-primary transition duration-150 ease-out ">
            <a href="#">Garden Clearance</a>
          </li>
          <li className="my-2 hover:text-primary transition duration-150 ease-out ">
            <a href="#">Patio Cleaning</a>
          </li>
          <li className="my-2 hover:text-primary transition duration-150 ease-out ">
            <a href="#">Tree Surgery</a>
          </li>
          <li className="my-2 hover:text-primary transition duration-150 ease-out ">
            <a href="#">Gutter Cleaning</a>
          </li>
        </ul>
      </li>
      <li className="p-4">
        <a href="#">Prices</a>
      </li>
      <li className="p-4">
        <a href="#">About</a>
      </li>
      <li className="p-4">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default NavBarListItems;
