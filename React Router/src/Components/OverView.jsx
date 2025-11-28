import React from 'react'

const OverView = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Stats</h3>
          <p className="text-gray-600">Welcome to your dashboard overview!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Activity</h3>
          <p className="text-gray-600">No recent activity to display.</p>
        </div>
      </div>
    </div>
  )
}

export default OverView;