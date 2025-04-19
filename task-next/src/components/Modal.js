"use client"

import { close } from "@/core/features/userSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Modal() {
  
  const {selectedUser ,isOpen} = useSelector((state)=>state.users);

  const dispatch = useDispatch();

if(!selectedUser)return;

  return (
  
  
      <div  className="modal modal-open fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="modal-box bg-white rounded-lg shadow-xl max-w-2xl w-full">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-xl font-semibold">User Details</h3>
          <button
            onClick={()=>dispatch(close())}
            className="btn btn-sm btn-circle btn-ghost text-black"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Name:</p>
              <p className="font-medium text-black">{selectedUser?.name || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600">Username:</p>
              <p className="font-medium text-black">{selectedUser?.username || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600">Email:</p>
              <p className="font-medium text-black">{selectedUser?.email || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600">Phone:</p>
              <p className="font-medium text-black">{selectedUser?.phone || "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="modal-action p-4">
          <button onClick={()=>dispatch(close())} className="btn btn-soft btn-primary">
            Close
          </button>
        </div>
      </div>
    </div>
 
  );
}

export default Modal;
