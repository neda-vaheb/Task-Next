"use client";
import fechUsers from "@/utils/fetchUsers";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/UserContext";
import UserList from "./UserList";

function HomePage({ SearchParams }) {
  const { users, setUsers } = useContext(UserContext);
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("per_page")) || 2;
  
  useEffect(() => {
    const loadUsers = async () => {
      const allUsers = await fechUsers();
      setUsers(allUsers);
    };
    loadUsers();
  }, []);

  return (
    <div>
      <UserList />
      <div className="flex justify-center align-middle gap-[15px] items-center">
        <button
          className={page <= 1 ? "btn btn-disabled" : "btn btn-soft btn-primary"}
          disabled={page <= 1}
          onClick={() => {
            router.push(`/?page=${page - 1}&per_page=${perPage}`);
          }}
        >
          pre
        </button>

        <span>{page} / {perPage}</span>

        <button
          className={page >= perPage ? "btn btn-disabled" : "btn btn-soft btn-primary"}
          disabled={page >= perPage}
          onClick={() => {
            router.push(`/?page=${page + 1}&per_page=${perPage}`);
          }}
        >
          next
        </button> 
      </div>
    </div>
  );
}

export default HomePage;