import chunk from "lodash.chunk";
import type { User } from "@/utils";
import UserCard from "../UserCard";

export default function UsersSection({ users }: { users: User[] }) {
  return (
    <div>
      {chunk(users, 3).map((row, id) => (
        <div className="flex justify-between mb-8" key={id}>
          {row.map((user) => (
            <UserCard user={user} key={user.email} />
          ))}
        </div>
      ))}
    </div>
  );
}
