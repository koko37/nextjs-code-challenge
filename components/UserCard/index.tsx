import type { User } from "@/utils";
import Image from "next/image";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="flex-1 flex flex-col gap-1 items-center">
      <Image
        src={user.avatar}
        alt={user.first_name}
        width="48"
        height="48"
        className="rounded-full"
      />
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>
        {user.first_name} {user.last_name}
      </p>
    </div>
  );
}
