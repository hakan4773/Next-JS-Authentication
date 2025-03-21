import Link from "next/link";
import React from "react";
interface UsersTypes {
  _id: number;
  name: string;
  email: string;
  profileImage?: string;
}
export default function FilterUsers({
  filteredUsers,
}: {
  filteredUsers: UsersTypes[];
}) {

  return (
    <div className="absolute bg-white rounded-md w-full"> 
      <ul className="  top-full">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
           
            <Link href={`/users/${user._id}`}
              key={user._id}
              className="p-2 border-b border-gray-100 hover:bg-gray-100 hover:rounded-md flex items-center"
            >
              {user.profileImage && (
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              {user.name}{" "}
            </Link>

          ))
        ) : (
          <li className="p-2 text-gray-500">Sonuç bulunamadı</li>
        )}{" "}
      </ul>
    </div>
  );
}
