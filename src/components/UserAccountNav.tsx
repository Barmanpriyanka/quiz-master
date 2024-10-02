// components/UserAccountNav.tsx
"use client";  // Ensure this is a Client Component

import MyDropdown from './MyDropdown';
import { User } from "next-auth"; // Adjust based on your setup
import React from 'react';

type Props = {
    user: User; // Using the full User type from NextAuth, which includes optional fields
}

const UserAccountNav: React.FC<Props> = ({ user }) => {
    const handleProfile = () => {
        // Logic for navigating to the profile page
        console.log("Navigating to Profile");
    };

    const handleLogout = () => {
        // Logic for logging out the user
        console.log("Logging out");
    };

    return (
        <MyDropdown 
            user={user}  // Pass the full user object to MyDropdown
            onProfile={handleProfile} 
            onLogout={handleLogout} 
        />
    );
}

export default UserAccountNav;
