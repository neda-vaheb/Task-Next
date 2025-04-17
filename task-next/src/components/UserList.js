"use client";
import { UserContext } from "@/provider/UserContext";
import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Search from "./module/Search";
import Sort from "./module/Sort";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/core/features/userSlice";

function UserList({ searchParams }) {
  const { users, setUsers } = useContext(UserContext);
  const [sortOption, setSortOption] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectUser, setSelectUser] = useState(null);
  
const{selectedUser ,isOpen} = useSelector((state)=>state.users)
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchFiled, setSearchFiled] = useState("name");
  const [filterUser, SetFilterUser] = useState("");
  const limit = 5;
  const mySearchParams = useSearchParams();
  const page = mySearchParams.get("page") || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginateUsers = filterUser.slice(startIndex, endIndex);

  useEffect(() => {
    const results = users.filter((user) => {
      const fieldValue = user[searchFiled].toLowerCase();
      return fieldValue.includes(search.toLowerCase());
    });
    SetFilterUser(results);
  }, [search, searchFiled, users]);



  // const selectUserHandler = (user) => {
  //   setSelectUser(user);
  //   setIsOpen(true);
  // };

  // const closeHandler = () => {
  //   setSelectUser(null);
  //   setIsOpen(false);
  // };

  const handleSort = (option) => {
    setSortOption(option);
    let sortedUsers = [...users];

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
        // case "default":
        //  sortedUsers = [...users];
        // break;
      default:
        break;
    }

    setUsers(sortedUsers);
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between  items-center max-w-[1000px] m-auto">
        {/* sort */}
       <Sort handleSort={handleSort} sortOption={sortOption}/>
        {/* search */}
       <Search search={search} setSearch={setSearch} searchFiled={searchFiled} setSearchFiled={setSearchFiled}/>
      </div>
      {/* table */}
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
                onClick={() => dispatch(selectUser(user))}
                key={user.id}
                className="hover:bg-base-100 transition-colors"
              >
                <td className="px-4 py-2 border border-base-300 cursor-pointer hover:opacity-40 transition-all">
                  {user.id}
                </td>
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
     {isOpen && (
        <Modal/>
      )}
 
    </div>
  );
}


export default UserList;
