import React from 'react'

function Dropdown({items}) {
  return (
    <ul className='absolute top-10 bg-white text-black rounded-lg shadow-lg mt-2'>
      {items.map((item, id) => (
        <li key={id} className='p-2 hover:bg-gray-200 rounded-md cursor-pointer'>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Dropdown