import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const {totalItems, price} = useSelector(state=> state.cart)

  return (
    <div className="w-full bg-gray-900 relative">
      <div className="max-w-7xl flex items-center justify-between mx-auto py-4">
        <div className="flex items-center">
          <div className="text-xl font-bold text-white px-4">
            <Link to="/">Products</Link>
          </div> 
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/ProductDetails" className="p-2 text-white hover:text-gray-200">
                Details
              </Link>
            </li>
            <li className="relative">
              <Link to="/Checkout" className="p-2 text-white hover:text-gray-200 flex items-center">
                <FaShoppingCart className='text-xl' />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
