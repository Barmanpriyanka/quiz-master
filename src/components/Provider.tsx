import { SessionProvider } from 'next-auth/react'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const Provider = ({children}: Props) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider