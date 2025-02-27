import React from 'react'

function Dropdown({items,name}) {
  const position = {
    buy: 'left-40 top-16',
    HELOC: 'left-[380px] top-16',
    rates:'left-[500px] top-16',
    better:'left-[600px] top-16'
  };

  return (
    <ul className={`${position[name] || 'top-16'} absolute top-16 bg-white text-black rounded-lg shadow-lg mt-2`}>
      {items.map((item, id) => (
        <li key={id} className='p-2 hover:bg-gray-200 rounded-md cursor-pointer'>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Dropdown