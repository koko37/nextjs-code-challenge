"use client";
import { useState } from "react";
import { fetchUsers } from "@/utils";
import type { User } from "@/utils";
import UsersSection from "../UsersSection";

export default async function LoadMore({
  from,
  total,
}: {
  from: number;
  total: number;
}) {
  const [pageNo, setPageNo] = useState(from);
  const [users, setUsers] = useState<User[]>([]);

	const loadMore = async () => {
		
	}

  return <UsersSection users={users} />;
}
