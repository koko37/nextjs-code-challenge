"use client";
import { useState } from "react";
import { fetchUsers } from "@/utils";
import type { User, UsersResponse } from "@/utils";
import UsersSection from "../UsersSection";

export default function LoadMore({
  from,
  total,
}: {
  from: number;
  total: number;
}) {
  const [pageNo, setPageNo] = useState(from);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = async () => {
    setLoading(true);
    let _users: UsersResponse | undefined = await fetchUsers(pageNo);
    if (_users && _users.data) {
      setUsers([...users, ..._users.data]);
    }
    setPageNo(pageNo + 1);
    setLoading(false);
  };

  return (
    <>
      <UsersSection users={users} />

      <div className="flex justify-center">
        <button
          onClick={loadMore}
          disabled={pageNo > total || loading}
          className="bg-teal-600 hover:bg-teal-700 disabled:bg-teal-200 text-white rounded-md px-4 py-2 mb-2"
        >
          Load more ({pageNo}/{total})
        </button>
      </div>
    </>
  );
}
