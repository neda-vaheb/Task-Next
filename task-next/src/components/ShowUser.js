import { UserContext } from "@/provider/UserContext";
import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ShowUser({ searchParams }) {
  const { users, setUsers } = useContext(UserContext);
  const [sortOption, setSortOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectUser, setSelectUser] = useState(null);
  const [search, setSearch] = useState("");
  const [searchFiled, setSearchFiled] = useState("name");
  const [filterUser, SetFilterUser] = useState("");
  
  useEffect(() => {
    const results = users.filter((user) => {
      const fieldValue = user[searchFiled].toLowerCase();
      return fieldValue.includes(search.toLowerCase());
    });
    SetFilterUser(results);
  }, [search, searchFiled, users]);
  
  const limit = 5; 
  const mySearchParams = useSearchParams();
  const router = useRouter();
  const page = mySearchParams.get("page") || 1;
  const perPage = mySearchParams.get("per_page") || 2;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginateUsers = filterUser.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / limit);
  
  const selectUserHandler = (user) => {
    setSelectUser(user);
    setIsOpen(true);
  };
  
  const closeHandler = () => {
    setSelectUser(null);
    setIsOpen(false);
  };
  
  const handleSort = (option) => {
    setSortOption(option); 
    const sortedUsers = [...users];

    switch (option) {
      case "name":
        sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "email":
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case "username":
        sortedUsers.sort((a, b) => a.username.localeCompare(b.username));
        break;
      default:
       
        break;
    }

    setUsers(sortedUsers);
  };

  return (
    <div className="overflow-x-auto p-4">
      {/* بخش مرتب‌سازی با دکمه‌ها */}
      <div className="flex justify-between  items-center max-w-[1000px] m-auto">

      <div className="flex items-center gap-2 mb-4">
        <div className="text-[1rem] font-medium">Sort by:</div>
        <button
          onClick={() => handleSort("name")}
          className={`px-[5px] py-[2px] text-[0.8rem]  rounded ${
            sortOption === "name" 
            ? "btn btn-active" 
            : "btn btn-soft btn-primary"
          }`}
          >
          Name
        </button>
        <button
          onClick={() => handleSort("email")}
          className={`px-[5px] py-[2px] text-[0.8rem] rounded ${
            sortOption === "email" 
            ? "btn btn-active" 
            : "btn btn-soft btn-primary"
          }`}
          >
          Email
        </button>
        <button
          onClick={() => handleSort("username")}
          className={`px-[5px] py-[2px] text-[0.8rem] rounded ${
            sortOption === "username" 
            ? "btn btn-active" 
            : "btn btn-soft btn-primary"
          }`}
          >
          Username
        </button>
      </div>

      {/* بخش جستجو */} 
      <div className="mb-4 flex gap-[10px]">
        <div className="input w-2xs">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
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
          </div>

      <table className="table table-zebra table-auto w-full max-w-[1000px] m-auto my-8">
        <thead className="bg-base-200 text-base-content">
          <tr className="bg-gray-200">
            <th className="px-4 py-4">UserId</th>
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">UserName</th>
            <th className="px-4 py-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {filterUser.length > 0 ? (
            paginateUsers.map((user) => (
              <tr
                onClick={() => selectUserHandler(user)}
                key={user.id}
                className="hover:bg-base-100 transition-colors"
              >
                <td className="px-4 py-2 border border-base-300 cursor-pointer hover:opacity-40 transition-all">{user.id}</td>
                <td className="px-4 py-2 border border-base-300 cursor-pointer">
                  {user.name}
                </td>
                <td className="px-4 py-2 border border-base-300 cursor-pointer">
                  {user.username}
                </td>
                <td className="px-4 py-2 border border-base-300 cursor-pointer">
                  <Link 
                    href={`mailto:${user.email}`}
                    className="link link-hover"
                  >
                    {user.email}
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                هیچ کاربری یافت نشد
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
      {isOpen && selectUser && (
        <Modal
          isOpen={isOpen}
          closeHandler={closeHandler}
          setIsOpen={setIsOpen}
          selectUser={selectUser}
        />
      )}
    </div>
  );
}

function getFieldLabel(field) {
  const labels = {
    name: "Name",
    email: "Email",
    username: "Username",
  };
  return labels[field] || field;
}

export default ShowUser;