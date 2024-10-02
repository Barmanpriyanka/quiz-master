// components/MyDropdown.tsx
"use client";  // Ensure this is a Client Component

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { User } from '../types/User'; // Adjust the import based on your project structure

type MyDropdownProps = {
  user: User; // Expecting a User type
  onProfile: () => void;
  onLogout: () => void;
};

const MyDropdown: React.FC<MyDropdownProps> = ({ user, onProfile, onLogout }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Open Menu</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white" align='end'>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenu.Item>
          <button className="text-blue-600" onClick={onProfile}>Profile</button>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <button className="text-red-600" onClick={onLogout}>Logout</button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MyDropdown;
