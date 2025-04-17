import React from 'react'

function Sort({handleSort ,sortOption}) {
  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
    <div className="md:text-[1rem] text-[0.75rem] font-medium">SORT BY:</div>
    <button
      onClick={() => handleSort("name")}
      className={`px-[5px] py-[2px] md:text-[0.8rem] text-[0.6rem]  rounded ${
        sortOption === "name"
          ? "btn btn-active"
          : "btn btn-soft btn-primary"
      }`}
    >
      Name
    </button>
    <button
      onClick={() => handleSort("email")}
      className={`px-[5px] py-[2px] md:text-[0.8rem] text-[0.6rem]  rounded ${
        sortOption === "email"
          ? "btn btn-active"
          : "btn btn-soft btn-primary"
      }`}
    >
      Email
    </button>
    <button
      onClick={() => handleSort("username")}
      className={`px-[5px] py-[2px] md:text-[0.8rem] text-[0.6rem] rounded ${
        sortOption === "username"
          ? "btn btn-active"
          : "btn btn-soft btn-primary"
      }`}
    >
      Username
    </button>
    {/* <button
      onClick={() => handleSort("default")}
      className={`px-[5px] py-[2px] text-[0.8rem] rounded ${
        sortOption === "default"
          ? "btn btn-active"
          : "btn btn-soft btn-primary"
      }`}
    >
      default
    </button> */}
  </div>
  )
}

export default Sort
