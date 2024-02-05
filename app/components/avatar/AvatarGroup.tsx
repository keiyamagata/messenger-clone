"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarGroupProps {
  users: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
  const slicedUsers = users.slice(0, 3);

  const positions = {
    0: "top-0 left-3",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  return (
    <div className="relative w-11 h-11">
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${
            positions[index as keyof typeof positions]
          }`}
        >
          <Image
            src={user?.image || "/images/placeholder.jpg"}
            alt="Avatar image"
            fill
            sizes="100%"
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
