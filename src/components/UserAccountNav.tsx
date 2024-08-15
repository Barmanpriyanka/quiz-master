import {User} from "next-auth"
import React from 'react'

type Props = {
    user:Pick<User, "name" | "image" | "email">
};

const UserAccountNav = ({user}: Props) => {
   
  return (
    <div>UserAccountNav</div>
  )
}

export default UserAccountNav