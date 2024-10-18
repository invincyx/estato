import React from 'react'

export default function NavBar() {
  return (
    <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Buy</a></li>
            <li><a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Rent</a></li>
            <li><a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sell</a></li>
            <li><a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Home Loans</a></li>
            <li><a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Find an Agent</a></li>
          </ul>
        </nav>
        <div className="text-2xl font-bold text-blue-600">
          <span className="sr-only">Zillow</span>
          Z
        </div>
        <div>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Manage Rentals</a>
        </div>
      </div>
    </div>
  </header>
  )
}
