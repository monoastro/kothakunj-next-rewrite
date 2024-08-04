import React from 'react';

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100">
      <div className="bg-white p-6 rounded-md shadow-md w-3/5 h-5/6">
        <h2 className="text-2xl font-semibold mb-8">Register</h2>
        <form>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-3 py-3 border border-gray-300 rounded"
                placeholder="First Name"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-3 py-3 border border-gray-300 rounded"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Mobile</label>
              <input
                type="tel"
                className="w-full px-3 py-3 border border-gray-300 rounded"
                placeholder="Mobile"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                className="w-full px-3 py-3 border border-gray-300 rounded"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-3 border border-gray-300 rounded"
              placeholder="Email"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-3 border border-gray-300 rounded"
                placeholder="Password"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-3 border border-gray-300 rounded"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-40 bg-orange-500 text-white py-3 rounded hover:bg-orange-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-700 mt-6">
          Already have an account? <a href="#" className="text-blue-500">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
