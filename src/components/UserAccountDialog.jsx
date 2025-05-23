import React from "react";

export default function UserAccountDialog({ toggleUserDialog }) {
  return (
    <div
      className="absolute right-10 top-[68px] z-50 bg-white shadow-lg border-2 border-gray-200 rounded-lg w-80 max-h-[350px] overflow-y-auto py-5"
      onClick={toggleUserDialog}
    >
      <div className="p-4 text-sm"></div>
    </div>
  );
}
