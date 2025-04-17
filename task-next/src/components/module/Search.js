import React from 'react'

function Search({search,setSearch,searchFiled,setSearchFiled}) {
  return (
    <div className="mb-4 flex gap-[10px]">
    <div className="input w-2xs">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        className="outline-0 border-none"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search By ${getFieldLabel(searchFiled)}...`}
      />
    </div>

    <select
      value={searchFiled}
      onChange={(e) => setSearchFiled(e.target.value)}
      className="w-[150px] select select-primary"
    >
      <option value="name">Name</option>
      <option value="email">Email</option>
      <option value="username">Username</option>
    </select>
  </div>
  )
}

export default Search

function getFieldLabel(field) {
    const labels = {
      name: "Name",
      email: "Email",
      username: "Username",
    };
    return labels[field] || field;
  }