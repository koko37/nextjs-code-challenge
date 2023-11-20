import { Suspense } from "react";
import { fetchUsers } from "@/utils";
import type { UsersResponse } from "@/utils";

import UsersSection from "@/components/UsersSection";
import LoadMore from "@/components/LoadMore";

export default async function Users() {
  let users: UsersResponse | undefined = await fetchUsers(1);

  if (!users) {
    return <div>Error while loading users</div>;
  }

  return (
    <main>
      <UsersSection users={users.data} />

      <Suspense fallback={<div className="text-center">...</div>}>
        <LoadMore from={2} total={users.total_pages} />
      </Suspense>
    </main>
  );
}
