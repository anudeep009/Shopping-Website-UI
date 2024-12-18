import React from 'react';

function MenuItems() {
  const menuitems = [
    { id: 1, item: 'Women' },
    { id: 2, item: 'Men' },
    { id: 3, item: 'Kids' },
    { id: 4, item: 'Sports' },
    { id: 5, item: 'Brands' },
    { id: 6, item: 'New' },
    { id: 7, item: 'Sale', className: 'text-red-500 font-semibold' },
  ];

  return (
    <div className="text-sm md:text-base lg:text-lg ml-4 md:ml-10">
  <ul className="flex flex-wrap justify-start gap-x-4 md:gap-x-8">
    {menuitems.map((item) => (
      <li
        className={`cursor-pointer hover:text-gray-500 ${
          item.className || 'text-gray-700'
        }`}
        key={item.id}
      >
        {item.item}
      </li>
    ))}
  </ul>
</div>

  );
}

export default MenuItems;
