import React from 'react'

function Modal({isOpen,setIsOpen,selectUser,closeHandler}) {
    if(!isOpen) return;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-xl font-semibold">user detail</h3>
        <button
          onClick={closeHandler}
          className="text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">name:</p>
            <p className="font-medium">{selectUser.name}</p>
          </div>
          <div>
            <p className="text-gray-600">username:</p>
            <p className="font-medium">{selectUser.username}</p>
          </div>
          <div>
            <p className="text-gray-600">email:</p>
            <p className="font-medium">{selectUser.email}</p>
          </div>
          <div>
            <p className="text-gray-600">phone:</p>
            <p className="font-medium">{selectUser.phone}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600">address:</p>
          <p className="font-medium">
            {selectUser.address.street}, {selectUser.address.suite}<br />
            {selectUser.address.city}, {selectUser.address.zipcode}
          </p>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600">company:</p>
          <p className="font-medium">{selectUser.company.name}</p>
          <p className="text-sm text-gray-500">{selectUser.company.catchPhrase}</p>
        </div>
      </div>
      
      <div className="flex justify-end p-4 border-t">
        <button
          onClick={closeHandler}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          close
        </button>
      </div>
    </div>
  </div>
  )
}

export default Modal
