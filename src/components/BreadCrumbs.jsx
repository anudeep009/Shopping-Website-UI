function BreadCrumbs() {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ul className="flex flex-wrap gap-x-1 gap-y-1">
        <li className="truncate max-w-[50%]">
          <a href="#" className="hover:underline">Clothes and Shoes</a>
          <span> / </span>
        </li>
        <li className="truncate max-w-[50%]">
          <a href="#" className="hover:underline">Shoes</a>
          <span> / </span>
        </li>
        <li className="text-gray-800 truncate max-w-[50%]">Reebok</li>
      </ul>
    </nav>
  );
}

export default BreadCrumbs;
